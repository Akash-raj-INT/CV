import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const CVs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [generalCV, setGeneralCV] = useState<File | null>(null);
  const [specializedCV, setSpecializedCV] = useState<File | null>(null);

  const handleGeneralCVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setGeneralCV(e.target.files[0]);
    }
  };

  const handleSpecializedCVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSpecializedCV(e.target.files[0]);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cv');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="cv"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-white to-blue-100"
      style={{
        backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7\" cy=\"7\" r=\"1\" fill=\"%23cbd5e1\" fill-opacity=\"0.2\"/></svg>')",
        backgroundRepeat: "repeat"
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-8">
            Curriculum Vitae (CV)
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 animate-pulse"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className={`bg-white rounded-2xl p-8 shadow-xl border border-slate-100 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ animationDelay: '200ms' }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-blue-600 group-hover:scale-110 group-hover:font-bold transition-all duration-300 transform">General CV</h3>
            <p className="text-slate-600 mb-6 leading-relaxed group-hover:scale-105 group-hover:font-medium transition-all duration-300 transform">A comprehensive overview of my education, experience, and skills for general opportunities.</p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-2" 
              onClick={() => window.open('https://github.com/Akash-raj-INT/CV/blob/main/General%20CV%20Akash.pdf', '_blank')}
            >
              Download General CV
            </Button>
          </div>
          <div 
            className={`bg-white rounded-2xl p-8 shadow-xl border border-slate-100 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ animationDelay: '400ms' }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-purple-600 group-hover:scale-110 group-hover:font-bold transition-all duration-300 transform">Specialized CV</h3>
            <p className="text-slate-600 mb-6 leading-relaxed group-hover:scale-105 group-hover:font-medium transition-all duration-300 transform">A tailored CV highlighting specialized skills and experience for targeted roles or industries.</p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-2" 
              onClick={() => window.open('https://github.com/Akash-raj-INT/CV/blob/main/Specialised%20CV%20Akash.pdf', '_blank')}
            >
              Download Specialized CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVs; 