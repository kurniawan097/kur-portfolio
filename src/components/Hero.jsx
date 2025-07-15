import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, Sparkles } from 'lucide-react';
import profileImage from '../assets/profile.jpeg'; 

const Hero = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      <motion.div 
        className="max-w-6xl mx-auto px-6 text-center" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
       <div className="mb-8">
          <motion.div 
            className="relative inline-block" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-[#0074B7]/20 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
            </div>
            { /* <motion.div 
              className="absolute -top-4 -right-4" 
              animate={{ rotate: 360 }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-[#0074B7]" />
            </motion.div>*/}
          </motion.div> 
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-[#0074B7]">Kurniawan</span><br />
          <span className="text-white">Tech Enthusiast</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          An Information Technology professional with experience as a &nbsp;
          <span className="text-[#0074B7] font-semibold">Web Developer</span> and&nbsp; 
          <span className="text-[#0074B7] font-semibold">IT Support specialist</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button 
            className="group px-8 py-4 bg-[#0074B7] hover:bg-[#0074B7] rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0074B7]/25" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={() => scrollToSection('projects')}
          >
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <div className="flex space-x-4">
            <motion.a 
              href="https://github.com/kurniawan097" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-slate-800/50 rounded-full hover:bg-[#0074B7]/20 transition-colors duration-300 group" 
              whileHover={{ y: -5 }}
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-[#0074B7]" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/kurniawan-/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-slate-800/50 rounded-full hover:bg-[#0074B7]/20 transition-colors duration-300 group" 
              whileHover={{ y: -5 }}
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-[#0074B7]" />
            </motion.a>
            <motion.a 
              href="mailto:kurniawan.kurni097@gmail.com" 
              className="p-3 bg-slate-800/50 rounded-full hover:bg-[#0074B7]/20 transition-colors duration-300 group" 
              whileHover={{ y: -5 }}
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-[#0074B7]" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;