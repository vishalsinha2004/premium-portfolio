import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-surface py-32 px-6 md:px-12 mt-20 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary font-medium tracking-widest uppercase text-sm mb-8"
        >
          Open for opportunities
        </motion.p>

        <motion.a 
          href="mailto:your.email@example.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="block text-[12vw] md:text-[8vw] font-black tracking-tighter leading-none hover:text-accent transition-colors duration-500 mb-16 cursor-none"
        >
          Let's build.
        </motion.a>

        <div className="w-full h-[1px] bg-white/10 mb-12" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <a href="https://github.com/vishalsinha2004" target="_blank" rel="noreferrer" className="text-surface/70 hover:text-surface font-medium transition-colors cursor-none">
              GitHub
            </a>
            <a href="https://linkedin.com/in/vishalsinha" target="_blank" rel="noreferrer" className="text-surface/70 hover:text-surface font-medium transition-colors cursor-none">
              LinkedIn
            </a>
          </div>
          
          <p className="text-surface/50 text-sm font-medium">
            © {new Date().getFullYear()} Vishal Sinha. Built with React & Lenis.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;