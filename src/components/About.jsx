import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Calendar,
  Laptop,
  Award,
  Brain,
} from "lucide-react";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#0074B7]">About Me</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#0074B7] mx-auto rounded-full" 
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
              I'm an Information Technology professional with a strong background in systems development and technical support. In today’s rapidly evolving digital landscape, I have developed a deep interest in&nbsp;
              <span className="text-[#0074B7] font-semibold">Science, Artificial Intelligence,</span> and&nbsp;
              <span className="text-[#0074B7] font-semibold">Machine Learning</span> technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              For me, data is more than just numbers; it is a strategic asset that can be leveraged to generate insights, predictions, and real-world solutions to various&nbsp;
              <span className="text-[#0074B7] font-semibold">business and technical problems</span>. and&nbsp; This interest drives me to continuously learn how
              <span className="text-[#0074B7] font-semibold">data analytics, machine learning modeling, and AI applications</span> work in real-world contexts.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By combining my technical expertise in IT support and software development, I aim to bridge the gap between technology infrastructure and data-driven innovation. I believe that the synergy between&nbsp;
              <span className="text-[#0074B7] font-semibold">IT systems</span>&nbsp; knowledge and&nbsp;
              <span className="text-[#0074B7] font-semibold">data analysis</span> skills is essential in addressing both current and future digital challenges.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative" 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#0074B7]/10 rounded-2xl p-8 backdrop-blur-sm border border-[#0074B7]/20">
              <div className="space-y-6">
                {/* Lokasi */}
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#0074B7]" />
                  <span className="text-gray-300">Pekanbaru, Riau, Indonesia</span>
                </div>

                {/* Pendidikan */}
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                  <span className="text-gray-300">
                    Universitas Riau — Bachelor's in Informatics Engineering
                  </span>
                </div>

                {/* Pekerjaan saat ini */}
                <div className="flex items-center space-x-4">
                  <Laptop className="w-6 h-6 text-sky-400" />
                  <span className="text-gray-300">
                    IT Support & Software Development
                  </span>
                </div>

                {/* Minat: Data Science Bootcamp 
                <div className="flex items-center space-x-4">
                  <Award className="w-6 h-6 text-rose-400" />
                  <span className="text-gray-300">Data Science Bootcamp Graduate</span>
                </div>*/}

                {/* Minat: AI */}
                <div className="flex items-center space-x-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Interested in Data Science & AI/ML</span>
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