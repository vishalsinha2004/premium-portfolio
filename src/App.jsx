import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="bg-obsidian w-full min-h-dvh font-sans selection:bg-cyanAccent selection:text-obsidian text-white cursor-none">
      <CustomCursor />
      
      <motion.div style={{ y: heroParallaxY, opacity: heroOpacity }} className="relative z-0">
        <Hero />
      </motion.div>

      <div className="relative z-10 bg-obsidian rounded-t-[40px] shadow-[0_-20px_50px_rgba(11,12,16,1)] -mt-20">
        <Projects />
        <Expertise />
        <Contact />
      </div>
    </div>
  );
}

export default App;