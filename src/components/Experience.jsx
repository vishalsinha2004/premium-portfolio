import { motion } from 'framer-motion';

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

const Experience = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 relative">
      
      {/* Left Column: Sticky Header */}
      <div className="md:w-1/3">
        <div className="sticky top-32">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-primary mb-6"
          >
            Experience & <br /> Arsenal.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-lg leading-relaxed"
          >
            A track record of engineering robust architectures, from multi-modal transport aggregators to RAG-based AI tooling.
          </motion.p>
        </div>
      </div>

      {/* Right Column: Scrolling Timeline & Tech Stack */}
      <div className="md:w-2/3 flex flex-col gap-16">
        {experienceData.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group relative border-l-2 border-gray-200 pl-8 pb-8 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-background border-2 border-primary rounded-full group-hover:bg-primary transition-colors duration-300" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h3 className="text-2xl font-bold text-primary tracking-tight">{item.role}</h3>
              <span className="text-secondary font-mono text-sm">{item.date}</span>
            </div>
            
            <h4 className="text-lg font-medium text-accent mb-4">{item.company}</h4>
            <p className="text-secondary leading-relaxed mb-6 max-w-2xl">
              {item.desc}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t, idx) => (
                <span key={idx} className="px-3 py-1 bg-surface border border-gray-200 text-primary text-xs font-semibold rounded-md tracking-wide">
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