import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import InteractiveModel from './InteractiveModel';

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-obsidian overflow-hidden">
      {/* 3D Canvas Background layer */}
      <div className="absolute inset-0 z-0 cursor-move">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <InteractiveModel />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* 2D Glassmorphic UI Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-start px-10 md:px-24 pointer-events-none">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
          className="backdrop-blur-xl bg-charcoal/20 border border-white/5 p-10 md:p-14 rounded-3xl shadow-2xl max-w-3xl pointer-events-auto"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-cyanAccent font-mono text-xl mb-4"
          >
            Hi, I'm Vishal Sinha
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Building the Next Era of Digital Experiences.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            A seamless fusion of heavy graphics, physics-based interactions, and high-performance React architecture.
          </p>
          <button className="px-8 py-4 bg-cyanAccent text-obsidian rounded-lg font-bold tracking-wide transition-transform hover:scale-105 shadow-[0_0_20px_rgba(102,252,241,0.5)]">
            Explore Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;