import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { GLASS_BG } from '../data';

const MenuListItem = ({ item, idx, preload = false }) => {
    const [selectedVar, setSelectedVar] = useState(item.variations ? item.variations[0] : null);
    const displayPrice = selectedVar ? selectedVar.price : item.price;

    return (
        <motion.div
            className="flex flex-col h-full rounded-[32px] overflow-hidden relative group shadow-2xl border border-white/5"
            style={{ background: 'rgba(20, 20, 20, 0.8)', backdropFilter: 'blur(24px)' }}
            whileTap={{ scale: 0.98 }}
        >
            {/* --- STEP 2: HERO VISUAL (55% Height) --- */}
            {/* Force image to take significant portion. object-fit: cover handled by class. */}
            <div className="h-[55%] w-full relative overflow-hidden shrink-0">
                <img
                    src={item.img}
                    alt={item.name}
                    loading={preload ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-40" />
            </div>

            {/* Content Container - Flex Column to handle Body and Footer anchoring */}
            <div className="flex-1 flex flex-col p-5 min-h-0">

                {/* --- STEP 3: CONTENT GROUPING (Body) --- */}
                {/* Title and Description treated as a unit */}
                <div className="flex flex-col gap-2 mb-2">
                    <h4 className="text-[#FBF5B7] font-serif font-bold text-lg leading-tight uppercase tracking-wide line-clamp-2">
                        {item.name}
                    </h4>
                    <p className="text-white/60 text-xs leading-relaxed line-clamp-3 font-light">
                        {item.desc}
                    </p>
                </div>

                {/* --- STEP 4: FOOTER ANCHORING (Anchor) --- */}
                {/* margin-top: auto pushes this container to the absolute bottom */}
                <div className="mt-auto pt-4 flex flex-col gap-3">

                    {/* Variations selection (if applicable) */}
                    {item.variations && (
                        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                            {item.variations.map((v) => (
                                <button
                                    key={v.name}
                                    onClick={(e) => { e.stopPropagation(); setSelectedVar(v); }}
                                    className={`px-2 py-0.5 rounded-md text-[9px] uppercase font-bold tracking-wider transition-all border ${selectedVar?.name === v.name
                                            ? 'bg-[#BF953F] border-[#BF953F] text-black'
                                            : 'border-white/10 text-white/40 hover:bg-white/5'
                                        }`}
                                >
                                    {v.name}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Price and Action Row */}
                    <div className="flex justify-between items-center border-t border-white/5 pt-3">
                        <span className="text-2xl font-serif font-black text-white tracking-tight">
                            {displayPrice}
                        </span>

                        <button className="w-10 h-10 rounded-full bg-[#BF953F] flex items-center justify-center text-black shadow-lg hover:bg-[#D4A84D] transition-colors active:scale-90">
                            <Plus size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuListItem;
