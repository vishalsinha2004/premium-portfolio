import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import GlitchText from './GlitchText';

const Projects = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full bg-[#050505] text-[#F4F4F0] border-b border-white/10">
      <div className="px-6 md:px-12 py-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF2A2A] block mb-2">
            (01) // MEM_INDEX_DEPLOYMENTS
          </span>
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none"
          >
            <GlitchText text="DEPLOYMENTS" auto />
          </motion.h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          Hover or tap row // Inspect fault log
        </p>
      </div>

      <div className="flex flex-col">
        {portfolioData.projects.map((project, index) => {
          const isOpen = activeId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setActiveId(project.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(isOpen ? null : project.id)}
              className="relative border-b border-white/10 cursor-pointer overflow-hidden"
            >
              {/* Curtain Fill */}
              <motion.div
                initial={false}
                animate={{ y: isOpen ? '0%' : '100%' }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-[#D4FF00] z-0 pointer-events-none"
              />

              {/* Red Tear Line on Active Row */}
              {isOpen && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF2A2A] z-20 pointer-events-none" />
              )}

              <div
                className={`relative z-10 px-6 md:px-12 py-8 md:py-10 grid grid-cols-12 items-center gap-4 transition-colors duration-200 ${
                  isOpen ? 'text-black' : 'text-[#F4F4F0]'
                }`}
              >
                <span className={`col-span-2 md:col-span-1 font-mono text-xs ${isOpen ? 'text-[#FF2A2A] font-bold' : 'text-neutral-500'}`}>
                  0x0{index + 1}
                </span>

                <motion.h3
                  animate={{ x: isOpen ? 14 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="col-span-10 md:col-span-6 text-3xl md:text-6xl font-black uppercase tracking-tighter"
                >
                  <GlitchText text={project.title} />
                </motion.h3>

                <div className="hidden md:flex col-span-4 flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-mono uppercase tracking-wider border ${
                        isOpen ? 'border-black/30 text-black' : 'border-white/15 text-neutral-400'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? -45 : 0 }}
                  className="hidden md:flex col-span-1 justify-end text-2xl font-mono"
                >
                  →
                </motion.div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 overflow-hidden text-black"
                  >
                    <div className="px-6 md:px-12 pb-10 pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-black/15">
                      <div className="md:col-start-2 md:col-span-6">
                        <p className="text-base md:text-xl font-medium leading-relaxed text-black/85">
                          {project.description}
                        </p>
                      </div>
                      <div className="md:col-span-5 flex items-end md:justify-end gap-4 font-mono text-xs uppercase font-bold">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-6 py-3 border border-black hover:bg-[#FF2A2A] hover:border-[#FF2A2A] hover:text-black transition-colors"
                          >
                            Source_Code ↗
                          </a>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-6 py-3 bg-black text-[#D4FF00] hover:bg-[#FF2A2A] hover:text-black transition-colors"
                          >
                            Exec_Live ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;