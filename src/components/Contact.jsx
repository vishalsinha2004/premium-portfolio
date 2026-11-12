import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative py-32 px-6 md:px-24 bg-obsidian flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Heavy graphic animated background for the footer */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] rounded-full border-[1px] border-white/5 border-dashed pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 max-w-3xl w-full"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-mutedTeal">Something.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(102, 252, 241, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-5 bg-cyanAccent text-obsidian rounded-full font-extrabold tracking-widest uppercase text-sm cursor-none transition-all"
        >
          Initiate Contact
        </motion.a>
      </motion.div>

      <div className="absolute bottom-6 text-gray-600 font-mono text-xs">
        <p>© {new Date().getFullYear()} Vishal Sinha. Engineered with React & Three.js.</p>
      </div>
    </section>
  );
};

export default Contact;