import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative py-32 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden">
      {/* 3D Glowing Image Container */}
      <motion.div 
        initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-full md:w-5/12 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyanAccent to-mutedTeal shadow-[0_0_50px_rgba(102,252,241,0.3)]">
          <div className="w-full h-full rounded-full bg-charcoal overflow-hidden border-4 border-obsidian">
            {/* Replace this div with an actual <img> tag pointing to your profile picture in src/assets/ */}
            <div className="w-full h-full bg-obsidian/50 flex items-center justify-center text-cyanAccent font-mono text-sm">
              [Insert Profile Image]
            </div>
          </div>
        </div>
      </motion.div>

      {/* Biography Text & Stats */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
        className="w-full md:w-7/12"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
          The <span className="text-cyanAccent">Architect.</span>
        </h2>
        
        <div className="bg-charcoal/30 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a full-stack developer specializing in Python, Django, and React.js. My academic foundation—a Bachelor of Computer Applications from Shreyarth University—combined with deep hands-on experience building multi-modal transport aggregators and RAG-based AI tools, allows me to engineer robust, scalable applications.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            My development philosophy centers on merging heavy, immersive front-end graphics with clean, high-performance back-end logic to create experiences that users want to return to again and again.
          </p>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/vishalsinha2004"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(102, 252, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyanAccent text-obsidian rounded-lg font-bold tracking-wide transition-colors cursor-none"
            >
              GitHub Registry
            </motion.a>
            <motion.a
              href="/resume.pdf" // Place your PDF in the public/ folder
              download
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white/20 text-white rounded-lg font-bold tracking-wide transition-colors cursor-none"
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;