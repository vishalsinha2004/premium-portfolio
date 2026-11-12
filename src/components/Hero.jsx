import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import { portfolioData } from '../data/portfolioData';
import InteractiveModel from './InteractiveModel';

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
    <>
      <section className="relative min-h-dvh flex items-center justify-center bg-obsidian overflow-hidden px-6">
        {/* 3D Canvas with Suspense Wrapping */}
        <div className="absolute inset-0 z-0 cursor-move">
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]} 
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            
            {/* Suspense prevents the app from crashing while the 3D assets load */}
            <Suspense fallback={null}>
              <InteractiveModel />
              <Environment preset="city" />
            </Suspense>
            
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
        
        {/* Animated 2D Glassmorphic UI Layer */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl w-full backdrop-blur-md bg-charcoal/30 border border-white/10 p-10 md:p-16 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] pointer-events-auto"
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

      {/* Global Preloader Overlay */}
      <Loader 
        containerStyles={{ backgroundColor: '#0B0C10' }} 
        innerStyles={{ backgroundColor: '#1F2833', width: '300px' }}
        barStyles={{ backgroundColor: '#66FCF1' }}
        dataInterpolation={(p) => `Loading Engine ${p.toFixed(0)}%`}
      />
    </>
  );
};

export default Hero;