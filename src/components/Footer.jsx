import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-[#F4F4F0] pt-20 pb-28 px-6 md:px-12 overflow-hidden">
      <div className="flex flex-col items-start justify-between gap-12">
        <div className="overflow-hidden w-full">
          <motion.a
            href="mailto:your.email@example.com"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-[13vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#F4F4F0] hover:text-[#D4FF00] transition-colors duration-200"
          >
            <GlitchText text="LET'S BUILD." auto />
          </motion.a>
        </div>

        <div className="w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs uppercase tracking-widest text-neutral-500">
          <p>© {new Date().getFullYear()} Vishal Sinha — SYS_EOF</p>
          <p className="text-[#FF2A2A]">STATUS // SIGNAL_ACTIVE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;