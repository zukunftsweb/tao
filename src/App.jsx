import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import {
  Search,
  MapPin,
  UtensilsCrossed,
  ChevronRight,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Modular Imports
import {
  NAVY_BG,
  GOLD_GRADIENT,
  BURGUNDY,
  HOME_HERO_IMAGE,
  MENU_DATA
} from './data';
import Logo from './components/Logo';
import BottomDock from './components/Navbar';
import { InfoModal, GuestSelectorModal } from './components/BookingModal';
import MenuCard from './components/MenuCard';

// --- Screen Components ---

const ScreenHome = ({ setActiveTab }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="h-full flex flex-col"
  >
    <div className="w-full h-[75vh] relative overflow-hidden border-b border-white/5 mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-b-[50px] flex flex-col">

      {/* Backgrounds - Absolute */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-transparent h-48 pointer-events-none" />

      <motion.div
        animate={{ scale: [1.05, 1.12, 1.05], x: [0, -5, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url("${HOME_HERO_IMAGE}")` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#000C1D] via-transparent to-[#000C1D]/10" />

      {/* Content Flow - Relative Z-30 */}
      <div className="relative z-30 flex flex-col h-full w-full">
        {/* 1. Logo Section */}
        <div className="shrink-0">
          <Logo variant="home" />
        </div>

        {/* 2. Main Content Section */}
        <div className="flex-1 flex flex-col items-center justify-end pb-20 px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Headline with significant margin-top as requested */}
            <h2 className="text-5xl md:text-6xl font-serif font-black italic tracking-tight leading-[0.95] mb-4 mt-[8vh]"
              style={{ background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'contrast(1.3)' }}>
              Die Kunst<br />des Geschmacks
            </h2>

            <div className="w-24 h-[1px] bg-[#FBF5B7]/40 mb-6" />
            <p className="text-white/90 text-[13px] tracking-[0.2em] font-light uppercase mb-10 max-w-xs mx-auto leading-relaxed font-serif text-shadow-sm">
              Exquisite Asiatische Fusionsküche & Bar in Rastatt
            </p>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('menu')}
              className="pointer-events-auto px-10 py-4 border border-[#BF953F] rounded-full backdrop-blur-md bg-white/5 shadow-2xl transition-all"
            >
              <span className="text-white text-[12px] font-bold tracking-[0.3em] uppercase font-serif">
                Zur Speisekarte
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ScreenMenu = () => {
  const [activeCategory, setActiveCategory] = useState("SALATE");
  const categories = Object.keys(MENU_DATA);
  const scrollRef = useRef(null);

  // SYNCHRONOUS Scroll Reset (The "Ghost" Fix)
  // useLayoutEffect fires BEFORE the browser paints. 
  // We explicitly disable scroll-snap and overflow to force the browser to accept the 0 position
  // without trying to "snap back" to the previous offset.
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (el) {
      // 1. Disable interference
      el.style.scrollSnapType = 'none';
      el.style.overflow = 'hidden';

      // 2. Force Reset
      el.scrollLeft = 0;

      // 3. Restore after a micro-tick, ensuring the 0 position holds
      requestAnimationFrame(() => {
        el.style.scrollSnapType = 'x mandatory';
        el.style.overflow = ''; // Clears inline style, reverting to CSS class 'overflow-x-auto'
      });
    }
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col pt-[env(safe-area-inset-top)]"
    >
      {/* Hidden Global Image Preloader */}
      <div style={{ display: 'none' }}>
        {Object.values(MENU_DATA).flat().map((item) => (
          <img key={'preload-' + item.name} src={item.img} alt="preload" />
        ))}
      </div>

      <Logo variant="minimized" />

      {/* Sticky Category Bar */}
      <div className="px-4 mt-4 mb-4 shrink-0 z-20">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full border text-[11px] font-bold tracking-[0.3em] transition-all uppercase ${activeCategory === cat
                ? 'border-[#BF953F] bg-white/10 text-white shadow-[0_0_15px_rgba(191,149,63,0.3)]'
                : 'border-white/10 text-white/30 bg-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .force-menu-card {
           min-width: 85vw !important;
           width: 85vw !important;
           max-width: 85vw !important;
           flex-shrink: 0 !important;
           scroll-snap-align: center !important;
           margin-right: 0 !important;
        }
        .force-scroll-container {
           display: flex !important;
           flex-direction: row !important;
           overflow-x: auto !important;
           overflow-y: hidden !important;
           touch-action: pan-x !important;
           -webkit-overflow-scrolling: touch !important;
           scroll-snap-type: x mandatory !important;
        }
      `}</style>

      {/* SINGLE TRACK RECYCLED CONTAINER */}
      {/* Key is explicitly OMITTED to prevent re-mounting/flashing */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex-1 force-scroll-container"
        style={{
          // CRITICAL: This enables the Horizontal Swipe Layout
          display: 'flex',              // Row layout by default
          flexDirection: 'row',         // Forces items side-by-side
          overflowX: 'auto',            // Enables horizontal scrolling
          overflowY: 'hidden',          // Prevents vertical scrolling

          // SNAPPING PHYSICS
          scrollSnapType: 'x mandatory', // Apple-like snapping
          scrollBehavior: 'smooth',

          // SPACING
          gap: '20px',                  // Space between cards
          padding: '24px 20px 100px 20px', // <--- INCREASED BOTTOM PADDING TO 100px (Lifts cards above nav)
          width: '100%',                // Full screen width

          // ALIGNMENT
          alignItems: 'start',         // <--- ALIGN TO TOP
          overscrollBehaviorX: 'contain',

          // HIDE SCROLLBAR
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* The Items */}
        {MENU_DATA[activeCategory].map((item, index) => (
          <MenuCard
            key={index}
            item={item}
            idx={index}
          />
        ))}

        {/* Spacer to allow scrolling the last item to the center */}
        <div style={{ minWidth: '20px', flexShrink: 0 }} />
      </div>
    </motion.div>
  );
};

const ScreenBooking = () => {
  const [selected, setSelected] = useState(null);
  const [guests, setGuests] = useState(2);
  const [showGuestModal, setShowGuestModal] = useState(false);

  const defaultDate = new Date();
  defaultDate.setHours(20, 0, 0, 0);
  const [bookingDate, setBookingDate] = useState(defaultDate.toISOString().slice(0, 16));

  const tables = [
    { id: 1, pos: [60, 40], type: 'booth' },
    { id: 2, pos: [30, 80], occupied: true },
    { id: 3, pos: [100, 110], type: 'booth' },
    { id: 4, pos: [140, 60], type: 'table' },
    { id: 5, pos: [180, 100], occupied: true },
    { id: 6, pos: [210, 30], type: 'booth' },
  ];

  const getFormattedDate = (isoString) => {
    const date = new Date(isoString);
    const today = new Date();
    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth();

    const timeStr = date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

    if (isToday) return `Heute, ${timeStr}`;
    return `${date.toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })}, ${timeStr}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col pt-[env(safe-area-inset-top)]"
      style={{
        overflowY: 'auto',
        height: '100%',
        paddingBottom: '150px'
      }}
    >
      <Logo variant="minimized" />

      <div className="px-8 mt-4 max-w-2xl mx-auto w-full relative z-20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white font-bold text-xl tracking-tight">Reservierung</h3>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40"><MapPin size={14} /></div>
        </div>

        {/* Interactive Inputs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">

          <div className="relative bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden group">
            <div className="absolute inset-0 bg-[#FBF5B7]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <input
              type="datetime-local"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer text-white bg-transparent"
              style={{ colorScheme: 'dark' }}
            />
            <div className="p-4 relative z-10 pointer-events-none">
              <div className="flex justify-between items-start mb-1">
                <p className="text-white/40 text-[9px] uppercase tracking-widest">Datum</p>
                <ChevronRight size={10} className="text-white/20" />
              </div>
              <p className="text-white text-xs font-bold truncate">
                {getFormattedDate(bookingDate)}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowGuestModal(true)}
            className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-md text-left relative group active:scale-95 transition-transform outline-none"
          >
            <div className="absolute inset-0 bg-[#FBF5B7]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="flex justify-between items-start mb-1">
              <p className="text-white/40 text-[9px] uppercase tracking-widest">Personen</p>
              <ChevronRight size={10} className="text-white/20" />
            </div>
            <p className="text-white text-xs font-bold">{guests} {guests === 1 ? 'Person' : 'Personen'}</p>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showGuestModal && (
          <GuestSelectorModal
            guests={guests}
            setGuests={setGuests}
            onClose={() => setShowGuestModal(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="flex-1 bg-white/5 backdrop-blur-3xl border-t border-white/10 rounded-t-[50px] relative overflow-hidden"
        initial={{ y: 200 }} animate={{ y: 0 }}
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, ${BURGUNDY}, transparent)` }} />
        <div className="p-8 max-w-2xl mx-auto w-full">
          <h3 className="text-[10px] font-black tracking-[0.4em] mb-10 text-center opacity-70" style={{ color: '#FBF5B7' }}>ZONE WÄHLEN</h3>

          <div className="relative h-64 perspective-[1200px] flex items-center justify-center">
            <div className="w-full h-full relative" style={{ transform: 'rotateX(55deg) rotateZ(-25deg)' }}>
              <div className="absolute inset-0 border border-white/10 grid grid-cols-6 grid-rows-6 opacity-20">
                {Array(36).fill(0).map((_, i) => <div key={i} className="border-[0.5px] border-white/5" />)}
              </div>

              {tables.map((table) => (
                <motion.div
                  key={table.id}
                  onClick={() => !table.occupied && setSelected(table.id)}
                  style={{
                    left: table.pos[0], top: table.pos[1],
                    backgroundColor: table.occupied ? '#001B3D' : (selected === table.id ? '#FBF5B7' : 'rgba(251, 245, 183, 0.15)'),
                  }}
                  animate={!table.occupied && selected !== table.id ? { scale: [1, 1.1, 1], boxShadow: ['0 0 0px #BF953F', '0 0 15px rgba(191,149,63,0.4)', '0 0 0px #BF953F'] } : {}}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className={`absolute w-10 h-10 rounded-xl cursor-pointer flex items-center justify-center border transition-colors ${table.occupied ? 'border-white/5' : 'border-[#FBF5B7]/30'}`}
                >
                  {selected === table.id && (
                    <motion.div layoutId="ripple-active" className="absolute inset-[-4px] rounded-2xl border-2 border-[#FBF5B7]" />
                  )}
                  <UtensilsCrossed size={14} className={table.occupied ? "text-white/5" : (selected === table.id ? "text-black" : "text-white/40")} />
                </motion.div>
              ))}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-48 bg-[#800020]/20 blur-2xl rounded-full" />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between items-center px-4">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono">
                Auswahl: <span className="text-white font-bold ml-1">{selected ? `Tisch #${selected}` : '--'}</span>
              </span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono">Lounge Bereich</span>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={!selected}
              className={`w-full py-5 rounded-2xl text-[12px] font-black tracking-[0.3em] uppercase shadow-2xl transition-all duration-500 ${selected ? 'text-white translate-y-0 opacity-100' : 'text-white/20 translate-y-2 opacity-50'}`}
              style={{ backgroundColor: selected ? BURGUNDY : 'rgba(255,255,255,0.05)' }}
            >
              Platz Bestätigen
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- App Wrapper ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="fixed inset-0 w-screen h-[100dvh] overflow-hidden supports-[height:100dvh]:h-[100dvh]" style={{ background: NAVY_BG }}>

      {/* Intensive Hintergrund-Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[70%] h-[70%] bg-[#000C1D] rounded-full blur-[140px] opacity-[0.2]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[60%] h-[60%] bg-[#800020] rounded-full blur-[180px] opacity-[0.2]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
      </div>

      {/* Main Container with Safe Area Insets */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pb-[env(safe-area-inset-bottom)]">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <ScreenHome key="home" setActiveTab={setActiveTab} />}
          {activeTab === 'menu' && <ScreenMenu key="menu" />}
          {activeTab === 'booking' && <ScreenBooking key="booking" />}
          {activeTab === 'search' && <ScreenMenu key="search" />}
        </AnimatePresence>

        <AnimatePresence>
          {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}
        </AnimatePresence>

        <BottomDock
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenInfo={() => setShowInfo(true)}
        />
      </div>

      {/* iOS Style Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-full z-[60] pointer-events-none mb-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
