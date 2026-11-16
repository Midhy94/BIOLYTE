import React, { useState, useEffect } from 'react';
import { coreServices } from '../data/siteData';
import { teamMembers } from '../data/teamData';
import { PersonModal } from '../components/PersonModal';
import { Person } from '../types';
import { CheckCircle2, ArrowRight, Building2, MapPin, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesPageProps {
  initialSlug?: string;
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ initialSlug = 'industrial-and-logistics', onNavigate }) => {
  const [activeSlug, setActiveSlug] = useState(initialSlug);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    if (initialSlug) {
      setActiveSlug(initialSlug);
    }
  }, [initialSlug]);

  const activeService = coreServices.find((s) => s.slug === activeSlug) || coreServices[0];

  // Find relevant team contacts for this service
  const servicePartners = teamMembers.filter((m) => {
    if (activeSlug === 'industrial-and-logistics') {
      return ['keith-dowley', 'david-turner', 'ben-sleath', 'jake-huntley', 'richard-harman', 'mark-webster'].includes(m.slug);
    } else if (activeSlug === 'science-technology') {
      return ['matt-smith', 'claudia-harley', 'dan-tiernan'].includes(m.slug);
    } else if (activeSlug === 'alternatives') {
      return ['harry-glatman', 'tom-sarjant', 'charlie-spilsbury'].includes(m.slug);
    } else {
      return ['natalie-barone', 'tony-edgley', 'steven-friend'].includes(m.slug);
    }
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-dtre-dark text-white pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={activeService.imageUrl}
            alt={activeService.title}
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dtre-darker via-dtre-darker/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-3">
            Services & Sectors
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white max-w-3xl leading-tight">
            {activeService.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl font-light mt-4 leading-relaxed">
            {activeService.shortDesc}
          </p>

          {/* Sector Selector Tabs */}
          <div className="mt-12 flex flex-wrap gap-2 pt-6 border-t border-white/10">
            {coreServices.map((s) => (
              <button
                key={s.slug}
                onClick={() => setActiveSlug(s.slug)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeSlug === s.slug
                    ? 'bg-white text-dtre-navy shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Full Description and Capabilities */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-2">
                Strategic Scope
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-normal text-dtre-navy leading-snug">
                Turnkey engineering excellence delivering {activeService.title.toLowerCase()} infrastructure.
              </h2>
              <div className="h-0.5 w-16 bg-dtre-accent my-6" />
              <p className="text-base sm:text-lg text-dtre-navy/80 leading-relaxed font-light">
                {activeService.fullDesc}
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80">
              <h3 className="text-xl font-editorial font-bold text-dtre-navy mb-6">
                Core Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-dtre-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-dtre-navy">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Mandates and Deals */}
            {activeService.keyDeals && activeService.keyDeals.length > 0 && (
              <div>
                <h3 className="text-xl font-editorial font-bold text-dtre-navy mb-6">
                  Key Deployments & Plant Benchmarks
                </h3>
                <div className="space-y-4">
                  {activeService.keyDeals.map((deal, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border border-slate-200 hover:border-dtre-accent/50 hover:shadow-md transition-all gap-4"
                    >
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-dtre-navy">{deal.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-dtre-muted">
                          <MapPin className="w-3.5 h-3.5 text-dtre-accent" />
                          <span>{deal.location}</span>
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0">
                        <span className="text-sm font-mono font-bold text-dtre-navy block">
                          {deal.size}
                        </span>
                        {deal.value && (
                          <span className="text-xs text-dtre-accent font-semibold block">
                            {deal.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Contacts for this sector & CTA */}
          <div className="lg:col-span-4 space-y-8">
            {/* Sector Lead Partners */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
                  Engineering Specialists
                </span>
                <h3 className="text-lg font-editorial font-bold text-dtre-navy">
                  Technical Project Leads
                </h3>
              </div>

              <div className="space-y-4">
                {servicePartners.slice(0, 3).map((partner) => (
                  <div
                    key={partner.id}
                    onClick={() => setSelectedPerson(partner)}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-slate-200/60 hover:shadow-md cursor-pointer transition-all group"
                  >
                    <img
                      src={partner.image || 'https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/KeithDowley-1.jpg'}
                      alt={partner.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors truncate">
                        {partner.name}
                      </h4>
                      <p className="text-[11px] text-dtre-muted truncate">
                        {partner.jobTitle.split('\n')[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full bg-dtre-navy hover:bg-dtre-accent text-white py-3 rounded-full font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Related Research Box */}
            <div className="bg-dtre-dark text-white rounded-3xl p-6 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-dtre-accent font-semibold block">
                Technical Intelligence
              </span>
              <h4 className="text-base font-editorial font-bold">
                Read our engineering technical briefs for {activeService.title}
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Comprehensive data covering biological methane potential, membrane sweetening, and emission offsets.
              </p>
              <button
                onClick={() => onNavigate('/research-insights')}
                className="text-xs font-semibold text-dtre-accent hover:underline inline-flex items-center gap-1 pt-2"
              >
                <span>Access Technical Whitepapers</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Person Bio Modal */}
      <PersonModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </div>
  );
};
