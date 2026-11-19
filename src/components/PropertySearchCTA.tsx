import React from 'react';
import { DTREArrow } from './DTRELogo';

interface PropertySearchCTAProps {
  onNavigate: (path: string) => void;
}

export const PropertySearchCTA: React.FC<PropertySearchCTAProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-dtre-dark text-white">
      {/* Background Photography with Depth Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80"
          alt="BIOLYTE Clean Energy Infrastructure"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dtre-darker/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-dtre-darker via-dtre-darker/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
            Turnkey EPC & Project Feasibility
          </span>
          <h2 className="text-3xl sm:text-5xl font-editorial font-semibold leading-[1.15] text-white">
            Ready to convert your organic waste stream into clean, profitable energy?
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
            Our specialized engineers evaluate your feedstock volume, calculate potential biomethane and hydrogen yields, and structure complete turnkey EPC delivery tailored to your operations.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-3 bg-white hover:bg-dtre-accent text-dtre-navy hover:text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 shadow-2xl group"
            >
              <span>Request Technical Consultation</span>
              <DTREArrow className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
