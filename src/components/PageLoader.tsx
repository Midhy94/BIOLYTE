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

    let currentProgress = 0;
    const interval = setInterval(() => {
      // Non-linear easing progress for authentic technical feel
      const increment = currentProgress < 60 ? Math.random() * 8 + 4 : Math.random() * 6 + 2;
      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(Math.floor(currentProgress));

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 250);
      }
    }, 35);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="biolyte-page-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { 
              duration: 0.8, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[100] bg-[#0c1626] text-white flex flex-col items-center justify-between p-8 sm:p-12 select-none overflow-hidden"
        >
          {/* Ambient Glowing Rose Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-dtre-accent/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Brand Tag */}
          <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-white/40">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dtre-accent animate-pulse" />
              <span>BIOLYTE EPC PLATFORM</span>
            </div>
            <span className="hidden sm:inline">AL JUBAIL • VERONA</span>
          </div>

          {/* Center Logo & Progress */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-8 my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <BiolyteLogo className="h-9 sm:h-12 w-auto" fill="#D12B81" />
              {/* Subtle Logo Glow Layer */}
              <div className="absolute inset-0 blur-lg bg-dtre-accent/30 -z-10 opacity-70" />
            </motion.div>

            {/* Hairline Progress Bar */}
            <div className="space-y-3 w-60 sm:w-72">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-dtre-accent"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>

              {/* Counter & Status */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/40 uppercase tracking-widest text-[10px]">
                  Initializing Assets
                </span>
                <span className="text-dtre-accent font-semibold tracking-wider">
                  {String(progress).padStart(2, '0')}%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Descriptor */}
          <div className="relative z-10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30 text-center">
            Pioneering Sustainable Energy & Organic Upcycling
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
