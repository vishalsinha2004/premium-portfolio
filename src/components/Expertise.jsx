import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skills = [
  { category: "Frontend Core", tech: "React.js, JavaScript, Tailwind CSS, Vite" },
  { category: "Backend Architecture", tech: "Python, Django, Node.js, Express" },
  { category: "AI & Machine Learning", tech: "Gemini API, Groq, LangChain, OpenCV, MediaPipe" },
  { category: "Database & Auth", tech: "PostgreSQL, MongoDB, Supabase, Brevo API" },
  { category: "Deployment & DevOps", tech: "Render, Netlify, Gunicorn, Nginx, GitHub Actions" },
  { category: "System Design", tech: "RAG Integration, REST APIs, WebSockets" }
];

// Independent Magnetic Card Component
const SkillCard = ({ skill, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 150 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="relative p-8 rounded-3xl bg-[#1F2833]/40 backdrop-blur-xl border border-[#66FCF1]/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group overflow-hidden cursor-none perspective-[1000px]"
    >
      {/* Dynamic Laser Sweep */}
      <motion.div 
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#66FCF1]/5 to-transparent skew-x-12 pointer-events-none"
      />
      
      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold text-gray-300 mb-4 group-hover:text-white transition-colors">
          {skill.category}
        </h3>
        <p className="text-[#66FCF1] font-mono text-sm leading-relaxed">
          {skill.tech}
        </p>
      </div>
    </motion.div>
  );
};

const Expertise = () => {
  return (
    <section className="min-h-screen py-32 px-6 md:px-24 flex flex-col justify-center relative overflow-hidden bg-transparent">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl md:text-6xl font-black text-white mb-20 relative z-10 tracking-tighter"
      >
        Technical <span className="text-[#66FCF1]">Arsenal.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;