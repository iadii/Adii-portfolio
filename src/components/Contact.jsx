import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {

  useEffect(() => {
    emailjs.init("KZX8haICvARchPn5z");
  }, []);
  
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' });
    
    console.log("Form data being sent:", form.current);

    emailjs.sendForm(
      'service_oxuf6za',
      'template_tz0jwk8',
      form.current,
      'KZX8haICvARchPn5z'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({ name: '', email: '', message: '' });
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      })
      .catch((error) => {

        console.error('Error sending email:', error);
        setStatus({ type: 'error', message: `Failed to send message: ` });
      });
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  }

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have a question or want to work together? Drop me a message!
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700"
            variants={containerVariants}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">mishraaditya@live.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+91 9771893609</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">Delhi, India</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <motion.a 
                  href="#" 
                  className="bg-blue-500/20 p-3 rounded-full hover:bg-blue-500/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-blue-500/20 p-3 rounded-full hover:bg-blue-500/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            <motion.form 
              ref={form} 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div variants={inputVariants} whileFocus="focus">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  id="name" 

                  name="from_name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                  required
                />
              </motion.div>
              
              <motion.div variants={inputVariants} whileFocus="focus">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">Your Email</label>
                <input 
                  type="email" 
                  id="email" 

                  name="from_email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                  required
                />
              </motion.div>
              
              <motion.div variants={inputVariants} whileFocus="focus">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your Message</label>
                <textarea 
                  id="message" 

                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full p-3 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                  required
                ></textarea>
              </motion.div>
              
              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm font-medium p-2 rounded ${
                    status.type === 'success' ? 'bg-green-500/20 text-green-400' : 
                    status.type === 'error' ? 'bg-red-500/20 text-red-400' : 
                    'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
              
              <motion.button 
                type="submit" 
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ${
                  status.type === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: status.type !== 'loading' ? 1.02 : 1 }}
                whileTap={{ scale: status.type !== 'loading' ? 0.98 : 1 }}
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
