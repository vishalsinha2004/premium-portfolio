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
    hidden: { y: 40, opacity: 0, filter: 'blur(15px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden px-6 bg-transparent">
      
      {/* POWERFUL DESIGNER ADDITION: Animated Ambient Auroras */}
      {/* These float slowly behind the card to create massive energy without clutter */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/3 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#66FCF1] rounded-full mix-blend-screen filter blur-[120px] md:blur-[150px] opacity-40 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-[#45A29E] rounded-full mix-blend-screen filter blur-[100px] md:blur-[130px] opacity-30 z-0 pointer-events-none"
      />

      {/* Upgraded Ultra-Premium Glassmorphic Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full backdrop-blur-2xl bg-[#0B0C10]/40 border border-white/10 p-10 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto overflow-hidden group"
      >
        {/* Inner corner glow for depth */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#66FCF1]/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#66FCF1]/30 transition-colors duration-1000" />
        <div className="absolute inset-0 border border-white/5 rounded-[3rem] pointer-events-none" />

        <motion.p variants={itemVariants} className="text-[#66FCF1] font-mono text-sm md:text-base tracking-widest uppercase mb-6">
          {portfolioData.hero.greeting}
        </motion.p>
        
        {/* Upgraded Typography: Metallic Text Gradient */}
        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 mb-4 tracking-tighter leading-none">
          {portfolioData.hero.name}.
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-400 mb-10 tracking-tight">
          {portfolioData.hero.role}.
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl text-lg md:text-2xl leading-relaxed mb-12 font-medium">
          {portfolioData.hero.tagline}
        </motion.p>

        {/* Upgraded Button Architecture */}
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(102, 252, 241, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-5 bg-transparent border-2 border-[#66FCF1] text-[#66FCF1] rounded-xl font-bold tracking-widest uppercase transition-all hover:bg-[#66FCF1] hover:text-[#0B0C10] cursor-none relative overflow-hidden"
        >
          View Projects
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;