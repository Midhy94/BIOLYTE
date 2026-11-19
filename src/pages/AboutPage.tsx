import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Leaf, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowRight, 
  Building2, 
  Droplets, 
  Globe2, 
  Cpu, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  const milestones = [
    {
      year: "Origins",
      badge: "European R&D",
      title: "European Environmental Engineering Foundation",
      description: "Pioneering specialized anaerobic digestion, biomethane upgrading, and zero-tar thermal gasification technologies across leading European industrial and agricultural facilities."
    },
    {
      year: "Expansion",
      badge: "KSA Establishment",
      title: "Green Gulf Industry Established in Saudi Arabia",
      description: "Establishing operational headquarters in Al Jubail Industrial City, aligning European engineering standards with the environmental goals of Saudi Vision 2030."
    },
    {
      year: "Commercialization",
      badge: "Turnkey EPC",
      title: "Biogas & Biomethane EPC Deployment",
      description: "Designing, building, and managing turnkey agricultural and municipal digester plants, producing pipeline-grade biomethane and decentralized electricity."
    },
    {
      year: "Innovation",
      badge: "Hydrogen & Water",
      title: "Bio-Hydrogen & Zero-Water Eco-Pavements",
      description: "Scaling decentralized thermal waste-to-hydrogen systems yielding 50 kg H₂/ton biomass, and deploying water-free dust-suppressing natural pavements across GCC infrastructure."
    },
    {
      year: "Vision 2030",
      badge: "Circular Economy",
      title: "Regional Decarbonization Leadership",
      description: "Leading the regional transition toward closed-loop circular economy models, converting millions of tons of organic waste into valuable clean energy assets."
    }
  ];

  const pillars = [
    {
      icon: Leaf,
      title: "Closed-Loop Circular Economy",
      tagline: "Valuing Every Molecule",
      desc: "Eliminating waste by converting biological substrates into renewable methane, hydrogen, and rich organic fertilizer. Nothing is discarded; every carbon and nutrient atom remains productive.",
      stat: "100%",
      statLabel: "Waste Stream Diversion"
    },
    {
      icon: Droplets,
      title: "Arid Water Preservation",
      tagline: "Zero-Water Soil Stabilization",
      desc: "Protecting vital desert groundwater reserves by replacing continuous water truck spraying with permanent, non-toxic eco-pavement binders that withstand extreme GCC heat and heavy industrial haulers.",
      stat: "100%",
      statLabel: "Water Consumption Eliminated"
    },
    {
      icon: ShieldCheck,
      title: "European Standards & Vision 2030",
      tagline: "Certified Process Integrity",
      desc: "Full European CE, ATEX explosion-proof compliance, and rigorous biological safety protocols executed by experienced engineers based permanently in Al Jubail Industrial City.",
      stat: "Zero",
      statLabel: "Tar & Toxic By-products"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Cinematic Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative bg-[#0c1626] text-white pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden"
      >
        <motion.div 
          style={{ y: heroImageY, scale: heroImageScale }}
          className="absolute inset-x-0 -top-6 -bottom-12 z-0 will-change-transform pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80"
            alt="BIOLYTE Industrial Clean Energy Facilities"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626] via-[#0c1626]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1626] via-[#0c1626]/70 to-transparent" />
          <div className="absolute -top-32 right-0 w-96 h-96 bg-dtre-accent/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              About BIOLYTE & Green Gulf Industry
            </span>
            <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white leading-[1.12] tracking-tight">
              Pioneering the green transition through <span className="text-dtre-accent">European engineering</span> in Saudi Arabia.
            </h1>
            <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed pt-2">
              BIOLYTE brings proven European environmental engineering and waste-to-energy technologies into the Kingdom of Saudi Arabia. We design, construct, and operate industrial infrastructure that transforms organic waste streams into clean gaseous fuels and baseload power.
            </p>
          </div>

          {/* Quick Pillars Overview */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80">
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">Al Jubail</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Kingdom Headquarters</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">Verona, IT</div>
              <div className="text-xs text-white/60 font-light mt-0.5">European R&D Center</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-accent">Vision 2030</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Circular Economy Alignment</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">Turnkey EPC</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Design, Build & Operate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Corporate Story & Visual Split */}
      <section id="who-we-are" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Who We Are & Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-dtre-navy leading-snug">
              Turnkey EPC contractors advancing sustainable energy infrastructure across the Middle East.
            </h2>
            <div className="h-0.5 w-16 bg-dtre-accent" />
            <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed">
              We operate as specialized Engineering, Procurement, and Construction (EPC) contractors dedicated to biological and thermal waste-to-energy technologies. Our systems treat agricultural waste (manure, slurry, crop residues), food processing scrap, and municipal organic sludge to generate clean gaseous fuels, baseload electricity, and high-value bio-fertilizers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              Beyond power generation, our environmental product portfolio includes patented eco-friendly architectural binders for dust-suppressing pavements—eliminating up to 100% of water consumption across arid and industrial access corridors.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/services')}
                className="bg-slate-900 hover:bg-dtre-accent text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wide transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Explore Technologies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="text-xs font-semibold text-slate-900 hover:text-dtre-accent flex items-center gap-1.5 transition-colors px-4 py-3"
              >
                <span>Consult Al Jubail Office</span>
                <ArrowUpRight className="w-4 h-4 text-dtre-accent" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80"
                alt="BIOLYTE Industrial Renewable Infrastructure"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Elevated Metric Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#0c1626] text-white p-6 rounded-2xl shadow-2xl hidden sm:block max-w-xs border border-white/10">
              <div className="text-3xl font-editorial font-bold text-dtre-accent mb-1">
                100%
              </div>
              <div className="text-xs text-white/80 font-light leading-snug">
                Water elimination achieved across our eco-friendly dust suppression pavement deployments.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Pillars */}
      <section id="circular-economy" className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Core Philosophy & Environmental Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-dtre-navy">
              Extending the Lifecycle of Natural Resources
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              In a world seeking sustainability and environmental resilience, we make our contribution with energy that does not run out, does not pollute, and originates directly from biological cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-dtre-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-dtre-accent group-hover:scale-110 group-hover:bg-dtre-accent group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-dtre-accent font-semibold block mb-1">
                        {pillar.tagline}
                      </span>
                      <h3 className="text-xl font-editorial font-bold text-dtre-navy">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-editorial font-bold text-slate-900">
                        {pillar.stat}
                      </span>
                      <span className="text-[11px] text-slate-500 block font-light">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Milestone Timeline */}
      <section id="mission" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
            Our Journey & Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-dtre-navy">
            Building Industrial Decarbonization Capacity
          </h2>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            From initial research and pilot trials in Europe to full-scale EPC contracting in Al Jubail Industrial City.
          </p>
        </div>

        <div className="space-y-6">
          {milestones.map((m, idx) => (
            <div
              key={m.year}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-dtre-accent/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="sm:w-1/4 shrink-0 space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-dtre-accent font-bold px-2.5 py-1 rounded-full bg-dtre-accent/10 inline-block mb-1">
                  {m.badge}
                </span>
                <div className="text-2xl font-editorial font-bold text-slate-900">
                  {m.year}
                </div>
              </div>

              <div className="sm:w-3/4 space-y-1">
                <h3 className="text-lg font-bold text-dtre-navy">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
