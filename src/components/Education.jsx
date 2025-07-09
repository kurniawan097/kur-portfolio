import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Eye } from 'lucide-react';

const Education = () => {
    const educationData = [
        { institution: "President University", degree: "Bachelor's in Information Technology", focus: "AI & Machine Learning Concentration", period: "2023 - 2027", description: "Comprehensive knowledge in programming, data analysis, and AI/ML technologies.", icon: BookOpen },
        { institution: "Digital Skola", degree: "Data Science Bootcamp", focus: "Intensive Data Science Program", period: "2025", description: "Hands-on experience with data processing, analytics, machine learning, and business insight storytelling.", icon: Brain },
        { institution: "Lapis AI Project", degree: "President University", focus: "Computer Vision & Vehicle Detection", period: "2025", description: "Advanced AI research projects focusing on computer vision and vehicle detection systems with practical applications.", icon: Eye }
    ];
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-pink-400">Education & Training</span></h2>
                    <motion.div className="w-24 h-1 bg-pink-400 mx-auto rounded-full" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}></motion.div>
                </div>
                <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.15 }}>
                    {educationData.map((edu) => (
                        <motion.div key={edu.institution} className="group relative" variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 group-hover:border-pink-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                                        <div className="p-3 rounded-xl bg-pink-500"><edu.icon className="w-6 h-6 text-white" /></div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                            <p className="text-pink-400 font-semibold">{edu.degree}</p>
                                        </div>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <p className="text-fuchsia-400 font-semibold">{edu.focus}</p>
                                        <p className="text-gray-400">{edu.period}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education; 