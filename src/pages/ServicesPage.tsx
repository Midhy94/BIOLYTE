import React, { useState, useEffect } from 'react';
import { coreServices } from '../data/siteData';
import { teamMembers } from '../data/teamData';
import { PersonModal } from '../components/PersonModal';
import { Person } from '../types';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Flame, 
  Zap, 
  ShieldCheck, 
  FileText, 
  Layers, 
  Settings2, 
  BarChart3, 
  Compass 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesPageProps {
  initialSlug?: string;
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  initialSlug = 'biogas', 
  onNavigate 
}) => {
  const [activeSlug, setActiveSlug] = useState(initialSlug);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    if (initialSlug && coreServices.some((s) => s.slug === initialSlug)) {
      setActiveSlug(initialSlug);
    }
  }, [initialSlug]);

  const activeService = coreServices.find((s) => s.slug === activeSlug) || coreServices[0];

  // EPC Delivery Workflow Phases
  const epcPhases = [
    {
      phase: "01",
      title: "Feedstock Feasibility & Yield Modeling",
      desc: "Comprehensive lab characterization of organic substrates, biochemical methane potential (BMP) testing, and financial IRR modeling."
    },
    {
      phase: "02",
      title: "European Process & Mechanical Design",
      desc: "Detailed Front-End Engineering Design (FEED), thermodynamic simulation, and automated SCADA integration."
    },
    {
      phase: "03",
      title: "Procurement & Turnkey EPC Construction",
      desc: "On-site construction in Saudi Arabia adhering to European CE/ATEX explosion-proof safety and civil engineering standards."
    },
    {
      phase: "04",
      title: "Commissioning & Long-Term O&M",
      desc: "Biological inoculations, performance validation testing, grid-injection certification, and 24/7 remote monitoring."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Cinematic Hero Section */}
      <section className="relative bg-[#0c1626] text-white pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
        {/* Dynamic Background Image with Depth Gradients */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeService.slug}
              src={activeService.imageUrl}
              alt={activeService.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.28, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626] via-[#0c1626]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1626] via-[#0c1626]/70 to-transparent" />
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute -top-32 right-0 w-96 h-96 bg-dtre-accent/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Turnkey Industrial EPC Solutions
            </span>
            <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white leading-[1.12] tracking-tight">
              {activeService.title}
            </h1>
            <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed pt-2">
              {activeService.shortDesc}
            </p>
          </div>

          {/* Interactive Technology Selector Pills */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-xs uppercase tracking-wider text-white/50 font-medium mb-4">
              Select Industrial Discipline
            </div>
            <div className="flex flex-wrap gap-2.5">
              {coreServices.map((s) => {
                const isSelected = activeSlug === s.slug;
                return (
                  <button
                    key={s.slug}
                    onClick={() => setActiveSlug(s.slug)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                      isSelected
                        ? 'bg-dtre-accent text-white shadow-lg shadow-dtre-accent/25 scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/20 text-white/85 hover:text-white border border-white/10'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-white/40'}`} />
                    <span>{s.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Engineering Overview */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Scope & Core Capabilities */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview Statement */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
                Technical Architecture & Overview
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-normal text-dtre-navy leading-snug">
                Engineered for maximum molecule conversion, operational safety, and continuous baseload reliability.
              </h2>
              <div className="h-0.5 w-16 bg-dtre-accent" />
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                {activeService.fullDesc}
              </p>
            </div>

            {/* Core Capabilities Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-dtre-navy">
                  Core Engineering Scope & Capabilities
                </h3>
                <span className="text-xs font-mono text-dtre-muted">05 Key Deliverables</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.capabilities.map((cap, idx) => (
                  <div 
                    key={idx} 
                    className="group p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-dtre-accent/50 hover:shadow-lg transition-all duration-200 flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-dtre-accent/10 text-dtre-accent flex items-center justify-center shrink-0 group-hover:bg-dtre-accent group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-dtre-accent transition-colors block leading-snug">
                        {cap}
                      </span>
                      <span className="text-xs text-slate-500 font-light mt-1 block">
                        European technical compliance & turnkey implementation
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EPC 4-Phase Delivery Framework */}
            <div className="space-y-6 pt-6 border-t border-slate-200/80">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
                  Turnkey EPC Lifecycle
                </span>
                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-dtre-navy">
                  How We Deliver Projects Across Saudi Arabia
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {epcPhases.map((phase) => (
                  <div
                    key={phase.phase}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <span className="text-3xl font-mono font-bold text-dtre-accent/20 absolute top-4 right-4 select-none">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-mono font-semibold text-dtre-accent block mb-2">
                      PHASE {phase.phase}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {phase.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Deployments & Plant Benchmarks */}
            {activeService.keyDeals && activeService.keyDeals.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-1">
                      Project Benchmarks
                    </span>
                    <h3 className="text-xl sm:text-2xl font-editorial font-bold text-dtre-navy">
                      Plant Mandates & Operational Capacity
                    </h3>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {activeService.keyDeals.map((deal, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-dtre-accent/50 hover:shadow-md transition-all gap-4"
                    >
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-slate-900">{deal.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-dtre-accent" />
                          <span>{deal.location}</span>
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0">
                        <span className="text-sm font-mono font-bold text-slate-900 block">
                          {deal.size}
                        </span>
                        {deal.value && (
                          <span className="text-xs text-dtre-accent font-semibold block mt-0.5">
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

          {/* Right Column: Engineering Consultation Card & Whitepaper Access */}
          <div className="lg:col-span-4 space-y-8">
            {/* Consultation Card */}
            <div className="bg-[#0c1626] text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-white/10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
                  Project Consultation
                </span>
                <h3 className="text-xl font-editorial font-bold text-white">
                  Evaluate Your Feedstock & Plant Economics
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Our Al Jubail engineers can simulate daily gas yields, power outputs, and payback periods based on your exact organic waste volumes.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-dtre-accent shrink-0" />
                  <span>Certified European process design standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-dtre-accent shrink-0" />
                  <span>On-site feasibility assessment in Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <BarChart3 className="w-4 h-4 text-dtre-accent shrink-0" />
                  <span>Bankable yield guarantees & off-take structuring</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full bg-dtre-accent hover:bg-dtre-accentHover text-white py-3.5 rounded-full font-semibold text-xs tracking-wide transition-all shadow-lg hover:shadow-dtre-accent/30 flex items-center justify-center gap-2"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Technical Whitepapers Box */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-dtre-accent">
                <FileText className="w-4 h-4" />
                <span>Technical Intelligence</span>
              </div>
              <h4 className="text-base font-editorial font-bold text-slate-900 leading-snug">
                Read our engineering whitepaper for {activeService.title}
              </h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Review verified substrate conversion tables, membrane separation benchmarks, and emission offset calculations.
              </p>
              <button
                onClick={() => onNavigate('/research-insights')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-dtre-accent hover:underline pt-1"
              >
                <span>Browse Technical Library</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Contact Line */}
            <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-900 block">Direct Engineering Inquiries:</span>
              <p>Al Jubail Operations Hub: +966 13 766 4909</p>
              <p>Email: info@greengulfindustry.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Person Bio Modal */}
      <PersonModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </div>
  );
};
