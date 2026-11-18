import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Arsenal', href: '#expertise' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false); 
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [mobileMenuOpen]);

  return (
    <>
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
            backgroundColor: scrolled || mobileMenuOpen ? "rgba(31, 40, 51, 0.7)" : "rgba(11, 12, 16, 0)",
            backdropFilter: scrolled || mobileMenuOpen ? "blur(20px)" : "blur(0px)",
            border: scrolled || mobileMenuOpen ? "1px solid rgba(102, 252, 241, 0.2)" : "1px solid rgba(102, 252, 241, 0)",
            boxShadow: scrolled || mobileMenuOpen ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)" : "none"
          }}
          className="flex items-center justify-between w-full md:w-auto px-8 py-4 rounded-2xl md:rounded-full pointer-events-auto transition-colors"
        >
          <div className="md:hidden font-black text-white tracking-widest text-xl">
            VS<span className="text-[#66FCF1]">.</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-[#66FCF1] font-mono text-sm tracking-widest uppercase transition-colors px-2 py-1 cursor-none relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#66FCF1] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white hover:text-[#66FCF1] transition-colors cursor-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-[#0B0C10]/95 backdrop-blur-2xl flex flex-col items-center justify-center pointer-events-auto md:hidden border-b border-[#66FCF1]/20"
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
                  className="text-3xl font-black text-white hover:text-[#66FCF1] uppercase tracking-widest cursor-none"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;