import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Eye, MessageSquare, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    { 
      category: "Data Analysis", 
      icon: BarChart3, 
      items: ["pandas", "numpy", "matplotlib", "seaborn", "statistical analysis"], 
      color: "bg-pink-500" 
    },
    { 
      category: "Machine Learning", 
      icon: Brain, 
      items: ["scikit-learn", "TensorFlow", "LightGBM", "model evaluation", "hyperparameter tuning"], 
      color: "bg-rose-500" 
    },
    { 
      category: "NLP", 
      icon: MessageSquare, 
      items: ["IndoBERT", "T5", "text summarization", "QA systems", "speech-to-text"], 
      color: "bg-pink-600" 
    },
    { 
      category: "Computer Vision", 
      icon: Eye, 
      items: ["OpenCV", "YOLOv8", "object detection", "segmentation", "image processing"], 
      color: "bg-fuchsia-500" 
    },
    { 
      category: "Tools & Platforms", 
      icon: Database, 
      items: ["SQL", "Google Colab", "Jupyter Notebook", "AWS S3", "CUDA", "Roboflow"], 
      color: "bg-purple-500" 
    },
    { 
      category: "Development", 
      icon: Code, 
      items: ["Tkinter", "Flet", "UI/UX prototyping"], 
      color: "bg-indigo-500" 
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pink-400">Technical Skills</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-pink-400 mx-auto rounded-full" 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ staggerChildren: 0.1 }}
        >
          {skillsData.map((skill) => (
            <motion.div 
              key={skill.category} 
              className="group relative" 
              variants={{ 
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 } 
              }} 
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 group-hover:border-pink-500/30 transition-all duration-300 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl ${skill.color}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap">
                  {skill.items.map((item) => (
                    <span 
                      key={item} 
                      className="inline-block bg-slate-700/50 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2 border border-gray-600/30 hover:border-pink-400/50 hover:text-pink-400 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;