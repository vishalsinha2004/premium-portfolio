import { motion } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: "Walkvert & Indora",
    tech: ["React", "Node.js", "Tailwind CSS"],
    desc: "Multi-modal transportation aggregator and logistics advertising platform engineered for urban transit."
  },
  {
    id: 2,
    title: "Notesroom",
    tech: ["Django", "React", "Supabase"],
    desc: "Academic note-sharing web platform featuring secure OTP authentication and robust S3 document storage."
  },
  {
    id: 3,
    title: "MyPDF.AI",
    tech: ["Python", "Streamlit", "Gemini API", "FAISS"],
    desc: "Intelligent RAG-based document chatbot utilizing vector embeddings for precise PDF parsing."
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-obsidian py-24 px-10 md:px-24">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl md:text-5xl font-bold text-white mb-16 border-b-2 border-cyanAccent inline-block pb-2"
      >
        Featured Architecture
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(102, 252, 241, 0.15)" }}
            className="bg-charcoal/50 border border-white/10 rounded-2xl p-8 transition-colors hover:border-cyanAccent/50"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.desc}</p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, index) => (
                <span key={index} className="text-sm font-mono text-cyanAccent bg-cyanAccent/10 px-3 py-1 rounded-full">
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

export default Projects;