import { motion } from 'framer-motion';
import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const { progress } = useProgress();
  const [isLoading, setIsLoading] = useState(true);

  // Wait for 3D progress to hit 100%, then trigger the exit animation with a slight delay
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // 800ms delay ensures the 3D canvas is completely painted
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian text-white pointer-events-none"
    >
      <div className="flex flex-col items-center">
        {/* Animated Brand Identity */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl md:text-6xl font-black tracking-tighter mb-8"
        >
          VS<span className="text-cyanAccent">.</span>
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-64 h-1 bg-charcoal/50 rounded-full overflow-hidden mb-4 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-cyanAccent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>

        {/* Progress Metrics */}
        <div className="flex justify-between w-64 text-xs font-mono text-gray-400 uppercase tracking-widest">
          <span>Initializing Engine</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;