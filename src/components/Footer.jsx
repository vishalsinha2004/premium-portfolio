import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Footer = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 150 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <footer className="w-full py-32 px-6 md:px-12 mt-20 overflow-hidden bg-transparent perspective-[1000px]">
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="max-w-[1400px] mx-auto bg-[#1F2833]/40 backdrop-blur-2xl border-t border-[#66FCF1]/30 p-16 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-[0_0_60px_rgba(102,252,241,0.1)] relative overflow-hidden flex flex-col items-center justify-center text-center group cursor-none"
      >
        {/* Dynamic Laser Sweep */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#66FCF1]/5 to-transparent skew-x-12 pointer-events-none"
        />

        <div style={{ transform: "translateZ(30px)" }} className="w-full flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#66FCF1] font-mono tracking-widest uppercase text-sm mb-8 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-[#66FCF1]"></span>
            System Ready
            <span className="w-8 h-[1px] bg-[#66FCF1]"></span>
          </motion.p>

          <motion.a 
            href="mailto:your.email@example.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, textShadow: "0px 0px 30px rgba(102,252,241,0.5)" }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="block text-[10vw] md:text-[7vw] font-black tracking-tighter leading-none text-white hover:text-[#66FCF1] transition-colors duration-500 mb-16 cursor-none relative z-10"
          >
            Let's build.
          </motion.a>

          <div className="w-full h-[1px] bg-white/10 mb-12" />

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8">
              <a href="https://github.com/vishalsinha2004" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#66FCF1] font-mono text-sm uppercase tracking-widest transition-colors cursor-none">
                GitHub
              </a>
              <a href="https://linkedin.com/in/vishalsinha" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#66FCF1] font-mono text-sm uppercase tracking-widest transition-colors cursor-none">
                LinkedIn
              </a>
            </div>
            
            <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">
              © {new Date().getFullYear()} Vishal Sinha. Engineered with React.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;