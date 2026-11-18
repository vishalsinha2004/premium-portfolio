import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y, { damping: 20 }), [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(useSpring(x, { damping: 20 }), [-0.5, 0.5], ["-5deg", "5deg"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative p-10 rounded-[2.5rem] bg-[#1F2833]/40 backdrop-blur-xl border border-[#66FCF1]/20 shadow-xl group overflow-hidden cursor-none perspective-[1000px] flex flex-col justify-between min-h-[400px]"
    >
      <motion.div 
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#66FCF1]/5 to-transparent skew-x-12 pointer-events-none"
      />

      <div style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-6">
          <span className="font-mono text-[#66FCF1] text-sm border border-[#66FCF1]/30 px-3 py-1 rounded-full">
            SYS.{project.id}
          </span>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#66FCF1] transition-colors cursor-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            )}
            {project.liveUrl !== "#" && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#66FCF1] transition-colors cursor-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#66FCF1] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 font-medium leading-relaxed mb-8">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(40px)" }}>
        {project.tech.map((t, idx) => (
          <span key={idx} className="px-3 py-1 bg-[#0B0C10] border border-white/5 text-[#45A29E] text-xs font-mono rounded-md tracking-widest uppercase">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-32 px-6 md:px-24 max-w-[1600px] mx-auto bg-transparent relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-black text-white mb-20 tracking-tighter"
      >
        Featured <span className="text-[#66FCF1]">Deployments.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;