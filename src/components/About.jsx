import React from 'react';
import { FaJs, FaReact, FaJava, FaNodeJs, FaHtml5, FaPython } from 'react-icons/fa';
import { SiDjango, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={40} /> },
    { name: 'React', icon: <FaReact className="text-blue-400" size={40} /> },
    { name: 'Java', icon: <FaJava className="text-red-500" size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={40} /> },
    { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500" size={40} /> },
    { name: 'Python', icon: <FaPython className="text-blue-500" size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" size={40} /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-300" size={40} /> },
    { name: 'Express', icon: <SiExpress className="text-blue-300" size={40} /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-500">About Me</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Who am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in web technologies and a keen eye for design.
              I enjoy creating seamless user experiences and solving complex problems through clean, efficient code.
            </p>
            <p className="text-gray-300 mb-6">
              With several years of experience in the industry, I've worked on a variety of projects ranging from small business websites to complex web applications.
              I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="https://github.com/iadii" target="_blank" className="text-purple-500 hover:text-purple-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/iadii_" target="_blank" className="text-purple-500 hover:text-purple-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              
              <a href="https://www.linkedin.com/in/iadii/" target="_blank" className="text-purple-500 hover:text-purple-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">My Skills</h3>
            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="mt-2 text-gray-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;