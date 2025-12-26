import React from "react";

function Experience() {
  return (
    <div
      id="experience"
      className="text-white py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Internship and projects that shaped my development journey.
        </p>
      </div>

      {/* Experience Details */}
      <div className="bg-[#1f1f1f] rounded-xl p-6 shadow-md space-y-4">
        <p className="text-lg font-semibold text-purple-400">
          PHP Developer Intern — Rainstream Technology
        </p>

        <p className="text-sm text-gray-400">
          September 2024 – December 2024 (3 Months)
        </p>

        <p>
          I completed a three-month internship at{" "}
          <span className="text-purple-400 font-semibold">
            Rainstream Technology
          </span>{" "}
          as a PHP Developer Intern. During this internship, I worked on a
          large-scale Office Management System and a Job Platform.
        </p>

        <p>
          My responsibilities included developing backend modules using{" "}
          <span className="text-purple-400 font-semibold">PHP</span> and{" "}
          <span className="text-purple-400 font-semibold">MySQL</span>,
          implementing CRUD operations, role-based access control, and assisting
          in API integration. I also collaborated with team members to debug
          issues and improve application performance.
        </p>

        <p>
          In addition to my internship experience, I built a fitness mobile
          application called{" "}
          <span className="text-purple-400 font-semibold">FitFlex</span>. The app
          includes features such as daily workouts, nutrition tracking, exercise
          filtering, and progress reports. It was developed using Flutter and
          Firebase.
        </p>

        <p>
          I also created a personal portfolio website using{" "}
          <span className="text-purple-400 font-semibold">React.js</span> to
          showcase my projects, skills, and educational background. This project
          helped me gain hands-on experience with components, props, hooks, and
          responsive UI design.
        </p>

        <p>
          I am eager to join a team where I can contribute to real-world
          projects, continue learning, and grow as a professional developer.
        </p>
      </div>
    </div>
  );
}

export default Experience;
