import React, { useState, useEffect, useRef } from 'react';
import { heroSlides } from '../data/siteData';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring 
} from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { DTREArrow } from './DTRELogo';

interface HeroSliderProps {
  onNavigate: (path: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const duration = 7000; // 7 seconds per slide

  // Subtle Scroll-Driven Parallax (Gentle depth without disorienting movement)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // Very subtle image depth translation (max 8%) and subtle scale (1.0 to 1.03)
  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '8%']);
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.03]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
    }, duration);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = heroSlides[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about-dtre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen h-[100vh] w-full overflow-hidden bg-dtre-dark text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Parallax Background Layer */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute inset-x-0 -top-6 -bottom-12 z-0 will-change-transform pointer-events-none"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-dtre-darker/95 via-dtre-darker/60 to-dtre-darker/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-dtre-darker/90 via-dtre-darker/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-36 sm:pt-44 pb-12 sm:pb-16">
        {/* Central Hero Headline Block (Natural Scroll) */}
        <div className="max-w-3xl space-y-6">
          <motion.div
            key={`badge-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              {slide.badge}
            </span>
          </motion.div>

          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-bold tracking-tight text-white leading-[1.08] whitespace-pre-line"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={`desc-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-xl"
          >
            {slide.description}
          </motion.p>

          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="pt-4 flex items-center gap-4"
          >
            <button
              onClick={() => {
                if (slide.ctaUrl.startsWith('#')) {
                  scrollToAbout();
                } else {
                  onNavigate(slide.ctaUrl);
                }
              }}
              className="inline-flex items-center gap-3 bg-white text-dtre-navy hover:bg-dtre-accent hover:text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-xl group"
            >
              <span>{slide.ctaLabel}</span>
              <DTREArrow className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar: Slide Counter, Progress Bar, Arrows & Scroll Indicator */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
          {/* Slide Navigation & Indicator */}
          <div className="flex items-center gap-6">
            <div className="text-sm font-mono tracking-widest text-white/70">
              <span className="text-white font-semibold text-base">0{currentIdx + 1}</span>
              <span className="mx-1 text-white/30">/</span>
              <span>0{heroSlides.length}</span>
            </div>

            {/* Slide Progress Bar */}
            <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                key={`prog-${currentIdx}-${isPaused}`}
                initial={{ width: '0%' }}
                animate={{ width: isPaused ? '100%' : '100%' }}
                transition={{ duration: isPaused ? 0 : duration / 1000, ease: 'linear' }}
                className="h-full bg-dtre-accent"
              />
            </div>

            {/* Arrow Nav Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToAbout}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors group"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-dtre-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};
