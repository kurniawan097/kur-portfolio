import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

const Navbar = ({ sections = [], activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-pink-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            {/*<Flower2 className="w-8 h-8 text-pink-400" />*/}
            <span className="text-xl font-bold text-[#0074B7]">Kurniawan</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-300 hover:text-[#0074B7] transition-colors duration-300 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#0074B7] transition-all duration-300 transform origin-left ${
                    activeSection === item ? 'scale-x-100' : 'scale-x-0'
                  } group-hover:scale-x-100`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;