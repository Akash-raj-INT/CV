import { ChevronDown, Download, Mail, Github, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      {/* Background with modern gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Enhanced profile section */}
          <div className="mb-12">
            <div className="relative w-40 h-40 mx-auto mb-8">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img 
                    src="https://i.postimg.cc/MGbpMwgB/IMG-0564.jpg" 
                    alt="Akash Raj Profile"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-300"></div>
            </div>
            
            {/* Enhanced typography */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">Hello, I'm</p>
                <h1 className="text-5xl sm:text-7xl font-black text-slate-800 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Akash Raj
                  </span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl font-bold text-slate-700">
                  Data Science Enthusiast
                </p>
                
                <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  Passionate Computer Science student at Lovely Professional University, 
                  specializing in AI, Machine Learning, and Big Data analytics to transform 
                  raw data into actionable insights and intelligent solutions.
                </p>
              </div>
              
              {/* Enhanced tagline */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent h-px top-1/2"></div>
                <div className="relative bg-slate-50 px-8 py-4 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                  <p className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent group-hover:scale-110 group-hover:font-black transition-all duration-300 transform">
                    Turning Data Into Insights. Insights Into Impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/Akash-raj-INT" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-slate-600 hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/akash-raj-873b69250/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-slate-600 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:akashraj848114@gmail.com" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-slate-600 hover:text-blue-600">
              <Mail size={24} />
            </a>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="relative">
            <div className="animate-bounce">
              <div className="w-8 h-12 border-2 border-slate-400 rounded-full mx-auto mb-2 flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <ChevronDown 
                size={24} 
                className="mx-auto text-slate-400 cursor-pointer hover:text-blue-600 transition-colors duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
            <p className="text-sm text-slate-500 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
