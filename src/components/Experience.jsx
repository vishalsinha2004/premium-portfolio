import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import GlitchText from './GlitchText';

const experienceData = [
  {
    role: 'Machine Learning Integration',
    company: 'EduPredict AI',
    date: 'LOG_2026',
    desc: 'Architected a Flask-based student performance prediction engine leveraging advanced ML models for analytical forecasting.',
    tech: ['Python', 'Flask', 'Machine Learning', 'Jinja2'],
  },
  {
    role: 'Data Science Intern',
    company: 'TECHMICRE',
    date: 'LOG_2025',
    desc: 'Engineered Python-based data handling pipelines, implemented machine learning algorithms, and conducted exploratory data analysis.',
    tech: ['Pandas', 'NumPy', 'Keras', 'CNNs', 'NLP'],
  },
];

const Experience = () => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 75%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 150, damping: 25 });

  return (
    <section className="w-full bg-[#050505] text-[#F4F4F0] border-b border-white/10 grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-4 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
        <div className="lg:sticky lg:top-16 overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF2A2A] block mb-2">
            (04) // TRACE_CHRONOLOGY
          </span>
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6"
          >
            <GlitchText text="EXPERIENCE" />
          </motion.h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            A track record of engineering robust architectures, from multi-modal transport aggregators to RAG-based AI tooling.
          </p>
        </div>
      </div>

      <div ref={listRef} className="lg:col-span-8 flex flex-col relative">
        <motion.div
          style={{ scaleY }}
          className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF2A2A] origin-top z-10 pointer-events-none"
        />

        {experienceData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group p-6 md:p-12 border-b last:border-b-0 border-white/10 hover:bg-white/[0.03] transition-colors duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">
                <GlitchText text={item.role} />
              </h3>
              <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 border border-[#FF2A2A]/40 text-[#FF2A2A] w-max">
                {item.date}
              </span>
            </div>

            <div className="font-mono text-sm uppercase tracking-widest text-[#D4FF00] mb-6">
              @ {item.company}
            </div>

            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {item.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#0A0A0A] border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;