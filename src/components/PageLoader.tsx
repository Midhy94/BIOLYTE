import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiolyteLogo } from './BiolyteLogo';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock body scroll while loader is visible
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      // Natural cadence: rapid start, steady finish
      const delta = current < 70 ? Math.floor(Math.random() * 8) + 5 : Math.floor(Math.random() * 5) + 3;
      current = Math.min(100, current + delta);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 180);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="biolyte-architectural-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { 
              duration: 0.65, 
              ease: [0.77, 0, 0.175, 1] 
            } 
          }}
          className="fixed inset-0 z-[100] bg-[#080E1A] text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Top Architectural Metadata Frame */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#D12B81]" />
              <span className="text-white/80 font-medium">BIOLYTE</span>
              <span className="text-white/30 hidden sm:inline">/</span>
              <span className="hidden sm:inline text-white/50">ENGINEERING & EPC</span>
            </div>
            <div className="text-white/50">
              AL JUBAIL INDUSTRIAL CITY
            </div>
          </div>

          {/* Center: Crisp Geometric Presentation */}
          <div className="flex flex-col items-center justify-center my-auto space-y-8 max-w-sm mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <BiolyteLogo className="h-8 sm:h-10 w-auto" fill="#FFFFFF" />
            </motion.div>

            {/* Hairline Technical Progress Track (Clean 1px line, zero blur) */}
            <div className="w-full space-y-3">
              <div className="w-full h-[1px] bg-white/15 relative overflow-hidden">
                <motion.div
                  className="h-full bg-[#D12B81]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Monospace Coordinates & Percentage */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="tracking-widest uppercase text-white/40">
                  {progress < 100 ? 'LOADING SYSTEM' : 'INITIALIZED'}
                </span>
                <span className="font-semibold text-white tracking-widest tabular-nums">
                  {String(progress).padStart(3, '0')}%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Precision Blueprint Coordinates */}
          <div className="w-full flex items-center justify-between text-[10px] font-mono tracking-widest text-white/40 border-t border-white/[0.08] pt-4">
            <span className="hidden sm:inline">27°00&apos;16&quot;N 49°39&apos;29&quot;E</span>
            <span>EUROPEAN ENGINEERING STANDARDS</span>
            <span className="hidden sm:inline">KSA VISION 2030</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
