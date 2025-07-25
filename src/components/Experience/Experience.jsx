import React from "react";

function Experience() {
  return (
    <div
      id="experience"
      className="text-white py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Heading - Styled Like Education */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Projects and hands-on learning that shaped my journey.
        </p>
      </div>

      {/* Experience Details */}
      <div className="bg-[#1f1f1f] rounded-xl p-6 shadow-md">
        <p className="text-lg">
          I am currently looking for entry-level opportunities in web
          development where I can apply my skills and grow as a developer.
        </p>

        <p className="mt-4">
          During my learning journey, I built a fitness mobile application
          called <span className="text-purple-400 font-semibold">FitFlex</span>
          . It includes features like daily workouts, nutrition tracking,
          exercise filters, and progress reports. The app was built using
          Flutter and Firebase.
        </p>

        <p className="mt-4">
          I also created a personal portfolio website using{" "}
          <span className="text-purple-400 font-semibold">React.js</span> to
          showcase my projects, skills, and educational background. This helped
          me understand components, props, hooks, and responsive UI design.
        </p>

        <p className="mt-4">
          I am excited to join a company where I can learn from real-world
          projects and contribute with dedication and curiosity.
        </p>
      </div>
    </div>
  );
}

export default Experience;
