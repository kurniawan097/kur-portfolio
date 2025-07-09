import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Brain, MessageSquare, Sparkles, BarChart3, Zap, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projectsData = [
        { 
            title: "Vehicle Detection & Counting System", 
            description: "Advanced vehicle detection and counting system using video recordings with image processing, vehicle object classification, and visual analytics pipeline.", 
            tech: ["OpenCV", "YOLOv8", "Python", "Computer Vision"], 
            icon: Eye, 
            color: "bg-pink-500", 
            link: "https://github.com/haelahpx/LapisProjectFinal" 
        },
        { 
            title: "Brain Tumor Segmentation", 
            description: "Medical image segmentation using deep learning to identify and mark brain tumor areas in MRI images with focus on preprocessing and accuracy evaluation.", 
            tech: ["TensorFlow", "Deep Learning", "Medical Imaging", "CNN"], 
            icon: Brain, 
            color: "bg-rose-500", 
            link: "https://docs.google.com/document/d/1sxs9YagTuaEHa7FULJztpTr6J0ePP04IZzz2_wSZP4o/edit?usp=sharing" 
        },
        { 
            title: "Indonesian History QA System", 
            description: "Text-based question-answering system for Indonesian history powered by IndoBERT model, capable of understanding context and providing relevant answers.", 
            tech: ["IndoBERT", "NLP", "Transformers", "Python"], 
            icon: MessageSquare, 
            color: "bg-fuchsia-500", 
            link: "https://docs.google.com/document/d/18UgQ1jWhb5fuGE0BP-3vDDHY8Vc656s2oneH8dP-Xxg/edit?usp=sharing" 
        },
        { 
            title: "Text Summarization System", 
            description: "Automatic text summarization based on T5 Transformer model with interactive UI using Tkinter, featuring voice recognition and ROUGE metrics evaluation.", 
            tech: ["T5", "Tkinter", "Speech Recognition", "NLP"], 
            icon: Sparkles, 
            color: "bg-purple-500", 
            link: "https://docs.google.com/document/d/1Df_qv8cgq4dqAVRY682CNmXH8zRwPgnksDoHJJ6HSuQ/edit?usp=sharing" 
        },
        { 
            title: "Income Prediction Model", 
            description: "Analyzed census income data and built classification models to predict income >50K with comprehensive EDA, preprocessing, and evaluation.", 
            tech: ["scikit-learn", "Pandas", "Data Analysis", "Classification"], 
            icon: BarChart3, 
            color: "bg-indigo-500", 
            link: "https://colab.research.google.com/drive/1sO7N-H4S-tZPZJpAOVOP8stFGxOtf185?usp=sharing" 
        },
        { 
            title: "LightGBM Regression Model", 
            description: "Created regression prediction model using LightGBM with team collaboration to compare model performance and optimize results.", 
            tech: ["LightGBM", "Regression", "Model Optimization", "Collaboration"], 
            icon: Zap, 
            color: "bg-pink-600", 
            link: "https://colab.research.google.com/drive/1XSnoP_2i3BpZElE26FJSZdJOIN3qzxyV?usp=sharing" 
        }
    ];
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-pink-400">Featured Projects</span></h2>
                    <motion.div className="w-24 h-1 bg-pink-400 mx-auto rounded-full" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}></motion.div>
                </div>
                <motion.div className="grid md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.1 }}>
                    {projectsData.map((project) => (
                        <motion.div key={project.title} className="group relative" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 group-hover:border-pink-500/30 transition-all duration-300 h-full flex flex-col">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`p-3 rounded-xl ${project.color}`}><project.icon className="w-6 h-6 text-white" /></div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{project.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                                <div className="flex flex-wrap mb-4">
                                    {project.tech.map((tech) => (<span key={tech} className="inline-block bg-slate-700/50 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2 border border-gray-600/30">{tech}</span>))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-pink-400 hover:text-fuchsia-400 transition-colors group/btn mt-auto">
                                    <span>View Details</span><ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;