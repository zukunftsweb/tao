import React from 'react';
import { motion } from 'framer-motion';
import { LOGO_URL } from '../data';

const Logo = ({ variant = 'default' }) => (
    <div className={`flex flex-col items-center w-full z-20 pointer-events-none transition-all duration-300 ${variant === 'home' ? 'pt-[calc(env(safe-area-inset-top)+2rem)]' : 'pt-[env(safe-area-inset-top)] mt-2'}`}>
        {/* Image */}
        <div className={`relative flex items-center justify-center overflow-hidden transition-all duration-500 ${variant === 'home' ? 'w-44 h-14' : 'w-24 h-10'}`}>
            <img
                src={LOGO_URL}
                alt="TAO Logo"
                className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_16px_rgba(191,149,63,0.5)]"
                style={{ filter: 'brightness(1.1) contrast(1.2)' }}
            />
        </div>

        {/* Tagline only visible on Home Screen */}
        {variant === 'home' && (
            <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] tracking-[3px] text-[#C5A059] uppercase mt-3 font-medium text-center font-serif"
            >
                Sushi • Asian Cuisine • Bar
            </motion.p>
        )}
    </div>
);

export default Logo;
