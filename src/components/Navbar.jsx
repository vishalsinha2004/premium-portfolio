import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { name: 'Index', href: '#home', id: 'home' },
  { name: 'Work', href: '#projects', id: 'projects' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Stack', href: '#expertise', id: 'expertise' },
  { name: 'History', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, href, id) => {
    e.preventDefault();
    setActiveId(id);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Global Top Scroll Progress Hairline */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#D4FF00] origin-left z-[80] pointer-events-none"
      />

      {/* Bottom Floating Command Dock */}
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/15 p-1.5 flex items-center gap-1 shadow-2xl max-w-[95vw] overflow-x-auto"
      >
        {navLinks.map((link) => {
          const isActive = activeId === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href, link.id)}
              className={`relative px-3 md:px-4 py-2 text-[11px] md:text-xs font-mono uppercase tracking-widest transition-colors duration-200 whitespace-nowrap ${
                isActive ? 'text-black font-bold' : 'text-neutral-400 hover:text-[#F4F4F0]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeDock"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  className="absolute inset-0 bg-[#D4FF00] -z-10"
                />
              )}
              {link.name}
            </a>
          );
        })}
      </motion.nav>
    </>
  );
};

export default Navbar;