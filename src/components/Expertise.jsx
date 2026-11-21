import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

const skills = [
  { id: 'MOD_01', category: 'Frontend Core', tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vite'] },
  { id: 'MOD_02', category: 'Backend Architecture', tech: ['Python', 'Django', 'Node.js', 'Express'] },
  { id: 'MOD_03', category: 'AI & Machine Learning', tech: ['Gemini API', 'Groq', 'LangChain', 'OpenCV', 'MediaPipe'] },
  { id: 'MOD_04', category: 'Database & Auth', tech: ['PostgreSQL', 'MongoDB', 'Supabase', 'Brevo API'] },
  { id: 'MOD_05', category: 'Deployment & DevOps', tech: ['Render', 'Netlify', 'Gunicorn', 'Nginx', 'GitHub Actions'] },
  { id: 'MOD_06', category: 'System Design', tech: ['RAG Integration', 'REST APIs', 'WebSockets'] },
];

const Expertise = () => {
  return (
    <section className="w-full bg-[#050505] text-[#F4F4F0] border-b border-white/10">
      <div className="px-6 md:px-12 py-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF2A2A] block mb-2">
            (03) // LOADED_MODULES
          </span>
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none"
          >
            <GlitchText text="TECHNICAL ARSENAL" />
          </motion.h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          06 Active Subsystems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="relative group p-8 md:p-10 border-b border-r border-white/10 flex flex-col justify-between min-h-[260px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#D4FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF2A2A] opacity-0 group-hover:opacity-100 transition-opacity z-20" />

            <div className="relative z-10 flex items-start justify-between mb-8">
              <span className="font-mono text-xs text-neutral-500 group-hover:text-[#FF2A2A] font-bold transition-colors">
                //{skill.id}
              </span>
              <span className="font-mono text-xs uppercase text-black opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                [OK]
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-black transition-colors">
                <GlitchText text={skill.category} />
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-mono uppercase border border-white/15 text-neutral-400 group-hover:border-black/30 group-hover:text-black transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;