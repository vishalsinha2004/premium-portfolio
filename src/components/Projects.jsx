import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// Advanced 3D Tilt Card Component
const TiltCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics-based spring config for heavy, smooth resistance
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position relative to card center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Snap back to 0 when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-charcoal/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 cursor-none shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-colors hover:border-cyanAccent/30"
    >
      {/* Content wrapper pushed forward in 3D space */}
      <div style={{ transform: "translateZ(50px)" }} className="pointer-events-none">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed h-20">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs font-mono text-cyanAccent bg-cyanAccent/10 px-3 py-1 rounded-full border border-cyanAccent/20">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <a href="https://github.com/vishalsinha2004" target="_blank" rel="noreferrer" className="text-sm font-bold text-white border-b border-transparent hover:border-cyanAccent hover:text-cyanAccent transition-colors">
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="min-h-screen py-32 px-6 md:px-24 perspective-1000">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl md:text-6xl font-black text-white mb-20 tracking-tighter"
      >
        Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-mutedTeal">Solutions.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioData.projects.map((project, index) => (
          <TiltCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;