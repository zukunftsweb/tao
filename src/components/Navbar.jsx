import React from 'react';
import { motion } from 'framer-motion';
import { Home, UtensilsCrossed, Search } from 'lucide-react';
import { GOLD_GRADIENT, LOGO_URL } from '../data';

const BottomDock = ({ activeTab, setActiveTab, onOpenInfo }) => (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-md h-16 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-between px-4 z-50 shadow-2xl">
        <button onClick={() => setActiveTab('home')} className="relative p-2 rounded-full outline-none">
            <Home size={22} className={activeTab === 'home' ? "text-white" : "text-white/30 transition-colors"} />
            {activeTab === 'home' && <motion.div layoutId="dock-glow" className="absolute inset-0 rounded-full blur-md bg-[#800020]/60 -z-10" />}
        </button>

        <button onClick={() => setActiveTab('menu')} className="relative p-2 rounded-full outline-none">
            <UtensilsCrossed size={22} className={activeTab === 'menu' ? "text-white" : "text-white/30 transition-colors"} />
            {activeTab === 'menu' && <motion.div layoutId="dock-glow" className="absolute inset-0 rounded-full blur-md bg-[#800020]/60 -z-10" />}
        </button>

        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveTab('booking')}
            className="h-16 w-16 rounded-full -mt-12 flex items-center justify-center border-[5px] border-[#000C1D] shadow-[0_10px_30px_rgba(191,149,63,0.5)] z-50 overflow-hidden"
            style={{ background: GOLD_GRADIENT }}
        >
            <UtensilsCrossed size={20} className="text-black" />
        </motion.button>

        <button onClick={() => setActiveTab('search')} className="relative p-2 rounded-full outline-none">
            <Search size={22} className={activeTab === 'search' ? "text-white" : "text-white/30 transition-colors"} />
            {activeTab === 'search' && <motion.div layoutId="dock-glow" className="absolute inset-0 rounded-full blur-md bg-[#800020]/60 -z-10" />}
        </button>

        {/* Trigger Info Modal */}
        <button onClick={onOpenInfo} className="relative p-2 rounded-full outline-none group">
            <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
                <img
                    src={LOGO_URL}
                    alt="TAO Mini"
                    className="w-full h-full object-contain transition-all filter grayscale brightness-200 opacity-40 group-hover:opacity-100"
                />
            </div>
        </button>
    </div>
);

export default BottomDock;
