import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import reactIcon from '../assets/react.svg';
import nodeIcon from '../assets/nodejs.svg';
import pythonIcon from '../assets/python.svg';
import expressIcon from '../assets/express.svg';
import javaIcon from '../assets/java.svg';
import myImage from '../../public/my-profile.png'
import myResume from '../../public/Aditya-Mishra.pdf'
// import cppIcon from '../assets/cpp.svg';


const Hero = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: [0, 1, 0],
      scale: [1, 1.2, 1],
      transition: { duration: 3, repeat: Infinity, repeatDelay: 5 }
    });
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.7, ease: "easeOut" }
    })
  };

  const socialIcons = [
    { icon: faGithub, url: "https://github.com/iadii" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/iadii/" },
    { icon: faXTwitter, url: "https://x.com/iadii_" },
  ];


  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const techStack = [
    { icon: reactIcon, name: "React", position: { top: '15%', left: isMobile ? '-24%' : '5%' } },
    { icon: nodeIcon, name: "Node.js", position: { top: '30%', right: isMobile ? '-24%' : '5%' } },
    { icon: pythonIcon, name: "Python", position: { top: '50%', left: isMobile ? '-24%' : '8%' } },
    { icon: expressIcon, name: "Express", position: { top: '65%', right: isMobile ? '-24%' : '8%' } },
    { icon: javaIcon, name: "Java", position: { top: '85%', left: isMobile ? '-10%' : '15%' } },
    // { icon: cppIcon, name: "C++", position: { top: '75%', right: '15%' } },
  ];


  const roleText = "Full Stack Developer";
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-600/5"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-left mb-10 md:mb-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/50"
            >
              <motion.span 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                className="inline-block w-2 h-2 mr-2 rounded-full bg-green-400"
              ></motion.span>
              <span className="text-sm text-gray-300"><a href={myResume} target='_blank'>Available for hire</a></span>
            </motion.div>
            
            <motion.h1 
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Hi, I'm Adii
            </motion.h1>
            
            <motion.h2 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300"
            >
              {roleText}
            </motion.h2>
            
            <motion.p 
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl text-gray-400 max-w-3xl mb-10"
            >
              I build beautiful, responsive, and user-friendly web applications with modern technologies.
            </motion.p>
            
            <motion.div 
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2 sm:gap-4"
            >
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-medium rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition duration-300"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-medium rounded-lg border-2 border-purple-600 text-white hover:bg-purple-600 transition duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>
            

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex mt-8 space-x-4"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -3, 
                    rotate: [0, 10, -10, 0],
                    transition: { rotate: { duration: 0.3 } }
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center relative"
          >
            {/* Spotlight effect */}
            <motion.div
              className="absolute w-full h-full rounded-full bg-gradient-radial from-purple-500/20 to-transparent"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: 0.3
              }}
              whileHover={{ scale: 1.03 }}
              className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/50 relative"
            >
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                src={myImage}
                alt="Adii" 
                className="w-full h-full object-cover"
              />
              

              <motion.div
                className="absolute inset-0 rounded-full bg-purple-500/0"
                animate={controls}
              />
            </motion.div>
            

            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="absolute p-2 rounded-full bg-gray-800/80 border border-purple-500/50"
                style={{
                  ...tech.position,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  y: [0, -8, 0],
                  scale: [0.95, 1, 0.95]
                }}
                transition={{ 
                  duration: 4,
                  delay: index * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(147, 51, 234, 0.5)",
                  transition: { duration: 0.2 }
                }}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-8 h-8" 
                  title={tech.name}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;