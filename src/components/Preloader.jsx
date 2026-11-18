import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; 
    }, 2500); // Slightly longer for the boot effect
    
    document.body.style.overflow = 'hidden';
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0B0C10] flex flex-col items-center justify-center px-6 overflow-hidden"
        >
          {/* Cyber Scanning Line */}
          <motion.div 
            animate={{ y: ["-100vh", "100vh"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[2px] bg-[#66FCF1] shadow-[0_0_20px_#66FCF1] z-50 pointer-events-none opacity-50"
          />

          <div className="overflow-hidden relative z-10">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-black tracking-tighter text-white"
            >
              Vishal Sinha<span className="text-[#66FCF1]">.</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-6 flex flex-col items-center gap-2 relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className="text-[#66FCF1] font-mono tracking-widest uppercase text-xs md:text-sm"
            >
              [ SYSTEM INITIALIZATION ]
            </motion.p>
            {/* Loading Bar */}
            <div className="w-64 h-[2px] bg-white/10 mt-2 overflow-hidden relative">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full w-full bg-[#66FCF1]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;