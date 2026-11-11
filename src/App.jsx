import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';

function App() {
  const containerRef = useRef(null);
  
  // Track the scroll progress of the entire app container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Map scroll progress to Y-axis movement for the Hero section (Parallax)
  // When scrolling down, the Hero content moves up slower than the page
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-obsidian w-full min-h-dvh font-sans selection:bg-cyanAccent selection:text-obsidian text-white cursor-none">
      <CustomCursor />
      
      {/* Parallax Wrapper for Hero */}
      <motion.div style={{ y: heroParallaxY, opacity: heroOpacity }} className="relative z-0">
        <Hero />
      </motion.div>

      {/* Projects section overlapping the fading Hero */}
      <div className="relative z-10 bg-obsidian rounded-t-[40px] shadow-[0_-20px_50px_rgba(11,12,16,1)] -mt-20 pt-20">
        <Projects />
      </div>
    </div>
  );
}

export default App;