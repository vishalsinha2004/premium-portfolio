import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend Core", tech: "React.js, JavaScript, Tailwind CSS, Vite" },
  { category: "Backend Architecture", tech: "Python, Django, Node.js, Express" },
  { category: "AI & Machine Learning", tech: "Gemini API, Groq, LangChain, OpenCV, MediaPipe" },
  { category: "Database & Auth", tech: "PostgreSQL, MongoDB, Supabase, Brevo API" },
  { category: "Deployment & DevOps", tech: "Render, Netlify, Gunicorn, Nginx, GitHub Actions" },
  { category: "System Design", tech: "RAG Integration, REST APIs, WebSockets" }
];

const Expertise = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section className="min-h-screen py-32 px-6 md:px-24 flex flex-col justify-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mutedTeal/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl md:text-6xl font-black text-white mb-20 relative z-10 tracking-tighter"
      >
        Technical <span className="text-cyanAccent">Arsenal.</span>
      </motion.h2>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={item}
            whileHover={{ scale: 1.05, y: -10, backgroundColor: "rgba(31, 40, 51, 0.8)" }}
            className="p-8 rounded-3xl bg-charcoal/30 backdrop-blur-xl border border-white/5 shadow-lg transition-all group cursor-none"
          >
            <h3 className="text-xl font-bold text-gray-300 mb-4 group-hover:text-white transition-colors">
              {skill.category}
            </h3>
            <p className="text-cyanAccent font-mono text-sm leading-relaxed">
              {skill.tech}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;