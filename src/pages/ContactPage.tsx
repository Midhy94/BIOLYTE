import React, { useState } from 'react';
import { officesList } from '../data/siteData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Send, 
  Building2, 
  HelpCircle,
  FileCheck2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    office: 'Al Jubail (Headquarters)',
    sector: 'Biogas & Anaerobic Digestion',
    feedstockVolume: '< 50 tons/day',
    message: ''
  });

  const sectors = [
    'Biogas & Anaerobic Digestion',
    'Bio-Methane & Bio-CNG Upgrading',
    'Bio-Hydrogen Systems',
    'Bio-Methanol & Marine Fuels',
    'Eco-Pavements & Dust Suppression'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Cinematic Hero Header */}
      <section className="relative bg-[#0c1626] text-white pt-36 sm:pt-44 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80"
            alt="BIOLYTE Al Jubail Engineering Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626] via-[#0c1626]/80 to-transparent" />
          <div className="absolute -top-32 right-0 w-96 h-96 bg-dtre-accent/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Direct Engineering Consultation
            </span>
            <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white leading-[1.12] tracking-tight">
              Connect with our <span className="text-dtre-accent">EPC Engineering Team</span>.
            </h1>
            <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed pt-2">
              Whether you are evaluating organic agricultural feedstock, requiring pipeline-ready biomethane upgrading, or seeking zero-water dust control for industrial access roads, our engineers in Al Jubail are prepared to assist.
            </p>
          </div>

          {/* Quick Contact & Operating Hours Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-dtre-accent shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-white/50 block font-light">Direct Telephone (KSA)</span>
                <span className="text-sm font-semibold text-white">+966 13 766 4909</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-dtre-accent shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-white/50 block font-light">Technical Desk Email</span>
                <span className="text-sm font-semibold text-white">info@greengulfindustry.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-dtre-accent shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-white/50 block font-light">Kingdom Operating Hours</span>
                <span className="text-sm font-semibold text-white">Sun – Thu: 08:00 – 17:00 AST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Office Details Layout */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
                Project Proposal & Feasibility
              </span>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-navy">
                Request Engineering Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Submit your substrate volume or project requirements. Our certified EPC engineers will model preliminary outputs and respond within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  <h3 className="text-lg font-bold">Consultation Request Dispatched</h3>
                </div>
                <p className="text-sm font-light leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project inquiry regarding <strong>{formData.sector}</strong> has been assigned to the <strong>{formData.office}</strong> technical directorate. An engineer will follow up directly at {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-emerald-800 underline block pt-2"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Sector Pills */}
                <div>
                  <label className="text-xs font-semibold text-slate-900 block mb-2.5">
                    Target Technology Discipline *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sectors.map((sec) => {
                      const isSel = formData.sector === sec;
                      return (
                        <button
                          type="button"
                          key={sec}
                          onClick={() => setFormData({ ...formData, sector: sec })}
                          className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                            isSel
                              ? 'bg-dtre-accent text-white shadow-sm'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {sec}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eng. Tariq Al-Ghamdi"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-dtre-accent focus:ring-1 focus:ring-dtre-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="t.alghamdi@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-dtre-accent focus:ring-1 focus:ring-dtre-accent"
                    />
                  </div>
                </div>

                {/* Phone & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-dtre-accent focus:ring-1 focus:ring-dtre-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Eastern Agricultural Holdings"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-dtre-accent focus:ring-1 focus:ring-dtre-accent"
                    />
                  </div>
                </div>

                {/* Preferred Office */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-2">
                      Consultation Office
                    </label>
                    <select
                      value={formData.office}
                      onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-dtre-accent bg-white"
                    >
                      <option value="Al Jubail (Headquarters)">Al Jubail (Kingdom Headquarters)</option>
                      <option value="European Engineering Center">European Engineering Center (Verona)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-2">
                      Estimated Feedstock Volume
                    </label>
                    <select
                      value={formData.feedstockVolume}
                      onChange={(e) => setFormData({ ...formData, feedstockVolume: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-dtre-accent bg-white"
                    >
                      <option value="< 20 tons/day">Under 20 tons / day</option>
                      <option value="20 - 50 tons/day">20 – 50 tons / day</option>
                      <option value="50 - 150 tons/day">50 – 150 tons / day</option>
                      <option value="> 150 tons/day">Over 150 tons / day</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-slate-900 block mb-2">
                    Project Overview & Feedstock Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your organic waste stream, desired outputs (electricity, biomethane, hydrogen, or dust suppression pavement), and site location..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-dtre-accent focus:ring-1 focus:ring-dtre-accent"
                  />
                </div>

                {/* NDA & Submission */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Commercial data protected under mutual NDA</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-dtre-accent hover:bg-dtre-accentHover text-white px-8 py-3.5 rounded-full font-semibold text-xs tracking-wide transition-all shadow-md hover:shadow-dtre-accent/25 flex items-center justify-center gap-2"
                  >
                    <span>Submit Project Details</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Strategic Hubs & Operational Standards */}
          <div className="lg:col-span-5 space-y-6">
            {officesList.map((office) => {
              const isHQ = office.id === 'jubail';
              return (
                <div
                  key={office.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {isHQ ? 'KINGDOM HEADQUARTERS' : 'EUROPEAN R&D CENTER'}
                    </span>
                    <MapPin className="w-4 h-4 text-dtre-accent" />
                  </div>

                  <div>
                    <h3 className="text-xl font-editorial font-bold text-dtre-navy mb-2">
                      {office.city}
                    </h3>
                    <div className="text-xs text-slate-600 space-y-1 font-light leading-relaxed">
                      {office.addressLines.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-2 text-slate-800 hover:text-dtre-accent font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-dtre-accent" />
                      <span>{office.phone}</span>
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-slate-500 hover:text-dtre-accent transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-dtre-accent" />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Quality & Safety Accreditations */}
            <div className="bg-[#0c1626] text-white rounded-3xl p-8 space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-dtre-accent">
                <FileCheck2 className="w-4 h-4" />
                <span>EPC Quality Assurance</span>
              </div>
              <h4 className="text-base font-editorial font-bold text-white">
                Certified European Process & Safety Compliance
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                All BIOLYTE digester tanks, biological scrubbers, and thermal conversion units conform to European ATEX explosion-proof safety codes and Saudi industrial environmental regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
