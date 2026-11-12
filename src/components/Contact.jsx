import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative py-40 px-6 md:px-24 bg-obsidian flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Heavy graphic animated background for the footer */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full border-[1px] border-white/5 border-dashed pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-10 max-w-4xl w-full bg-charcoal/20 backdrop-blur-md border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-mutedTeal">Something.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Currently engineering intelligent web platforms and open to new opportunities. Whether you have a specific project or just want to discuss full-stack architecture, my inbox is open.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(102, 252, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-12 py-5 bg-cyanAccent text-obsidian rounded-full font-black tracking-widest uppercase text-sm cursor-none transition-all"
          >
            Initiate Contact
          </motion.a>
          
          <motion.a
            href="https://github.com/vishalsinha2004"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-12 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-bold tracking-widest uppercase text-sm cursor-none transition-all"
          >
            GitHub Profile
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 text-gray-500 font-mono text-xs z-10 tracking-widest">
        <p>© {new Date().getFullYear()} Vishal Sinha. Engineered with React & Three.js.</p>
      </div>
    </section>
  );
};

export default Contact;