import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/hero.png';
import GlitchText from './GlitchText';

const About = () => {
  const imageBoxRef = useRef(null);
  const [imgGlitch, setImgGlitch] = useState(false);

  const { scrollYProgress } = useScroll({
    target: imageBoxRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="w-full bg-[#050505] text-[#F4F4F0] border-b border-white/10">
      <div className="px-6 md:px-12 py-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF2A2A] block mb-2">
            (02) // USER_DUMP_PROFILE
          </span>
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none"
          >
            <GlitchText text="THE ARCHITECT" />
          </motion.h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          BCA — Shreyarth University
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Corrupted Signal Portrait */}
        <div
          ref={imageBoxRef}
          className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-12 flex flex-col justify-between gap-6"
        >
          <div
            onMouseEnter={() => setImgGlitch(true)}
            onMouseLeave={() => setImgGlitch(false)}
            className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-[#0A0A0A] group"
          >
            <motion.img
              style={{ y: imgY, scale: 1.15 }}
              src={profileImg}
              alt="Vishal Sinha"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
            />

            {/* Red Fault Tear Slice on Hover */}
            {imgGlitch && (
              <>
                <img
                  src={profileImg}
                  alt=""
                  aria-hidden="true"
                  style={{ clipPath: 'inset(28% 0 52% 0)', transform: 'translateX(10px)' }}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-75 pointer-events-none"
                />
                <div className="absolute top-[28%] left-0 right-0 h-[2px] bg-[#FF2A2A] z-20 pointer-events-none" />
              </>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#050505]/95 border-t border-white/10 flex justify-between font-mono text-xs uppercase tracking-widest z-20">
              <span className={imgGlitch ? 'text-[#FF2A2A] font-bold' : 'text-[#D4FF00]'}>
                {imgGlitch ? 'ERR // FRAME_TEAR' : 'IMG_01 // OK'}
              </span>
              <span className="text-neutral-400">Ahmedabad, IN</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Bio & Action Strip */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="p-6 md:p-12 lg:p-16 flex-1 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-[#F4F4F0] mb-8"
            >
              Full-stack developer specializing in Python, Django, and React.js—engineering scalable web platforms, multi-modal transport aggregators, and RAG-based AI tools.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              My development philosophy centers on merging high-contrast, responsive front-end systems with clean, high-performance back-end logic to build products that hold up under real-world load.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-white/10 font-mono text-xs uppercase tracking-widest font-bold">
            <a
              href="https://github.com/vishalsinha2004"
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden group p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-white/10 flex items-center justify-between"
            >
              <span className="absolute inset-0 bg-[#D4FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 group-hover:text-black transition-colors">GitHub_Registry</span>
              <span className="relative z-10 text-lg group-hover:text-black">↗</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="relative overflow-hidden group p-6 md:p-8 flex items-center justify-between"
            >
              <span className="absolute inset-0 bg-[#FF2A2A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 group-hover:text-black transition-colors">Extract_CV.pdf</span>
              <span className="relative z-10 text-lg group-hover:text-black">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;