import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4 hover:scale-105 hover:font-black transition-all duration-300 transform cursor-pointer">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 animate-pulse"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto hover:scale-105 hover:font-semibold transition-all duration-300 transform cursor-pointer">
            Passionate about unlocking insights from data and creating intelligent solutions that drive real-world impact
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer">
          <h3 className="text-3xl font-bold text-slate-800 mb-4 group-hover:scale-110 group-hover:font-black transition-all duration-300 transform">Akash Raj</h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed group-hover:scale-105 group-hover:font-medium transition-all duration-300 transform">
            Motivated and curious data science enthusiast passionate about uncovering insights from data and developing intelligent systems. I combine theoretical knowledge with practical implementation to create solutions that make a real impact through data-driven approaches.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:scale-110 hover:font-bold transition-all duration-200 transform cursor-pointer">Data Science</span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:scale-110 hover:font-bold transition-all duration-200 transform cursor-pointer">AI/ML</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:scale-110 hover:font-bold transition-all duration-200 transform cursor-pointer">Big Data</span>
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer">
            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center group-hover:scale-110 group-hover:font-black transition-all duration-300 transform">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
              Education
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 hover:scale-105 transition-all duration-200 transform">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg hover:font-black transition-all duration-200">B.Tech in Computer Science</h5>
                  <p className="text-slate-600 font-medium hover:font-semibold transition-all duration-200">Lovely Professional University</p>
                  <p className="text-sm text-slate-500 hover:font-medium transition-all duration-200">Expected 2026</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 hover:scale-105 transition-all duration-200 transform">
                <div className="w-3 h-3 bg-purple-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg hover:font-black transition-all duration-200">Intermediate (PCM)</h5>
                  <p className="text-slate-600 font-medium hover:font-semibold transition-all duration-200">St. Joseph Public School (CBSE), Samastipur, Bihar</p>
                  <p className="text-sm text-slate-500 hover:font-medium transition-all duration-200">April 2019 - March 2021</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 hover:scale-105 transition-all duration-200 transform">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg hover:font-black transition-all duration-200">Matriculation</h5>
                  <p className="text-slate-600 font-medium hover:font-semibold transition-all duration-200">St. Joseph Public School (CBSE), Samastipur, Bihar</p>
                  <p className="text-sm text-slate-500 hover:font-medium transition-all duration-200">April 2018 - March 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer">
            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center group-hover:scale-110 group-hover:font-black transition-all duration-300 transform">
              <div className="w-2 h-8 bg-gradient-to-b from-green-600 to-blue-600 rounded-full mr-4"></div>
              Certifications
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-2 hover:scale-105 transition-all duration-200 transform">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg hover:font-black transition-all duration-200">Cloud Computing</h5>
                  <p className="text-slate-600 font-medium hover:font-semibold transition-all duration-200">NPTEL Certification: November 2024</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-2 hover:scale-105 transition-all duration-200 transform">
                <div className="w-3 h-3 bg-purple-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg hover:font-black transition-all duration-200">Data Science & Machine Learning</h5>
                  <p className="text-slate-600 font-medium hover:font-semibold transition-all duration-200">Certified Course: Cipher's: July 2024</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-2 hover:scale-105 transition-all duration-200 transform">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg hover:font-black transition-all duration-200">Certificate of Generative AI and prompt engineering</h5>
                  <p className="text-slate-600 font-medium hover:font-semibold transition-all duration-200">Coursera: August 2024</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 hover:scale-105 transition-all duration-200 transform">
                <div className="w-3 h-3 bg-orange-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg hover:font-black transition-all duration-200">Certificate of Programming in DSA</h5>
                  <p className="text-slate-600 font-medium hover:font-semibold transition-all duration-200">Udemy: December 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Achievements */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer">
          <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center group-hover:scale-110 group-hover:font-black transition-all duration-300 transform">
            <div className="w-2 h-8 bg-gradient-to-b from-green-600 to-blue-600 rounded-full mr-4"></div>
            Experience & Extracurricular
          </h4>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-600 hover:scale-105 transition-all duration-200 transform">
              <h5 className="font-bold text-slate-800 text-lg mb-4 hover:font-black transition-all duration-200">ACHIEVEMENTS</h5>
              <ul className="list-disc pl-5 text-slate-600 space-y-2">
                <li className="hover:font-medium transition-all duration-200">Selected among top 10% participants in the Google Developer Solution Challenge Program 2025. February 2025</li>
                <li className="hover:font-medium transition-all duration-200">Solved 100+ Problems on LeetCode focusing on data structure and algorithms.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-600 hover:scale-105 transition-all duration-200 transform">
              <h5 className="font-bold text-slate-800 text-lg mb-4 hover:font-black transition-all duration-200">EXTRACURRICULARS</h5>
              <ul className="list-disc pl-5 text-slate-600 space-y-2">
                <li className="hover:font-medium transition-all duration-200">Trained AI models in subjects like math, programming and English on outlier.ai platform. November 2024</li>
                <li className="hover:font-medium transition-all duration-200">Organized education, healthcare and sanitation programs with an NGO. July 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
