import React, { useState } from 'react';
import { DTRELogo } from './DTRELogo';
import { officesList, footerAccreditations } from '../data/siteData';
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
      {/* Subtle BIOLYTE Background Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.05] select-none translate-x-1/4 translate-y-1/4">
        <DTRELogo className="w-[800px] h-auto" fill="#D12B81" />
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

        {/* Middle Section: 3 UK Offices */}
        <div className="py-16 border-b border-white/10">
          <div className="text-xs uppercase tracking-widest text-dtre-accent font-semibold mb-8">
            Our Locations
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officesList.map((office) => (
              <div 
                key={office.id} 
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:bg-white/[0.06] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold tracking-wide text-white">
                    {office.city.toUpperCase()}
                  </h4>
                  <MapPin className="w-4 h-4 text-dtre-accent" />
                </div>
                <div className="text-sm text-white/70 space-y-1 mb-6 font-light">
                  {office.addressLines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-dtre-accent hover:underline flex items-center gap-1 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {office.phone}
                  </a>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="text-white/60 hover:text-white flex items-center gap-1"
                  >
                    Enquire <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Navigation & Accreditations */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10">
          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <button onClick={() => onNavigate('/services#biogas')} className="hover:text-white transition-colors">
              Biogas & Anaerobic Digestion
            </button>
            <button onClick={() => onNavigate('/services#biomethane')} className="hover:text-white transition-colors">
              Bio-Methane & Bio-CNG
            </button>
            <button onClick={() => onNavigate('/services#biohydrogen')} className="hover:text-white transition-colors">
              Bio-Hydrogen Systems
            </button>
            <button onClick={() => onNavigate('/services#biomethanol')} className="hover:text-white transition-colors">
              Bio-Methanol & Marine Fuels
            </button>
            <button onClick={() => onNavigate('/services#pavements')} className="hover:text-white transition-colors">
              Natural Pavements
            </button>
            <button onClick={() => onNavigate('/research-insights')} className="hover:text-white transition-colors">
              Technologies & Insights
            </button>
            <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
              About BIOLYTE
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Accreditations */}
          <div className="flex items-center gap-6 shrink-0">
            {footerAccreditations.map((acc) => (
              <img
                key={acc.name}
                src={acc.url}
                alt={acc.name}
                title={acc.name}
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
              />
            ))}
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
