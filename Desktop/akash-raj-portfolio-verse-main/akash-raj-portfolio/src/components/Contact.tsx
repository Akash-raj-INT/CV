import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_8r94r1g',        // Updated Service ID
        'template_qe2l93x',       // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'ro8Dm-tq-EOmSxUW2'       // Public Key
      );
      console.log('Email sent successfully!');
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 hover:scale-105 hover:font-black transition-all duration-300 transform cursor-pointer">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 animate-pulse"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto hover:scale-105 hover:font-semibold transition-all duration-300 transform cursor-pointer">
            Ready to turn your ideas into reality? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 hover:scale-105 hover:font-black transition-all duration-300 transform cursor-pointer">Let's Connect</h3>
            <p className="text-slate-600 mb-8 leading-relaxed hover:scale-105 hover:font-medium transition-all duration-300 transform cursor-pointer">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply chat about technology and innovation. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="mb-8">
                <Tabs defaultValue="email" className="w-full">
                  <TabsList className="w-full flex justify-between mb-4">
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                    <TabsTrigger value="github">GitHub</TabsTrigger>
                    <TabsTrigger value="twitter">Twitter</TabsTrigger>
                  </TabsList>
                  <TabsContent value="email">
                    <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-all duration-300 transform group" onClick={() => window.open('mailto:akashraj848114@gmail.com', '_blank')}>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <Mail className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:font-bold group-hover:scale-110 transition-all duration-300 transform">Email</h4>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="linkedin">
                    <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-all duration-300 transform group" onClick={() => window.open('https://www.linkedin.com/in/akash-raj-873b69250/', '_blank')}>
                      <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <svg className="text-blue-700" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v4.74z"/></svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:font-bold group-hover:scale-110 transition-all duration-300 transform">LinkedIn</h4>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="github">
                    <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-all duration-300 transform group" onClick={() => window.open('https://github.com/Akash-raj-INT', '_blank')}>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <Github className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:font-bold group-hover:scale-110 transition-all duration-300 transform">GitHub</h4>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="twitter">
                    <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-all duration-300 transform group" onClick={() => window.open('https://x.com/mrakash57723134?s=11', '_blank')}>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <svg className="text-blue-500" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.697a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082 4.48 4.48 0 00-7.635 4.086A12.72 12.72 0 013.11 4.86a4.48 4.48 0 001.39 5.976 4.47 4.47 0 01-2.03-.56v.057a4.48 4.48 0 003.59 4.393 4.48 4.48 0 01-2.025.077 4.48 4.48 0 004.18 3.11A8.98 8.98 0 012 19.54a12.7 12.7 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.54.697z"/></svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:font-bold group-hover:scale-110 transition-all duration-300 transform">Twitter</h4>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2 hover:scale-105 hover:font-bold transition-all duration-200 transform cursor-pointer">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className={`w-full hover:scale-105 transition-all duration-200 transform ${errors.name ? 'border-red-500' : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2 hover:scale-105 hover:font-bold transition-all duration-200 transform cursor-pointer">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full hover:scale-105 transition-all duration-200 transform ${errors.email ? 'border-red-500' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2 hover:scale-105 hover:font-bold transition-all duration-200 transform cursor-pointer">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className={`w-full hover:scale-105 transition-all duration-200 transform ${errors.subject ? 'border-red-500' : ''}`}
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2 hover:scale-105 hover:font-bold transition-all duration-200 transform cursor-pointer">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  className={`w-full hover:scale-105 transition-all duration-200 transform ${errors.message ? 'border-red-500' : ''}`}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 hover:scale-105 hover:font-bold transition-all duration-300 transform"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
