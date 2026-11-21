import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const tickerItems = [
  'FULL-STACK ARCHITECTURE',
  'PYTHON & DJANGO REST',
  'REACT & FRAMER MOTION',
  'RAG & AI AUTOMATION',
  'SCALABLE CLOUD SYSTEMS',
];

const GLITCH_CHARS = '01X#$%_/@&!?<>';
const FAULT_CODES = [
  '0x004F9A // FRAME_DROP',
  'ERR_SYNC // SIGNAL_LOST',
  'SIGSEGV // RECOVERING',
  'MEM_FAULT // 0x7FFF2A',
];

const scrambleText = (original, intensity = 0.45) =>
  original
    .split('')
    .map((char) =>
      Math.random() < intensity
        ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        : char
    )
    .join('');

const Hero = () => {
  const [time, setTime] = useState('');
  const [glitchState, setGlitchState] = useState({
    active: false,
    first: 'VISHAL',
    last: 'SINHA',
    faultCode: FAULT_CODES[0],
    sliceTop: 20,
    sliceBottom: 55,
    offsetX: 0,
  });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const xRight = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  // Live IST clock
  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Realistic multi-frame glitch burst (scramble + slice tear + stutter)
  const triggerGlitch = useCallback(() => {
    const fault = FAULT_CODES[Math.floor(Math.random() * FAULT_CODES.length)];
    let frame = 0;
    const totalFrames = 4;

    const runFrame = () => {
      if (frame >= totalFrames) {
        setGlitchState((prev) => ({
          ...prev,
          active: false,
          first: 'VISHAL',
          last: 'SINHA',
          offsetX: 0,
        }));
        return;
      }

      const top = Math.floor(Math.random() * 55);
      const height = 12 + Math.floor(Math.random() * 25);

      setGlitchState({
        active: true,
        first: scrambleText('VISHAL', frame === 1 ? 0.65 : 0.35),
        last: scrambleText('SINHA', frame === 2 ? 0.65 : 0.35),
        faultCode: fault,
        sliceTop: top,
        sliceBottom: Math.max(0, 100 - (top + height)),
        offsetX: (Math.random() > 0.5 ? 1 : -1) * (6 + Math.floor(Math.random() * 14)),
      });

      frame += 1;
      setTimeout(runFrame, 45 + Math.random() * 45);
    };

    runFrame();
  }, []);

  // Randomized, organic interval (never robotic)
  useEffect(() => {
    let timeoutId;

    const scheduleNext = () => {
      const delay = 3500 + Math.random() * 4000;
      timeoutId = setTimeout(() => {
        triggerGlitch();
        // 35% chance of a realistic follow-up micro-stutter
        if (Math.random() < 0.35) {
          setTimeout(triggerGlitch, 380);
        }
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, [triggerGlitch]);

  const { active, first, last, faultCode, sliceTop, sliceBottom, offsetX } = glitchState;

  return (
    <section
      ref={heroRef}
      className="relative min-h-dvh w-full flex flex-col justify-between bg-[#050505] text-[#F4F4F0] border-b border-white/10 select-none overflow-hidden"
    >
      {/* Real Horizontal Tear Bars during active fault */}
      {active && (
        <>
          <div
            style={{ top: `${sliceTop}%` }}
            className="absolute left-0 right-0 h-[2px] bg-[#FF2A2A] shadow-[0_0_10px_#FF2A2A] z-40 pointer-events-none"
          />
          <div
            style={{ top: `${Math.min(92, sliceTop + 18)}%` }}
            className="absolute left-0 right-0 h-[1px] bg-[#D4FF00]/80 z-40 pointer-events-none"
          />
        </>
      )}

      {/* Top Architectural Status Bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full grid grid-cols-2 md:grid-cols-4 border-b border-white/10 text-xs font-mono uppercase tracking-widest"
      >
        <div className="p-5 md:p-6 border-r border-white/10 flex items-center gap-3 overflow-hidden">
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${
              active ? 'bg-[#FF2A2A] animate-ping' : 'bg-[#D4FF00] animate-pulse'
            }`}
          />
          <span className={`truncate ${active ? 'text-[#FF2A2A] font-bold' : 'text-[#F4F4F0]'}`}>
            {active ? faultCode : 'Available / 2026'}
          </span>
        </div>

        <div className="p-5 md:p-6 md:border-r border-white/10 text-right md:text-left text-neutral-400 tabular-nums">
          {active ? 'AMD, IN — --:--:-- ERR' : `AMD, IN — ${time} IST`}
        </div>

        <div className="hidden md:block p-6 border-r border-white/10 text-neutral-400">
          Full-Stack &amp; AI Systems
        </div>

        <a
          href="/resume.pdf"
          download
          className="hidden md:flex p-6 items-center justify-between relative overflow-hidden group font-bold"
        >
          <span className="absolute inset-0 bg-[#D4FF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          <span className="relative z-10 group-hover:text-black transition-colors">Download CV</span>
          <span className="relative z-10 group-hover:text-black group-hover:translate-y-0.5 transition-all">↓</span>
        </a>
      </motion.header>

      {/* Center: Massive Kinetic Typography with Real Sliced RGB Tear */}
      <motion.div
        style={{ opacity: heroOpacity }}
        onMouseEnter={triggerGlitch}
        className="flex-1 flex flex-col justify-center px-6 md:px-12 py-12 overflow-hidden"
      >
        {/* FIRST NAME */}
        <div className="overflow-hidden relative">
          <motion.h1
            style={{ x: xLeft }}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] md:text-[13vw] font-black uppercase leading-[0.82] tracking-tighter text-[#F4F4F0] relative"
          >
            {first}

            {/* Sliced Red Error Tear Layer */}
            {active && (
              <span
                aria-hidden="true"
                style={{
                  clipPath: `inset(${sliceTop}% 0 ${sliceBottom}% 0)`,
                  transform: `translateX(${offsetX}px)`,
                }}
                className="absolute inset-0 text-[#FF2A2A] pointer-events-none select-none"
              >
                {first}
              </span>
            )}

            {/* Opposite Acid-Lime Sync Offset Layer */}
            {active && (
              <span
                aria-hidden="true"
                style={{
                  clipPath: `inset(${Math.max(0, 100 - sliceBottom)}% 0 0% 0)`,
                  transform: `translateX(${-offsetX * 0.6}px)`,
                }}
                className="absolute inset-0 text-[#D4FF00] opacity-80 pointer-events-none select-none"
              >
                {first}
              </span>
            )}
          </motion.h1>
        </div>

        {/* LAST NAME + ROLE */}
        <div className="overflow-hidden flex items-baseline gap-4 md:gap-8 relative">
          <motion.h1
            style={{ x: xRight }}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] md:text-[13vw] font-black uppercase leading-[0.82] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(244,244,240,0.4)] hover:text-[#D4FF00] hover:[-webkit-text-stroke:0px] transition-all duration-200 relative"
          >
            {last}

            {active && (
              <span
                aria-hidden="true"
                style={{
                  clipPath: `inset(${sliceTop}% 0 ${sliceBottom}% 0)`,
                  transform: `translateX(${-offsetX}px)`,
                }}
                className="absolute inset-0 text-[#FF2A2A] [-webkit-text-stroke:0px] pointer-events-none select-none"
              >
                {last}
              </span>
            )}
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className={`hidden lg:inline-block text-sm font-mono uppercase tracking-widest max-w-xs leading-relaxed transition-colors ${
              active ? 'text-[#FF2A2A]' : 'text-[#D4FF00]'
            }`}
          >
            // {active ? faultCode : portfolioData.hero.role}
          </motion.span>
        </div>
      </motion.div>

      {/* Kinetic Infinite Marquee Ticker */}
      <div className="w-full border-t border-white/10 py-3 overflow-hidden flex bg-[#080808]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500"
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{item}</span>
              <span className={active ? 'text-[#FF2A2A]' : 'text-[#D4FF00]'}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Split Strip */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 border-t border-white/10">
        <div className="md:col-span-8 p-6 md:p-8 md:border-r border-white/10 flex items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-neutral-400 text-base md:text-xl max-w-2xl font-light leading-relaxed"
          >
            {portfolioData.hero.tagline}
          </motion.p>
        </div>

        <a
          href="#projects"
          className="md:col-span-4 p-6 md:p-8 flex items-center justify-between relative overflow-hidden group bg-[#D4FF00] text-black font-mono font-bold uppercase tracking-widest text-sm"
        >
          <span className="absolute inset-0 bg-[#F4F4F0] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          <span className="relative z-10">Explore Selected Work</span>
          <span className="relative z-10 text-xl group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
            ↘
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;