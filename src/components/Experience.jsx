import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaLaptopHouse, FaLaptop } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
        title: "Fullstack Software Developer",
        company: "CloudTies Solution LLP",
        period: "March 2025 - Present",
        location: "Delhi, India",
        jobType: "Remote",
        description: [
          "Developed responsive front-end interfaces using HTML5, CSS3, and Bootstrap framework",
          "Utilized Git for version control and participated in code reviews",
          "Developed and maintained PHP Blade templates for dynamic content rendering",
          "Created a full-stack application using PHP Blade templating engine and Apache server"
        ]
    },
    {
      title: "Frontend Developer",
      company: "Ratna Sagar Pvt. Ltd.",
      period: "February 2024 - December 2024",
      location: "Delhi, India",
      jobType: "Office",
      description: [

        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented industry best practices for software development, testing, and deployment",
        "Fine tuned Pre-Trained Model Phi3 Using Generative AI",
        "Developed a Game using canvas and PaperJS"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const getJobTypeIcon = (jobType) => {
      switch(jobType.toLowerCase()) {
        case 'office':
          return <FaBuilding className={`text-blue-400`} />;
        case 'hybrid':
          return <FaLaptopHouse className={`text-blue-400`} />;
        case 'remote':
          return <FaLaptop className={`text-blue-400`} />;
        default:
          return <FaBuilding className={`text-blue-400`} />;
      }
    };
  
  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="stars-container">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.span 
              className="inline-block text-sm font-semibold text-blue-400 mb-2 tracking-wider uppercase px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Career Path
            </motion.span>
            <motion.h2 
              className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              whileInView={{ 
                backgroundPosition: ['0% center', '100% center'],
                transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' }
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Professional Experience
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-lg">
              My professional journey and the valuable experience I've gained along the way.
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-20 relative">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"
            ></motion.div>
            
            <div className="absolute left-[50%] top-[10%] w-3 h-3 rounded-full bg-blue-400/30 blur-sm -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-[50%] top-[30%] w-3 h-3 rounded-full bg-purple-400/30 blur-sm -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-[50%] top-[50%] w-3 h-3 rounded-full bg-pink-400/30 blur-sm -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-[50%] top-[70%] w-3 h-3 rounded-full bg-blue-400/30 blur-sm -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-[50%] top-[90%] w-3 h-3 rounded-full bg-purple-400/30 blur-sm -translate-x-1/2 hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`relative ${index % 2 === 0 ? 'md:pr-16 md:ml-auto md:mr-[50%]' : 'md:pl-16 md:ml-[50%]'} md:w-[48%] w-full z-10`}
              >
                <motion.div 
                  className={`hidden md:flex absolute ${index % 2 === 0 ? 'right-[-30px]' : 'left-[-30px]'} top-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 shadow-lg shadow-blue-500/30 items-center justify-center z-20`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <FaBriefcase className="text-white text-xl" />
                  <div className="absolute w-full h-full rounded-full bg-blue-500/50 animate-ping opacity-75"></div>
                </motion.div>
                
                <div className={`hidden md:block absolute ${index % 2 === 0 ? 'left-[calc(100%+40px)]' : 'right-[calc(100%+40px)]'} top-6 transform ${index % 2 === 0 ? 'translate-x-2' : '-translate-x-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-300 whitespace-nowrap border border-gray-700/50"
                  >
                    {exp.period.split(' - ')[0]}
                  </motion.div>
                </div>
                
                <motion.div 
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 25px 30px -12px rgba(59, 130, 246, 0.15), 0 10px 20px -5px rgba(147, 51, 234, 0.1)"
                  }}
                  className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 sm:p-10 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-blue-500/10 group relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))"
                  }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
                  
                  <div className="mb-8 relative">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">{exp.title}</h3>
                      <p className="text-xl text-gray-300 mt-2 group-hover:text-white transition-colors duration-300">{exp.company}</p>
                      
                      <div className="flex flex-col mt-4 text-sm space-y-2">
                        <p className={`text-purple-400 font-medium flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                          <FaCalendarAlt className={`inline-block ${index % 2 === 0 ? 'md:order-2' : ''}`} /> 
                          <span>{exp.period}</span>
                        </p>
                        <p className={`text-gray-400 flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                          <FaMapMarkerAlt className={`inline-block ${index % 2 === 0 ? 'md:order-2' : ''}`} /> 
                          <span>{exp.location}</span>
                        </p>
                        <p className={`text-blue-400 flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                          <span className={`inline-flex items-center justify-center w-5 h-5 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                            {getJobTypeIcon(exp.jobType)}
                          </span>
                          <span className="whitespace-nowrap">{exp.jobType}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <ul className={`space-y-4 mt-8 text-gray-300 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 * idx, duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`flex items-start ${index % 2 === 0 ? 'md:justify-end' : ''} group/item`}
                      >
                        <span className={`text-blue-400 mr-3 text-xl group-hover:text-blue-300 transition-colors duration-300 ${index % 2 === 0 ? 'md:order-2 md:ml-3 md:mr-0' : ''}`}>•</span>
                        <span className="leading-relaxed group-hover/item:text-white transition-colors duration-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="absolute w-5 h-5 border-t-2 border-l-2 border-blue-500/30 top-3 left-3 group-hover:border-blue-400/60 transition-colors duration-300"></div>
                  <div className="absolute w-5 h-5 border-t-2 border-r-2 border-blue-500/30 top-3 right-3 group-hover:border-blue-400/60 transition-colors duration-300"></div>
                  <div className="absolute w-5 h-5 border-b-2 border-l-2 border-blue-500/30 bottom-3 left-3 group-hover:border-blue-400/60 transition-colors duration-300"></div>
                  <div className="absolute w-5 h-5 border-b-2 border-r-2 border-blue-500/30 bottom-3 right-3 group-hover:border-blue-400/60 transition-colors duration-300"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.3); }
        }
        
        @keyframes float-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(10px) translateX(10px); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(10px) translateX(-10px); }
          50% { transform: translateY(0) translateX(-20px); }
          75% { transform: translateY(-10px) translateX(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Experience;