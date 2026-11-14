import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: false }}>
      {/* Added cursor-none to hide default pointer */}
      <main className="w-full min-h-screen-safe bg-background selection:bg-accent selection:text-white cursor-none">
        
        <Preloader />
        <CustomCursor />
        
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
          <span className="font-bold tracking-tighter text-xl pointer-events-auto">VS.</span>
          <a href="/resume.pdf" download className="text-sm font-medium border border-white/20 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors pointer-events-auto">
            Download CV
          </a>
        </nav>

        <section className="min-h-screen-safe flex flex-col items-center justify-center px-6">
          <h1 className="text-6xl md:text-[9vw] font-black tracking-tighter leading-[0.9] text-center mb-6">
            Architecting <br/> 
            <span className="text-secondary">Digital Space.</span>
          </h1>
          <p className="text-primary font-medium text-lg md:text-xl max-w-2xl text-center">
            Full-stack engineer specializing in Python, React, and intelligent AI integrations.
          </p>
        </section>

        <Projects />
        <Experience />
        <Footer />

      </main>
    </ReactLenis>
  );
}

export default App;