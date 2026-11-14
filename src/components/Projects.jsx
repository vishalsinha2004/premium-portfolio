import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to merge tailwind classes cleanly
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Projects = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary mb-4">
          Selected Works.
        </h2>
        <p className="text-secondary text-lg max-w-xl">
          A collection of high-performance applications engineered with modern web technologies.
        </p>
      </motion.div>

      {/* The Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        {portfolioData.projects.map((project, i) => (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 0.99 }}
            className={cn(
              "group block relative overflow-hidden bg-surface rounded-[2.5rem] p-10 shadow-bento hover:shadow-bento-hover transition-all duration-500 border border-gray-100/50",
              // Create the bento effect by making specific cards span multiple columns
              i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
            )}
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-1.5 bg-background text-primary text-xs font-semibold rounded-full tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle hover overlay to indicate it's clickable */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-500 pointer-events-none" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;