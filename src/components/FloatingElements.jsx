import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, Sparkles, Cpu } from 'lucide-react';

const FloatingElements = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            <motion.div className="absolute top-20 left-10" animate={{ y: [0, -10, 0], rotate: [12, 0, 12] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <Flower2 className="w-8 h-8 text-pink-300/30" />
            </motion.div>
            <motion.div className="absolute top-1/3 right-20" animate={{ y: [0, 20, 0], rotate: [-45, -30, -45] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <Flower2 className="w-6 h-6 text-rose-300/20" />
            </motion.div>
            <motion.div className="absolute bottom-1/4 left-1/4" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                <Sparkles className="w-5 h-5 text-fuchsia-300/25" />
            </motion.div>
            <motion.div className="absolute top-1/2 right-1/3" animate={{ y: [0, -15, 0], rotate: [180, 190, 180] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <Cpu className="w-7 h-7 text-purple-300/20" />
            </motion.div>
        </div>
    );
};

export default FloatingElements;
