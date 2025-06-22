import React from 'react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: "Fitness Club Manager",
      description: "Comprehensive club management system built in C with advanced file handling capabilities for member data.",
      tech: ["C Programming", "File Handling", "Data Management"],
      category: "System",
      gradient: "from-green-500 to-emerald-500",
      link: "https://github.com/Akash-raj-INT/C-Programing/tree/main/C%20Project"
    },
    {
      title: "Gold's Gym Fitness Website",
      description: "Modern fitness website built with React and integrated with RapidAPI for dynamic content delivery.",
      tech: ["React", "RapidAPI", "Web Development"],
      category: "Web",
      gradient: "from-purple-500 to-violet-500",
      link: "https://github.com/Akash-raj-INT/HTML-CSS/tree/main/MY%20PROJECT"
    },
    {
      title: "Coffee Chain Sales Dashboard",
      description: "Interactive data visualization dashboard using Excel with advanced charting and analytics features.",
      tech: ["Excel", "Data Visualization", "Analytics"],
      category: "Data",
      gradient: "from-orange-500 to-red-500",
      link: "https://github.com/Akash-raj-INT/Project"
    },
    {
      title: "Car Sales Data Analysis & Visualization",
      description: "Developed comprehensive data analysis and visualization system for car sales data with interactive dashboards and insights.",
      tech: ["Data Analysis", "Data Visualization", "Python", "Pandas"],
      category: "Data",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Crypto-AI-Gaming Blog",
      description: "Multi-topic blog platform covering cryptocurrency, artificial intelligence, and gaming content.",
      tech: ["Content Management", "Web Design", "SEO"],
      category: "Content",
      gradient: "from-indigo-500 to-purple-500",
      link: "https://lpuburgers.blogspot.com/"
    },
    {
      title: "Restaurant Websites",
      description: "Developed websites for LPU Burgers & Barney's Burgers with modern design and user experience.",
      tech: ["Web Development", "UI Design", "Branding"],
      category: "Web",
      gradient: "from-teal-500 to-cyan-500",
      link: "https://lpuburgers.weebly.com/"
    }
  ];

  const categories = ["All", "Web", "Data", "System", "Content"];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of diverse projects spanning web development, data science, and content creation
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  : "border-slate-300 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 hover:text-blue-700"
              }`}
              onClick={() => setActiveFilter(category)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden relative transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 group-hover:scale-x-110`}></div>
              
              <div className="mb-6">
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-bold rounded-full mb-4 transform transition-all duration-300 group-hover:scale-105`}>
                  {project.category}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:bg-slate-200 transition-all duration-200 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-2 border-slate-300 text-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                {project.link ? 'View' : 'View Project Details'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
