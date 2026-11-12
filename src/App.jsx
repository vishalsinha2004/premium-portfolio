import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Background3D from './components/Background3D';
import About from './components/About';

function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="bg-transparent w-full min-h-dvh font-sans selection:bg-cyanAccent selection:text-obsidian text-white cursor-none">
      {/* Global Overlays & 3D Environment */}
      <Preloader />
      <Background3D />
      <CustomCursor />
      <Navbar />

      {/* Home Section */}
      <motion.div id="home" style={{ y: heroParallaxY, opacity: heroOpacity }} className="relative z-0">
        <Hero />
      </motion.div>

      {/* Main Content Layers - Using transparent backgrounds to show the 3D particles */}
      <div className="relative z-10 bg-obsidian/80 backdrop-blur-sm rounded-t-[40px] shadow-[0_-20px_50px_rgba(11,12,16,1)] -mt-20">
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="expertise">
          <Expertise />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;