import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
  'ERR_0x01 // DISPLAY_SYNC_LOST',
  'BYPASSING KERNEL CHECKSUM...',
  'MOUNTING ARCHITECTURE_GRID...',
  'SIGNAL_LOCKED // 100%',
];

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';
          }, 260);
          return 100;
        }
        return prev + 4;
      });
    }, 35);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isFaultPhase = progress < 40;
  const logIndex = Math.min(BOOT_LOGS.length - 1, Math.floor(progress / 28));

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] text-[#F4F4F0] flex flex-col justify-between p-6 md:p-12 border-b border-white/10"
        >
          <div className="flex justify-between font-mono text-xs uppercase tracking-widest">
            <span className={isFaultPhase ? 'text-[#FF2A2A] animate-pulse' : 'text-neutral-500'}>
              {isFaultPhase ? 'FAULT // RECOVERY_MODE' : 'Vishal Sinha — Portfolio'}
            </span>
            <span className="text-neutral-500">0x7FFF2A</span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between gap-4">
              <span
                className={`font-mono text-xs uppercase tracking-widest ${
                  isFaultPhase ? 'text-[#FF2A2A]' : 'text-[#D4FF00]'
                }`}
              >
                {BOOT_LOGS[logIndex]}
              </span>
              <span
                className={`text-6xl md:text-9xl font-black tracking-tighter leading-none tabular-nums ${ isFaultPhase ? 'text-[#FF2A2A]' : 'text-[#F4F4F0]' }`} > {String(progress).padStart(2, '0')}\% </span> </div>  <div className="w-full h-[2px] bg-white/10 overflow-hidden"> <div style={{ width: `${progress}%` }}
                className={`h-full transition-all duration-75 ${
                  isFaultPhase ? 'bg-[#FF2A2A]' : 'bg-[#D4FF00]'
                }`}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;