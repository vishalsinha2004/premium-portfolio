import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const experienceData = [
  {
    role: "Machine Learning Integration",
    company: "EduPredict AI",
    date: "2026",
    desc: "Architected a Flask-based student performance prediction engine leveraging advanced ML models for analytical forecasting.",
    tech: ["Python", "Flask", "Machine Learning", "Jinja2"]
  },
  {
    role: "Data Science Intern",
    company: "TECHMICRE",
    date: "2025",
    desc: "Engineered Python-based data handling pipelines, implemented machine learning algorithms, and conducted exploratory data analysis.",
    tech: ["Pandas", "NumPy", "Keras", "CNNs", "NLP"]
  }
];

const TimelineCard = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y, { damping: 20 }), [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(useSpring(x, { damping: 20 }), [-0.5, 0.5], ["-5deg", "5deg"]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border-l-2 border-[#66FCF1]/20 pl-8 pb-12 last:pb-0 perspective-[1000px]"
    >
      {/* Glowing Cyber Timeline Node */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#0B0C10] border-2 border-[#66FCF1] rounded-full group-hover:bg-[#66FCF1] group-hover:shadow-[0_0_15px_#66FCF1] transition-all duration-300" />
      
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - rect.left) / rect.width - 0.5);
          y.set((e.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-[#1F2833]/40 backdrop-blur-xl border border-[#66FCF1]/10 p-8 rounded-2xl shadow-lg relative overflow-hidden"
      >
        <div style={{ transform: "translateZ(20px)" }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">{item.role}</h3>
            <span className="text-[#66FCF1] font-mono text-sm px-3 py-1 bg-[#66FCF1]/10 rounded-full border border-[#66FCF1]/20">{item.date}</span>
          </div>
          
          <h4 className="text-lg font-medium text-[#45A29E] mb-4">{item.company}</h4>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl font-medium">
            {item.desc}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 bg-[#0B0C10]/60 border border-white/5 text-gray-300 text-xs font-mono rounded-md tracking-wide">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 relative bg-transparent">
      <div className="md:w-1/3">
        <div className="sticky top-32">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6"
          >
            Experience & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66FCF1] to-[#45A29E]">History.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed font-medium"
          >
            A track record of engineering robust architectures, from multi-modal transport aggregators to RAG-based AI tooling.
          </motion.p>
        </div>
      </div>

      <div className="md:w-2/3 flex flex-col pt-4">
        {experienceData.map((item, i) => (
          <TimelineCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;