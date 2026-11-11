import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center bg-obsidian overflow-hidden px-6">
      {/* Animated Background Graphic Elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyanAccent/10 rounded-full blur-[120px] pointer-events-none"
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full backdrop-blur-md bg-charcoal/30 border border-white/10 p-10 md:p-16 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        <motion.p variants={itemVariants} className="text-mutedTeal font-mono text-lg mb-4">
          {portfolioData.hero.greeting}
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          {portfolioData.hero.name}.
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">
          {portfolioData.hero.role}.
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-10">
          {portfolioData.hero.tagline}
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(102, 252, 241, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-transparent border-2 border-cyanAccent text-cyanAccent rounded-lg font-bold tracking-wide transition-colors hover:bg-cyanAccent hover:text-obsidian"
        >
          View Projects
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;