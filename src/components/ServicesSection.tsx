import React, { useState } from 'react';
import { coreServices } from '../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import { DTREArrow } from './DTRELogo';

interface ServicesSectionProps {
  onNavigate: (path: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // We show the primary 3 from the screenshot + optionally the 4th
  const services = coreServices;
  const activeService = services[selectedIdx] || services[0];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Full-Height Architectural Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[680px] rounded-2xl overflow-hidden bg-slate-100 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.imageUrl}
                  alt={activeService.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Subtle glass reflection gradient at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Eyebrow, Large Headline & Minimalist Numbered List */}
          <div className="lg:col-span-6 lg:pl-6 flex flex-col justify-center">
            
            {/* Eyebrow text on top of heading */}
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-4">
              What We Provide at BIOLYTE
            </span>

            {/* Headline with Accent Color Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-editorial font-bold text-dtre-navy leading-[1.18] tracking-tight">
              An EPC contractor that consistently transforms{' '}
              <span className="text-dtre-accent">organic waste</span> into sustainable, high-yield clean energy.
            </h2>

            {/* Hairline Divider Above List */}
            <div className="border-t border-slate-200/90 mt-10 sm:mt-12" />

            {/* Numbered Interactive Service Links */}
            <div className="divide-y divide-slate-200/90">
              {services.map((service, idx) => {
                const isActive = selectedIdx === idx;
                const formattedNumber = String(idx + 1).padStart(2, '0');

                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    onClick={() => onNavigate(`/services#${service.slug}`)}
                    className="py-6 sm:py-7 flex items-center justify-between cursor-pointer group transition-colors select-none"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      {/* Number */}
                      <span className={`text-[11px] sm:text-xs font-mono font-medium tracking-wider transition-colors duration-200 ${
                        isActive ? 'text-dtre-accent font-bold' : 'text-slate-400 group-hover:text-dtre-accent'
                      }`}>
                        {formattedNumber}
                      </span>

                      {/* Title */}
                      <h3 className={`text-xl sm:text-2xl lg:text-[26px] font-editorial font-medium tracking-tight transition-colors duration-200 ${
                        isActive ? 'text-dtre-accent' : 'text-dtre-navy group-hover:text-dtre-accent'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow Indicator on Hover / Active */}
                    <div className="pl-4">
                      <span className={`w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'opacity-100 translate-x-0 text-dtre-accent' 
                          : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-dtre-accent'
                      }`}>
                        <DTREArrow className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
