# Page Pulse

A small tool that audits any URL: fetch it, and report its vitals — HTTP
status, response time, title, meta description, H1 count, images missing
`alt` text, and an approximate word count. Built with Django.

## Live Demo

🚀 **[https://page-pulse-rz01.onrender.com](https://page-pulse-rz01.onrender.com)**

## How it's structured

```
pagepulse/
├── manage.py
├── requirements.txt
├── Procfile              # for Render/Railway/Heroku-style deploys
├── build.sh               # Render build command
├── pagepulse/              # project settings / URLs / WSGI
└── audit/                  # the actual app
    ├── services.py         # URL validation, fetch, parse -> report dict
    ├── views.py             # index page + /api/audit/ JSON endpoint
    ├── urls.py
    └── templates/audit/index.html   # single-page frontend (HTML/CSS/JS, no build step)
```

`services.py` has no Django-view code in it on purpose — it's a plain
function (`audit_url(raw_url) -> dict`) you could import and unit test or
reuse from a management command, a Celery task, etc.

## Running locally

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Visit `http://127.0.0.1:8000/`.

## API

### `POST /api/audit/`

**Request**

```json
{ "url": "example.com" }
```

(`https://` is assumed if no scheme is given.)

**Response — 200 OK**

```json
{
  "requested_url": "https://example.com",
  "final_url": "https://example.com/",
  "status_code": 200,
  "response_time_ms": 184,
  "content_type": "text/html; charset=UTF-8",
  "title": "Example Domain",
  "meta_description": null,
  "h1_count": 1,
  "images_total": 0,
  "images_missing_alt": 0,
  "word_count": 28,
  "truncated": false
}
```

**Response — error (4xx/5xx)**

```json
{ "error": "The site took too long to respond (timed out).", "code": "timeout" }
```

| Situation                         | HTTP status | `code`               |
|------------------------------------|:-----------:|-----------------------|
| Empty / malformed URL              | 400         | `empty_url` / `invalid_url` |
| Points at localhost/internal host  | 400         | `blocked_host`        |
| DNS / connection failure           | 502         | `connection_error`    |
| SSL handshake failure              | 502         | `ssl_error`            |
| Request timed out                  | 504         | `timeout`               |
| Non-HTML response (image, PDF, JSON, ...) | 200 (with `error` field in body, since the fetch itself succeeded) | — |
| Anything unexpected                | 500         | `internal_error`      |

The endpoint never crashes the worker: every known failure mode above is
caught and turned into a structured JSON error; anything unanticipated is
caught by a final `except Exception` and logged server-side rather than
leaking a traceback to the client.

**CSRF:** the frontend calls this endpoint with Django's CSRF cookie/header,
since it's same-origin. If you call it from a different origin or a script,
you'll need to either use `csrf_exempt` on the view or send a valid CSRF
token — see [Django's CSRF docs](https://docs.djangoproject.com/en/5.0/ref/csrf/).

## Design choices / trade-offs

- **No database.** The app has no models; SQLite is only present because
  Django's `admin`/`auth`/`sessions` apps expect one. Nothing about an
  audit is persisted — each request is stateless.
- **Response size cap (5 MB)** and **short timeouts (5s connect / 12s
  read)** so a single request can't hang a worker or blow up memory on a
  huge or slow response. If the cap is hit, the report includes
  `"truncated": true`.
- **Local/internal hosts are blocked** (`localhost`, `127.0.0.1`, `.local`)
  so the tool can't be trivially used as an open proxy to probe internal
  infrastructure.
- **Word count is approximate** — it's a regex word-boundary count over the
  page's visible text (scripts/styles stripped), not a linguistically
  precise tokenizer.

## Deploying (free tier)

### Render.com (recommended — simplest)

1. Push this repo to GitHub.
2. On [render.com](https://render.com) → **New → Web Service** → connect
   the repo.
3. Settings:
   - **Build command:** `./build.sh`
   - **Start command:** `gunicorn pagepulse.wsgi`
4. Add environment variables:
   - `SECRET_KEY` → any long random string
   - `DEBUG` → `False`
   - `ALLOWED_HOSTS` → `your-app.onrender.com`
   - `CSRF_TRUSTED_ORIGINS` → `https://your-app.onrender.com`
5. Deploy. Render's free web services build straight from `requirements.txt`
   and `build.sh`; `Procfile` is included too in case you use a platform
   that reads it instead (Railway, Heroku).

### Railway / Heroku-style platforms

These read the included `Procfile` directly:

```
release: python manage.py migrate --noinput
web: gunicorn pagepulse.wsgi --log-file -
```

Set the same environment variables as above (`SECRET_KEY`, `DEBUG=False`,
`ALLOWED_HOSTS`, `CSRF_TRUSTED_ORIGINS`) in the platform's dashboard.

### PythonAnywhere

Works too (free tier), but configure it via their WSGI file pointing at
`pagepulse.wsgi.application` and set env vars in their "Web" tab instead of
a Procfile — see their [Django deployment guide](https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/).

## Testing it manually

```bash
curl -X POST https://your-app.onrender.com/api/audit/ \
  -H "Content-Type: application/json" \
  -d '{"url": "example.com"}'
```

(For local `curl` testing you'll need a CSRF token — easiest is just to use
the browser UI, which handles the cookie/header automatically.)
