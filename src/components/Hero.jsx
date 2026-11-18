import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  // 1. Setup dynamic mouse tracking for responsive animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the raw mouse data with spring physics for a heavy, premium feel
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 2. Create parallax offsets for the background HUD rings
  const ring1X = useTransform(smoothX, [-1, 1], [-40, 40]);
  const ring1Y = useTransform(smoothY, [-1, 1], [-40, 40]);
  
  const ring2X = useTransform(smoothX, [-1, 1], [60, -60]);
  const ring2Y = useTransform(smoothY, [-1, 1], [60, -60]);

  // 3. Create 3D magnetic tilt for the main UI card
  const cardRotateX = useTransform(smoothY, [-1, 1], ["5deg", "-5deg"]);
  const cardRotateY = useTransform(smoothX, [-1, 1], ["-5deg", "5deg"]);

  // Listen for mouse movement across the entire screen
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates from -1 to 1
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2, type: 'spring', stiffness: 100 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(20px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden px-6 bg-transparent" style={{ perspective: 1000 }}>
      
      {/* DYNAMIC BACKGROUND: Cybernetic HUD Rings with Parallax */}
      <motion.div
        style={{ x: ring1X, y: ring1Y, originX: 0.5, originY: 0.5 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[120vw] md:w-[80vw] h-[120vw] md:h-[80vw] border-[1px] border-[#66FCF1]/20 border-dashed rounded-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-50"
      />
      <motion.div
        style={{ x: ring2X, y: ring2Y, originX: 0.5, originY: 0.5 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] border-[2px] border-[#45A29E]/15 border-dotted rounded-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-40"
      />

      {/* BACKGROUND: Vertical Laser Scans (Accelerated) */}
      <div className="absolute inset-0 flex justify-between px-[10%] opacity-30 pointer-events-none z-0">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            animate={{ y: ["-100%", "100%"] }} 
            transition={{ duration: 4 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }} 
            className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#66FCF1] to-transparent" 
          />
        ))}
      </div>

      {/* DYNAMIC UI: 3D Magnetic Glassmorphic Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 max-w-5xl w-full backdrop-blur-xl bg-[#0B0C10]/60 border-t border-b border-[#66FCF1]/30 py-16 px-10 md:p-20 rounded-none md:rounded-3xl shadow-[0_0_80px_rgba(69,162,158,0.2)] pointer-events-auto group"
      >
        {/* Animated Sweep Lighting inside the card */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#66FCF1]/5 to-transparent skew-x-12 pointer-events-none"
        />

        {/* Sci-Fi Corner Accents (Pulsing) */}
        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#66FCF1] hidden md:block" />
        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#66FCF1] hidden md:block" />

        <motion.div style={{ transform: "translateZ(30px)" }}>
          <motion.p variants={itemVariants} className="text-[#66FCF1] font-mono text-sm md:text-base tracking-widest uppercase mb-6 flex items-center gap-4">
            <motion.span animate={{ width: [10, 40, 10] }} transition={{ duration: 3, repeat: Infinity }} className="h-[1px] bg-[#66FCF1] block"></motion.span>
            {portfolioData.hero.greeting}
          </motion.p>
          
          {/* Metallic Typography with Shimmer */}
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600 mb-2 tracking-tighter leading-tight relative">
            {portfolioData.hero.name}.
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#45A29E] mb-10 tracking-tight">
            {portfolioData.hero.role}.
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-12 font-medium">
            {portfolioData.hero.tagline}
          </motion.p>

          {/* Upgraded Cyber Button with Hover Expansion */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(102, 252, 241, 0.5)", backgroundColor: "rgba(102, 252, 241, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-[#66FCF1] text-[#66FCF1] font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-none relative overflow-hidden flex items-center gap-3 group"
          >
            <span className="relative z-10">Initialize Array</span>
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-[#66FCF1] rounded-full group-hover:bg-white relative z-10"
            />
            {/* Button internal swipe effect */}
            <div className="absolute inset-0 bg-[#66FCF1] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            <span className="absolute inset-0 z-10 flex items-center gap-3 px-10 py-4 opacity-0 group-hover:opacity-100 group-hover:text-[#0B0C10] transition-opacity duration-300 delay-100">
              Initialize Array
              <div className="w-2 h-2 bg-[#0B0C10] rounded-full"></div>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;