const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & ML",
      skills: ["Python", "Pandas", "scikit-learn", "Data Analysis", "Machine Learning"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      textColor: "text-blue-700"
    },
    {
      title: "Web Development",
      skills: ["React", "HTML/CSS", "JavaScript"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      textColor: "text-green-700"
    },
    {
      title: "Big Data",
      skills: ["Hive", "HBase", "Hadoop", "Data Processing", "ET"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      textColor: "text-purple-700"
    },
    
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 hover:scale-105 hover:font-black transition-all duration-300 transform cursor-pointer">
            Skills & Technologies
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto hover:scale-105 hover:font-semibold transition-all duration-300 transform cursor-pointer">
            A comprehensive toolkit spanning data science, full-stack development, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`${category.bgColor} rounded-2xl p-8 shadow-xl border border-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              
              <h3 className={`text-2xl font-bold ${category.textColor} mb-6 group-hover:scale-110 group-hover:font-black transition-all duration-300 transform`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white/70 backdrop-blur-sm text-slate-700 rounded-full text-sm font-medium border border-white/80 hover:bg-white hover:scale-110 hover:font-bold transition-all duration-200 transform cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
