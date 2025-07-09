import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import FloatingElements from './components/FloatingElements';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = 'home';
      for (const sectionName of sections) {
        const element = refs[sectionName].current;
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionName;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = refs[sectionId].current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <FloatingElements />
      <main>
        <div ref={refs.home}><Hero scrollToSection={scrollToSection} /></div>
        <div ref={refs.about}><About /></div>
        <div ref={refs.skills}><Skills /></div>
        <div ref={refs.projects}><Projects /></div>
        <div ref={refs.education}><Education /></div>
        <div ref={refs.contact}><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;