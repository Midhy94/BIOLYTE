import React from 'react';
import { clientLogosRow1, clientLogosRow2 } from '../data/siteData';

export const LogoMarquee: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs uppercase tracking-widest text-dtre-muted font-semibold">
          International Technology Partnerships & Environmental Engineering Standards
        </span>
      </div>

      {/* Row 1 - Scrolling Left */}
      <div className="relative w-full overflow-hidden mb-8">
        <div className="flex gap-12 w-max animate-marquee-left hover:[animation-play-state:paused]">
          {[...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1].map((logo, idx) => (
            <div
              key={`r1-${idx}`}
              className="h-16 w-44 px-4 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={logo.url}
                alt={logo.name}
                title={logo.name}
                className="max-h-12 max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling Right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 w-max animate-marquee-right hover:[animation-play-state:paused]">
          {[...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2].map((logo, idx) => (
            <div
              key={`r2-${idx}`}
              className="h-16 w-44 px-4 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={logo.url}
                alt={logo.name}
                title={logo.name}
                className="max-h-12 max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
