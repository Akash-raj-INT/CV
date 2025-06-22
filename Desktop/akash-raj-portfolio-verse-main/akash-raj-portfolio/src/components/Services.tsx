import { Book, BookOpen, CircleCheck, File, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Book,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights with advanced analytics and compelling visualizations."
    },
    {
      icon: BookOpen,
      title: "Web Application Development",
      description: "Build responsive, scalable web applications using modern frameworks and best practices."
    },
    {
      icon: CircleCheck,
      title: "AI/ML Integration",
      description: "Implement machine learning models and AI solutions to automate and enhance business processes."
    },
    {
      icon: File,
      title: "Big Data Processing",
      description: "Handle large-scale data processing and querying using Hadoop ecosystem tools."
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 hover:scale-105 hover:font-black transition-all duration-300 transform cursor-pointer">Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 animate-pulse"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto hover:scale-105 hover:font-semibold transition-all duration-300 transform cursor-pointer">
            Comprehensive technology solutions to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-blue-200 hover:scale-105 transform cursor-pointer"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-blue-800 group-hover:scale-110 group-hover:font-black transition-all duration-300 transform">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 group-hover:scale-105 group-hover:font-medium transition-all duration-300 transform">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
