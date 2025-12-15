import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 px-6 sm:px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-semibold px-4 sm:px-0">
          My education has helped me grow and shaped my knowledge in tech.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line - Mobile: left side, Desktop: center */}
        <div className="absolute left-6 sm:left-1/2 w-0.5 sm:w-1 bg-white/80 h-full"></div>

        {education.map((edu, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={edu.id}
              className="relative mb-12 sm:mb-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gray-400 border-4 border-[#8245ec] w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Card - Mobile: full width with left margin, Desktop: alternating */}
              <div
                className={`ml-14 sm:ml-0 w-[calc(100%-3.5rem)] sm:w-[45%] p-4 sm:p-6 rounded-2xl border border-white/30 bg-gray-900/80 backdrop-blur-md shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] sm:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  isEven 
                    ? "sm:mr-auto sm:mr-[calc(50%+1.5rem)]" 
                    : "sm:ml-auto sm:ml-[calc(50%+1.5rem)]"
                } transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_2px_rgba(130,69,236,0.4)]`}
              >
                {/* Mobile: Vertical Layout, Desktop: Horizontal Layout */}
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  {/* Institution Logo */}
                  <div className="w-16 h-12 bg-white rounded-md overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                    <img
                      src={edu.img}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Education Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-300 mt-1">{edu.school}</h4>
                    <p className="text-xs text-gray-400 mt-2">{edu.date}</p>
                    
                    <div className="mt-3 p-2 bg-gray-800/50 rounded-lg">
                      <p className="text-gray-300 font-semibold">
                        Grade: <span className="text-purple-300">{edu.grade}</span>
                      </p>
                    </div>
                    
                    <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;