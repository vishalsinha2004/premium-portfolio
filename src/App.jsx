import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D'; // <--- Imported the global background

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
      <main className="w-full min-h-screen-safe bg-[#0B0C10] selection:bg-[#66FCF1] selection:text-[#0B0C10] cursor-none relative">
        
        {/* THIS LOCKS THE 3D DESIGN TO THE BACKGROUND UNIVERSALLY */}
        <Background3D />
        
        <Preloader />
        <CustomCursor />
        <Navbar />
        
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

        <Footer />

      </main>
    </ReactLenis>
  );
}

export default App;