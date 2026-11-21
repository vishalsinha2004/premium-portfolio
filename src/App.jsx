import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothTouch: false }}>
      <main className="w-full min-h-dvh bg-[#050505] text-[#F4F4F0] selection:bg-[#D4FF00] selection:text-black relative">
        <div className="noise-overlay" />

        <Preloader />
        <CustomCursor />
        <Navbar />

        <div id="home"><Hero /></div>
        <div id="projects"><Projects /></div>
        <div id="about"><About /></div>
        <div id="expertise"><Expertise /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </main>
    </ReactLenis>
    </ErrorBoundary>
  );
}

export default App;