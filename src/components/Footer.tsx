import React, { useState } from 'react';
import { DTRELogo } from './DTRELogo';
import { officesList } from '../data/siteData';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-dtre-dark text-white pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Subtle Centered BIOLYTE Background Watermark (Subtle White) */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/4 pointer-events-none opacity-[0.025] select-none flex justify-center w-full max-w-7xl overflow-hidden">
        <DTRELogo className="w-[850px] sm:w-[1100px] lg:w-[1300px] max-w-none h-auto" fill="#FFFFFF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Newsletter and Brand Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <DTRELogo className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" fill="#FFFFFF" />
            <p className="text-xl sm:text-2xl font-editorial font-medium text-white/90 max-w-xl leading-snug">
              Turnkey EPC contractors and sustainable energy partners operating across Saudi Arabia and internationally.
            </p>
            <p className="text-sm text-white/60 max-w-lg leading-relaxed">
              Bringing European engineering experience and advanced waste-to-value technology to build and manage industrial Biogas, Bio-Methane, Bio-Hydrogen, Bio-Methanol, and Cogeneration infrastructure.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-dtre-accent font-semibold mb-2">
                Technical Intelligence
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Subscribe to Renewable Energy & Technology Briefs
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Receive technical whitepapers on anaerobic digestion yields, biomethane grid standards, and water-free dust suppression directly to your inbox.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-white/10 rounded-lg text-emerald-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you. You have been subscribed to BIOLYTE Technical Briefs.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    className="flex-1 bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-base sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-dtre-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-dtre-accent hover:bg-dtre-accentHover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Section: Compact Locations */}
        <div className="py-8 sm:py-10 border-b border-white/[0.08]">
          <div className="text-xs uppercase tracking-widest text-dtre-accent font-semibold mb-5">
            Our Locations
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {officesList.map((office) => (
              <div 
                key={office.id} 
                className="bg-white/[0.025] hover:bg-white/[0.045] border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm sm:text-base font-semibold tracking-wide text-white">
                      {office.city}
                    </h4>
                    <MapPin className="w-3.5 h-3.5 text-dtre-accent opacity-80" />
                  </div>
                  <div className="text-xs text-white/60 space-y-0.5 mb-4 font-light leading-relaxed">
                    {office.addressLines.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-dtre-accent hover:underline flex items-center gap-1 font-medium"
                  >
                    <Phone className="w-3 h-3" />
                    {office.phone}
                  </a>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="text-white/60 hover:text-white flex items-center gap-1 transition-colors text-xs"
                  >
                    Enquire <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Centralized Navigation Links */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-sm text-white/70 text-center max-w-5xl mx-auto">
            <button onClick={() => onNavigate('/services#biogas')} className="hover:text-dtre-accent transition-colors">
              Biogas & Anaerobic Digestion
            </button>
            <button onClick={() => onNavigate('/services#biomethane')} className="hover:text-dtre-accent transition-colors">
              Bio-Methane & Bio-CNG
            </button>
            <button onClick={() => onNavigate('/services#biohydrogen')} className="hover:text-dtre-accent transition-colors">
              Bio-Hydrogen Systems
            </button>
            <button onClick={() => onNavigate('/services#biomethanol')} className="hover:text-dtre-accent transition-colors">
              Bio-Methanol & Marine Fuels
            </button>
            <button onClick={() => onNavigate('/services#pavements')} className="hover:text-dtre-accent transition-colors">
              Natural Pavements
            </button>
            <button onClick={() => onNavigate('/research-insights')} className="hover:text-dtre-accent transition-colors">
              Technologies & Insights
            </button>
            <button onClick={() => onNavigate('/about')} className="hover:text-dtre-accent transition-colors">
              About BIOLYTE
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-dtre-accent transition-colors">
              Contact
            </button>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© 2026 BIOLYTE / Green Gulf Industry Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('/about')} className="hover:text-white/80 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('/about')} className="hover:text-white/80 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => onNavigate('/about')} className="hover:text-white/80 transition-colors">
              Environmental Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
