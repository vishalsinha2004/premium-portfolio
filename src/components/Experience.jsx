import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experienceData = [
  {
    id: 1,
    role: "Data Science Intern",
    company: "TECHMICRE",
    date: "2025",
    desc: "Engineered Python-based data handling pipelines, implemented machine learning algorithms, and conducted exploratory data analysis within a professional tech ecosystem."
  },
  {
    id: 2,
    role: "Machine Learning Integration",
    company: "EduPredict AI",
    date: "2026",
    desc: "Architected a Flask-based student performance prediction engine leveraging advanced ML models for analytical forecasting."
  },
  {
    id: 3,
    role: "Python (Basic) Certification",
    company: "HackerRank & Simplilearn",
    date: "2025",
    desc: "Validated core Python competencies, algorithmic problem solving, and backend logic fundamentals."
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animates the height of the timeline line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-24 relative">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-black text-white mb-20 tracking-tighter"
      >
        Career <span className="text-cyanAccent">Trajectory.</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* The Animated Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-gradient-to-b from-cyanAccent to-mutedTeal"
          />
        </div>

        <div className="flex flex-col gap-16">
          {experienceData.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring" }}
              className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-obsidian border-4 border-cyanAccent -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(102,252,241,0.8)]" />
              
              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="bg-charcoal/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl transition-colors hover:border-cyanAccent/50 group">
                  <span className="text-cyanAccent font-mono text-sm mb-2 block">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyanAccent transition-colors">
                    {item.role}
                  </h3>
                  <h4 className="text-lg text-gray-400 font-semibold mb-4">
                    {item.company}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;