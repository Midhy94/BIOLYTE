import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  MapPin, 
  Clock, 
  Send, 
  X, 
  ArrowUpRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface JobOpening {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  description: string;
  requirements: string[];
}

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  // Lock body scroll and dismiss on Escape
  useEffect(() => {
    if (!selectedJob) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedJob(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedJob]);

  const openings: JobOpening[] = [
    {
      id: "job-1",
      title: "Senior Biological Process Engineer - Anaerobic Digestion",
      location: "Al Jubail (Headquarters) / Eastern Province",
      department: "Process Engineering",
      type: "Full-Time",
      description: "Leading biochemical process modeling, substrate optimization, and enzymatic digester performance for large-scale agricultural and agro-industrial waste projects.",
      requirements: [
        "M.Sc. or B.Sc. in Chemical, Biochemical, or Environmental Engineering",
        "5+ years direct experience in industrial anaerobic digestion and biogas plants",
        "Expertise in biochemical methane potential (BMP) testing and biological kinetics",
        "Fluency in English; Arabic is a strong advantage"
      ]
    },
    {
      id: "job-2",
      title: "Lead EPC Project Manager - Biomethane & Gas Upgrading",
      location: "Al Jubail Industrial City, KSA",
      department: "EPC Project Delivery",
      type: "Full-Time",
      description: "Managing turnkey engineering, procurement, and on-site construction of membrane gas upgrading plants, high-pressure compression units, and Bio-CNG refueling stations.",
      requirements: [
        "B.Sc. in Mechanical or Chemical Engineering with PMP certification",
        "8+ years EPC experience in industrial gas, petrochemical, or energy infrastructure",
        "Demonstrated track record of delivering turnkey plants on schedule and within budget",
        "Thorough understanding of Saudi Aramco / Royal Commission engineering standards"
      ]
    },
    {
      id: "job-3",
      title: "Thermal Gasification & Bio-Hydrogen Systems Specialist",
      location: "European Engineering Center (Verona) / Jubail",
      department: "Technology & R&D",
      type: "Full-Time",
      description: "Driving the design and optimization of decentralized thermal biomass conversion systems, achieving zero-tar hydrogen yields and high-purity synthesis.",
      requirements: [
        "Ph.D. or Master's in Thermal Engineering, Chemical Physics, or Energy Systems",
        "Hands-on experience with high-temperature non-combustion thermal conversion",
        "Experience in hydrogen separation, fuel-cell compatibility, and syngas cleaning",
        "Willingness to travel between European R&D facilities and Saudi project sites"
      ]
    },
    {
      id: "job-4",
      title: "Environmental Civil Engineer - Soil Stabilization & Eco-Pavements",
      location: "Riyadh / Al Jubail",
      department: "Environmental Infrastructure",
      type: "Full-Time",
      description: "Overseeing field testing, soil binder application, and heavy-duty dust suppression installations across industrial corridors, mining access roads, and architectural sites.",
      requirements: [
        "Degree in Civil or Geotechnical Engineering",
        "3+ years experience in pavement design, soil compaction, or dust suppression",
        "Familiarity with GCC soil characteristics and climatic conditions",
        "Valid Saudi driving license"
      ]
    },
    {
      id: "job-5",
      title: "Instrumentation & SCADA Automation Engineer",
      location: "Al Jubail Cluster, KSA",
      department: "Operations & Automation",
      type: "Full-Time",
      description: "Configuring and maintaining plant-wide SCADA monitoring, gas telemetry, safety interlocks, and remote diagnostic systems across operational digester plants.",
      requirements: [
        "Degree in Electrical, Electronics, or Automation Engineering",
        "4+ years experience with Siemens / Allen Bradley PLC and SCADA architecture",
        "Familiarity with ATEX explosion-proof hazardous area instrumentation",
        "Strong troubleshooting and remote network diagnostics skills"
      ]
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  const culturePillars = [
    {
      icon: GraduationCap,
      title: "European Technology Transfer",
      desc: "Work directly with pioneering European environmental engineers, gaining hands-on expertise in advanced membrane upgrading, biological digesters, and zero-tar hydrogen."
    },
    {
      icon: Zap,
      title: "Saudi Vision 2030 Impact",
      desc: "Directly drive the Kingdom's National Renewable Energy Program and Circular Economy goals, transforming millions of tons of waste into clean gaseous energy."
    },
    {
      icon: Briefcase,
      title: "Turnkey Megaproject Exposure",
      desc: "Full lifecycle responsibility—from initial biochemical feedstock modeling and Front-End Engineering Design (FEED) to turnkey construction and long-term O&M."
    },
    {
      icon: ShieldCheck,
      title: "World-Class HSE Governance",
      desc: "Uncompromising commitment to safety and environmental excellence, operating to strict European CE/ATEX and Saudi industrial standards."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Cinematic Hero Header */}
      <section className="relative bg-[#0c1626] text-white pt-36 sm:pt-44 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80"
            alt="BIOLYTE Careers and Engineering Directorate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626] via-[#0c1626]/80 to-transparent" />
          <div className="absolute -top-32 right-0 w-96 h-96 bg-dtre-accent/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Engineering Careers & Talent Directorate
            </span>
            <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white leading-[1.12] tracking-tight">
              Build the future of <span className="text-dtre-accent">industrial clean energy</span>.
            </h1>
            <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed pt-2">
              Join European process engineers, thermal conversion scientists, and EPC project managers executing benchmark decarbonization projects across Saudi Arabia and the Middle East.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80">
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">Al Jubail</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Primary Engineering HQ</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">Verona, IT</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Technology & R&D Hub</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-accent">Vision 2030</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Green Transition Careers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">Turnkey EPC</div>
              <div className="text-xs text-white/60 font-light mt-0.5">End-to-End Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Engineering Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
            Why Join BIOLYTE
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-dtre-navy">
            Engineering Excellence in a Mission-Critical Industry
          </h2>
          <p className="text-base text-slate-600 font-light leading-relaxed">
            We provide a high-caliber technical environment where engineers solve tangible environmental challenges with real infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
          {culturePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-dtre-accent/40 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-dtre-accent group-hover:scale-110 group-hover:bg-dtre-accent group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-editorial font-bold text-dtre-navy text-lg leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Current Openings */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-1">
                Active Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-navy">
                Open Engineering & EPC Positions
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {openings.length} Positions Available
            </span>
          </div>

          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.id}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-dtre-accent/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2 md:max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-dtre-accent/10 text-dtre-accent">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-slate-100 text-slate-700">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-dtre-accent" />
                    <span>{job.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pt-1">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setApplied(false);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-slate-900 hover:bg-dtre-accent text-white transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl border border-slate-200 relative my-8"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-dtre-accent px-3 py-1 rounded-full bg-dtre-accent/10 inline-block">
                  {selectedJob.department} • {selectedJob.location}
                </span>
                <h3 className="text-2xl font-editorial font-bold text-dtre-navy">
                  {selectedJob.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {selectedJob.description}
                </p>

                {/* Requirements */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                    Candidate Profile & Requirements:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    {selectedJob.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-dtre-accent shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {applied ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Application Submitted Successfully</span>
                  </div>
                  <p className="text-xs font-light leading-relaxed">
                    Thank you, {applicantName}. Your application for {selectedJob.title} has been forwarded to our HR & Engineering Talent Directorate in Al Jubail. If your profile matches our criteria, our recruitment team will reach out directly.
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-xs font-semibold text-emerald-800 underline pt-2"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Submit Candidate Profile
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Eng. Abdullah Al-Harbi"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-dtre-accent"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1.5">
                        Corporate / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-dtre-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-1.5">
                      Phone Number & Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX (Al Jubail, Riyadh, etc.)"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-dtre-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-1.5">
                      Professional Background / Resume Link *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Paste your LinkedIn URL, online portfolio/CV link, or summarize your relevant process engineering and EPC experience..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-dtre-accent"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="bg-dtre-accent hover:bg-dtre-accentHover text-white px-7 py-3 rounded-full font-semibold text-xs transition-colors flex items-center gap-2"
                    >
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
