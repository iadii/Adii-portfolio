import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;