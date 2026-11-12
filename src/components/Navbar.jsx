import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Ensure lucide-react is installed

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Arsenal', href: '#expertise' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Advanced scroll tracking for desktop navbar behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const handleScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on click
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop & Mobile Header Bar */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[60] flex justify-between md:justify-center items-center pt-6 px-6 md:px-0 pointer-events-none"
      >
        <motion.div 
          animate={{
            backgroundColor: scrolled || mobileMenuOpen ? "rgba(31, 40, 51, 0.85)" : "rgba(11, 12, 16, 0)",
            backdropFilter: scrolled || mobileMenuOpen ? "blur(20px)" : "blur(0px)",
            border: scrolled || mobileMenuOpen ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
            boxShadow: scrolled || mobileMenuOpen ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)" : "none"
          }}
          className="flex items-center justify-between w-full md:w-auto px-6 py-3 rounded-2xl md:rounded-full pointer-events-auto transition-colors"
        >
          {/* Mobile Brand / Logo (Hidden on Desktop) */}
          <div className="md:hidden font-black text-white tracking-widest text-lg">
            VS<span className="text-cyanAccent">.</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-cyanAccent text-sm font-bold tracking-widest uppercase transition-colors px-2 py-1 cursor-none"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden text-white hover:text-cyanAccent transition-colors cursor-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-obsidian/95 backdrop-blur-2xl flex flex-col items-center justify-center pointer-events-auto md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-black text-white hover:text-cyanAccent uppercase tracking-widest cursor-none"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Footer Elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 flex gap-6"
            >
              <a href="https://github.com/vishalsinha2004" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyanAccent text-sm uppercase tracking-widest font-bold">
                GitHub
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-cyanAccent text-sm uppercase tracking-widest font-bold">
                Email
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;