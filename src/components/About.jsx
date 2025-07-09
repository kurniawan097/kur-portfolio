import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Brain } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pink-400">About Me</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-pink-400 mx-auto rounded-full" 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6" 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Information Technology student at President University with a strong interest in&nbsp;
              <span className="text-pink-400 font-semibold">Data Science</span> and&nbsp;
              <span className="text-fuchsia-400 font-semibold">Software Development</span>. Currently pursuing my bachelor's degree with expected graduation in 2027.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I have extensive experience in collaborative projects and intensive bootcamps, including the&nbsp;
              <span className="text-rose-400 font-semibold">Digital Skola Data Science Bootcamp</span>. My expertise spans data analysis, AI/ML model development, and delivering insights through data visualization.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm skilled in analyzing complex datasets, building intelligent systems, and working with cutting-edge technologies like <span className="text-purple-400 font-semibold">computer vision</span>, <span className="text-pink-400 font-semibold">natural language processing</span>, and&nbsp;
              <span className="text-fuchsia-400 font-semibold">machine learning</span>. Always eager to learn new technologies and tackle challenging projects.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative" 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-pink-500/10 rounded-2xl p-8 backdrop-blur-sm border border-pink-500/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-pink-400" />
                  <span className="text-gray-300">Bekasi Regency, West Java, Indonesia</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-fuchsia-400" />
                  <span className="text-gray-300">Expected Graduation: 2027</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-6 h-6 text-rose-400" />
                  <span className="text-gray-300">Data Science Bootcamp Graduate</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">AI Research Participant</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;