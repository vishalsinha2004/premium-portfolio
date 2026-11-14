import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading/mounting
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling after preloader finishes
      document.body.style.overflow = 'auto'; 
    }, 2000);
    
    // Lock scroll while preloader is active
    document.body.style.overflow = 'hidden';

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center text-surface px-6"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-5xl md:text-8xl font-black tracking-tighter"
            >
              Vishal Sinha.
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-4">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="text-secondary font-mono tracking-widest uppercase text-sm"
            >
              System Initialization
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;