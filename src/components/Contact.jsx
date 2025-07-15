import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_amd4sut',
            'template_11y6q49',
            formRef.current,
            'SQgFt4DhfS_lu3Uus'
        )

        .then((result) => {
            console.log(result.text);
            setStatus('Thank you for your message!');
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            console.log(error.text);
            setStatus('Failed to send message. Please try again.');
        });

        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    className="bg-slate-800/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-700/50"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                        <Mail className="w-16 h-16 text-[#0074B7] mx-auto mb-6" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-[#0074B7]">Get In Touch</span></h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Have a question or want to work together? Leave your details and I'll get back to you.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0074B7] transition-all" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0074B7] transition-all" placeholder="your.email@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0074B7] transition-all" placeholder="Your message..."></textarea>
                        </div>
                        <div className="text-center pt-2">
                            {status ? (
                                <p className="text-green-400">{status}</p>
                            ) : (
                                <motion.button type="submit" className="group px-8 py-3 bg-[#0074B7] hover:bg-[#0074B7] rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0074B7]/25" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>Send Message</span>
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.button>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
