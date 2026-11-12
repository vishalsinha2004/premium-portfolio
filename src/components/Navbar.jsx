import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

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

  // Advanced scroll tracking for navbar behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Hide navbar when scrolling down fast, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Add heavy glass effect only when scrolled past the hero top
    setScrolled(latest > 50);
  });

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none"
    >
      <motion.div 
        animate={{
          backgroundColor: scrolled ? "rgba(31, 40, 51, 0.7)" : "rgba(11, 12, 16, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          border: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)" : "none"
        }}
        className="flex items-center gap-2 md:gap-8 px-6 py-3 rounded-full pointer-events-auto transition-colors"
      >
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-gray-300 hover:text-cyanAccent text-xs md:text-sm font-bold tracking-widest uppercase transition-colors px-2 py-1 cursor-none"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;