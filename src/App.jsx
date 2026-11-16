import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

// 1. Import all of your animated components
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

// 2. Import your Page Sections (Make sure your file names match these imports)
import Hero from './components/Hero'; 
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: false }}>
      {/* cursor-none hides the default pointer so your CustomCursor takes over */}
      <main className="w-full min-h-screen-safe bg-[#0B0C10] selection:bg-[#66FCF1] selection:text-[#0B0C10] cursor-none relative">
        
        {/* Global Overlays */}
        <Preloader />
        <CustomCursor />
        
        {/* The Animated Navigation Bar */}
        <Navbar />
        
        {/* Page Sections with IDs matching your Navbar links */}
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="expertise">
          <Expertise />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="contact">
          <Contact />
        </div>

        {/* Global Footer */}
        <Footer />

      </main>
    </ReactLenis>
  );
}

export default App;