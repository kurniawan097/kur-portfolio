import React from 'react';
import { motion } from 'framer-motion';
{/*import { Eye, Brain, MessageSquare, Sparkles, BarChart3, Zap, ExternalLink } from 'lucide-react';*/}
import {Globe, Smartphone, ExternalLink
} from "lucide-react"; // pastikan impor icon ini

const Projects = () => {
    const projectsData = [
            {
                title: "Company Profile Website – Visiyosindo",
                description: "A responsive company profile website designed as a landing page to showcase services, solutions, and company information for PT. Visiyosindo Teknologi Indonesia.",
                tech: ["WordPress"],
                icon: Globe,
                color: "bg-blue-600",
                link: "https://visiyosindo.com/"
            },
            {
                title: "Office Internal System – Visiyosindo",
                description: "An internal web-based system for managing daily office operations such as attendance, document workflows, and inventory. Developed for staff productivity and paperless environment.",
                tech: ["PHP", "MySQL"],
                icon: Globe,
                color: "bg-emerald-600",
                link: "https://office.visiyosindo.id/"
            },
            {
                title: "BPJS Claim Submission System – KP Project",
                description: "A web application developed to digitize the BPJS Kesehatan claim form submission process in the city of Pekanbaru. This project was built as part of a university internship (Kerja Praktek).",
                tech: ["PHP", "MySQL"],
                icon: Globe,
                color: "bg-indigo-600",
                link: "https://github.com/kurniawan097/bpjs"
            },
            {
                title: "Augmented Reality Learning App",
                description: "An Android-based educational application using Augmented Reality (AR) technology. Developed with Unity and C# to provide interactive learning experiences.",
                tech: ["AR", "Android", "Unity", "C#"],
                icon: Smartphone,
                color: "bg-purple-600",
                link: "https://publikasi.dinus.ac.id/index.php/semnastik/article/view/2808"
            }
            ];
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-[#0074B7]">Featured Projects</span></h2>
                    <motion.div className="w-24 h-1 bg-[#0074B7] mx-auto rounded-full" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}></motion.div>
                </div>
                <motion.div className="grid md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.1 }}>
                    {projectsData.map((project) => (
                        <motion.div key={project.title} className="group relative" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 group-hover:border-[#0074B7]/30 transition-all duration-300 h-full flex flex-col">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`p-3 rounded-xl ${project.color}`}><project.icon className="w-6 h-6 text-white" /></div>
                                    <h3 className="text-xl font-bold text-white group-hover:[#0074B7] transition-colors">{project.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                                <div className="flex flex-wrap mb-4">
                                    {project.tech.map((tech) => (<span key={tech} className="inline-block bg-slate-700/50 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2 border border-gray-600/30">{tech}</span>))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#0074B7] hover:text-fuchsia-400 transition-colors group/btn mt-auto">
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