import React from 'react';
import { Leaf, HeartHandshake, Shield, ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const milestones = [
    {
      year: "Origins",
      title: "European Environmental Engineering Foundation",
      description: "Pioneering specialized anaerobic digestion, biomethane upgrading, and zero-tar thermal gasification technologies across leading European industrial and agricultural facilities."
    },
    {
      year: "Expansion",
      title: "Green Gulf Industry Established in Saudi Arabia",
      description: "Establishing operational headquarters in Al Jubail Industrial City, aligning European engineering standards with the environmental goals of Saudi Vision 2030."
    },
    {
      year: "Commercialization",
      title: "Biogas & Biomethane EPC Deployment",
      description: "Designing, building, and managing turnkey agricultural and municipal digester plants, producing pipeline-grade biomethane and decentralized electricity."
    },
    {
      year: "Innovation",
      title: "Bio-Hydrogen & Zero-Water Eco-Pavements",
      description: "Scaling decentralized thermal waste-to-hydrogen systems yielding 50 kg H₂/ton biomass, and deploying water-free dust-suppressing natural pavements across GCC infrastructure."
    },
    {
      year: "Vision 2030",
      title: "Regional Decarbonization Leadership",
      description: "Leading the regional transition toward closed-loop circular economy models, converting millions of tons of organic waste into valuable clean energy assets."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-dtre-dark text-white pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80"
            alt="BIOLYTE Clean Energy Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dtre-darker/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-3">
            About BIOLYTE
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white max-w-3xl leading-tight">
            Pioneering the green transition through <span className="text-dtre-accent">European engineering</span> in Saudi Arabia.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl font-light mt-6 leading-relaxed">
            BIOLYTE (Green Gulf Industry Limited) is a specialized green engineering company bringing proven European experience and advanced technologies into the Kingdom of Saudi Arabia. We build and manage industrial infrastructure that transforms organic waste into sustainable energy.
          </p>
        </div>
      </div>

      {/* Main Story Section */}
      <div id="who-we-are" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Who We Are & What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-dtre-navy leading-snug">
              Turnkey EPC contractors building and managing industrial biogas and clean energy infrastructure.
            </h2>
            <div className="h-0.5 w-16 bg-dtre-accent my-4" />
            <p className="text-base sm:text-lg text-dtre-navy/80 font-light leading-relaxed">
              We operate as specialized Engineering, Procurement, and Construction (EPC) contractors dedicated to biological and thermal waste-to-energy technologies. Our systems treat agricultural waste (manure, slurry, crop residues), food processing scrap, and municipal organic sludge to generate clean gaseous fuels, baseload electricity, and high-value bio-fertilizers.
            </p>
            <p className="text-sm text-dtre-navy/70 leading-relaxed font-light">
              Beyond power generation, our environmental product portfolio includes patented eco-friendly architectural binders for dust-suppressing pavements—eliminating up to 100% of water consumption across arid and industrial access corridors.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={() => onNavigate('/services')}
                className="bg-dtre-navy hover:bg-dtre-accent text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-wide transition-colors"
              >
                Explore Technologies
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="text-xs font-semibold text-dtre-navy hover:text-dtre-accent flex items-center gap-1 transition-colors"
              >
                <span>Contact Al Jubail Office</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80"
                alt="BIOLYTE Industrial Renewable Infrastructure"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-dtre-navy text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs border border-white/10">
              <div className="text-3xl font-editorial font-bold text-dtre-accent mb-1">
                100%
              </div>
              <div className="text-xs text-white/80 font-light leading-snug">
                Water elimination achieved across our eco-friendly dust suppression pavement deployments.
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div id="mission" className="mt-28 pt-20 border-t border-slate-200">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Our Mission & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-dtre-navy">
              Bringing Updated Technology to Recycle All Waste Streams
            </h2>
            <p className="text-sm text-dtre-navy/70 font-light leading-relaxed">
              Our mission is to continuously introduce updated European technologies and environmental standards to recycle enormous volumes of waste—from organic substrates to e-waste and industrial by-products—making recycling easier, cleaner, and commercially valuable.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dtre-navy text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-md z-10">
                    <span className="w-2 h-2 rounded-full bg-dtre-accent" />
                  </div>
                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8">
                    <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl hover:border-dtre-accent/40 transition-colors">
                      <span className="text-xs font-mono font-bold text-dtre-accent uppercase tracking-wider block mb-1">
                        {m.year}
                      </span>
                      <h3 className="text-lg font-editorial font-bold text-dtre-navy mb-2">
                        {m.title}
                      </h3>
                      <p className="text-xs text-dtre-navy/70 leading-relaxed font-light">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Circular Economy Section */}
        <div id="circular-economy" className="mt-28 pt-20 border-t border-slate-200">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Circular Economy Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-dtre-navy">
              Extending the Lifecycle of Resources
            </h2>
            <p className="text-sm text-dtre-navy/70 font-light leading-relaxed">
              In a world increasingly in search of sustainability and environmental protection, we make our contribution with energy that does not run out, does not pollute, and comes directly from natural cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-dtre-navy">
                Zero Waste & Closed Loop
              </h3>
              <p className="text-xs text-dtre-navy/70 leading-relaxed font-light">
                Reducing waste to an absolute minimum. When biological resources complete their initial use, their molecules are captured to produce renewable methane, hydrogen, and clean organic soil nutrients.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-dtre-accent flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-dtre-navy">
                Water & Climate Stewardship
              </h3>
              <p className="text-xs text-dtre-navy/70 leading-relaxed font-light">
                Protecting vital desert water reserves by replacing continuous water truck spraying with permanent, non-toxic eco-pavement binders that resist extreme heat and heavy vehicle traffic.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-editorial font-bold text-dtre-navy">
                European Standards & Saudi Vision 2030
              </h3>
              <p className="text-xs text-dtre-navy/70 leading-relaxed font-light">
                Engineering excellence aligned with European safety and emission directives, executed locally from Al Jubail to advance the ambitious sustainability targets of the Kingdom of Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
