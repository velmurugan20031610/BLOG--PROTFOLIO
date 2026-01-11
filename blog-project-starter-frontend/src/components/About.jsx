import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
        About <span className="text-orange-400">Me</span>
      </h2>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        
        {/* Name */}
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">
          Velmurugan M
        </h3>

        {/* Bio */}
        <p className="text-gray-700 leading-relaxed mb-8 text-center sm:text-left">
          I am a Full Stack Developer passionate about building real-time and
          responsive web applications. I enjoy working with modern frontend and
          backend technologies and continuously improve my skills by developing
          practical projects.
        </p>

        {/* Skills */}
        <h4 className="text-xl font-semibold mb-4">Skills</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Git & GitHub",
            "Postman",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 hover:bg-orange-50 transition text-gray-700 px-4 py-2 rounded-lg text-sm text-center font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Education */}
        <h4 className="text-xl font-semibold mb-4">Education</h4>

        <div className="space-y-4 text-gray-700">
          <div className="border-l-4 border-orange-400 pl-4">
            <p className="font-semibold">B.Sc Physics</p>
            <p className="text-sm">
              Sri Ramakrishna Mission Vidhyalaya College of Arts and Science,
              Coimbatore (2021 – 2024)
            </p>
          </div>

          <div className="border-l-4 border-orange-400 pl-4">
            <p className="font-semibold">M.Sc Physics</p>
            <p className="text-sm">
              Sri Ramakrishna Mission Vidhyalaya College of Arts and Science,
              Coimbatore (2024 – 2026)
            </p>
          </div>

          <div className="border-l-4 border-orange-400 pl-4">
            <p className="font-semibold">Full Stack Development</p>
            <p className="text-sm">
              Error Makes Clever (2025 – 2026)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
