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
      {/* Subtle Centered BIOLYTE Background Watermark */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/4 pointer-events-none opacity-[0.06] select-none flex justify-center w-full max-w-7xl overflow-hidden">
        <DTRELogo className="w-[850px] sm:w-[1100px] lg:w-[1300px] max-w-none h-auto" fill="#D12B81" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Newsletter and Brand Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <DTRELogo className="h-8 w-auto" fill="#D12B81" />
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
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    className="flex-1 bg-white/5 border border-white/20 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-dtre-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-dtre-accent hover:bg-dtre-accentHover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Section: Regional Operations & Engineering Hubs */}
        <div className="py-16 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-2">
                Regional Hubs & Engineering Presence
              </span>
              <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-white tracking-tight">
                Global Engineering, Local Execution
              </h3>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/80 hover:text-dtre-accent transition-colors self-start sm:self-auto group"
            >
              <span>View Consultation Offices</span>
              <ArrowUpRight className="w-4 h-4 text-dtre-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {officesList.map((office) => {
              const isHQ = office.id === 'jubail';
              return (
                <div 
                  key={office.id} 
                  className="relative group rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] hover:from-white/[0.09] hover:to-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-dtre-accent/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Top-Right Ambient Sheen */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-dtre-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-dtre-accent/20 transition-all duration-500 -mr-12 -mt-12" />

                  <div className="relative z-10">
                    {/* Header: Tag & Pin */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-medium bg-white/10 text-white/90 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-dtre-accent animate-pulse" />
                        {isHQ ? 'HEADQUARTERS & EPC' : 'EUROPEAN R&D CENTER'}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-dtre-accent group-hover:scale-110 group-hover:bg-dtre-accent group-hover:text-white transition-all duration-300">
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>

                    {/* City Title */}
                    <h4 className="text-xl sm:text-2xl font-editorial font-semibold tracking-wide text-white mb-3">
                      {office.city}
                    </h4>

                    {/* Address Lines */}
                    <div className="text-sm text-white/70 space-y-1 mb-6 font-light leading-relaxed">
                      {office.addressLines.map((line, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info & Action Link */}
                  <div className="relative z-10 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div className="space-y-1.5 text-xs">
                      <a
                        href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center gap-2 text-white/80 hover:text-dtre-accent transition-colors font-medium"
                      >
                        <Phone className="w-3.5 h-3.5 text-dtre-accent shrink-0" />
                        <span>{office.phone}</span>
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-dtre-accent shrink-0" />
                        <span className="truncate">{office.email}</span>
                      </a>
                    </div>

                    <div className="flex sm:justify-end">
                      <button
                        onClick={() => onNavigate('/contact')}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-dtre-accent text-white border border-white/15 hover:border-transparent transition-all duration-200 active:scale-95 group/btn"
                      >
                        <span>Project Enquiry</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
