import React from 'react';
import { Flower2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-800/50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                    {/*<Flower2 className="w-6 h-6 text-pink-400" />*/}
                    <span className="text-lg font-semibold text-[#0074B7]">Kurniawan</span>
                </div>
                <p className="text-gray-400">© {new Date().getFullYear()} Kurniawan. Tech Enthusiast.</p>
            </div>
        </footer>
    );
};

export default Footer; 