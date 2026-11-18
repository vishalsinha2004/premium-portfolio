import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profileImg from '../assets/hero.png';

const About = () => {
  // 3D Magnetic Hover Physics for the Bio Card
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

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative py-32 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden bg-transparent perspective-[1000px]">
      
      {/* 3D Glowing Image Container */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-full md:w-5/12 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[#66FCF1] to-[#45A29E] shadow-[0_0_60px_rgba(102,252,241,0.2)] group cursor-none">
          <div className="w-full h-full rounded-full bg-[#0B0C10] overflow-hidden border-4 border-[#0B0C10] relative">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-[#66FCF1]/30 border-dashed rounded-full"
            />
            <div className="w-full h-full bg-[#0B0C10]/50 flex items-center justify-center text-[#66FCF1] font-mono text-sm relative z-10">
              <img src={profileImg} alt="Vishal Sinha" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 hover:scale-110" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Biography Text & 3D Magnetic Card */}
      <div className="w-full md:w-7/12">
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-8 tracking-tighter"
        >
          The <span className="text-[#66FCF1]">Architect.</span>
        </motion.h2>
        
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-[#1F2833]/40 backdrop-blur-xl border border-[#66FCF1]/20 p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] group overflow-hidden"
        >
          {/* Internal Light Sweep */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#66FCF1]/5 to-transparent skew-x-12 pointer-events-none"
          />

          <div style={{ transform: "translateZ(30px)" }}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
              I am a full-stack developer specializing in Python, Django, and React.js. My academic foundation—a Bachelor of Computer Applications from Shreyarth University—combined with deep hands-on experience building multi-modal transport aggregators and RAG-based AI tools, allows me to engineer robust, scalable applications.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              My development philosophy centers on merging heavy, immersive front-end graphics with clean, high-performance back-end logic to create experiences that users want to return to again and again.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/vishalsinha2004"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(102, 252, 241, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#66FCF1]/10 border border-[#66FCF1] text-[#66FCF1] rounded-lg font-bold tracking-widest uppercase transition-all hover:bg-[#66FCF1] hover:text-[#0B0C10] cursor-none"
              >
                GitHub Registry
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white/20 text-white rounded-lg font-bold tracking-widest uppercase transition-all hover:border-white cursor-none"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;