import React, { useState } from 'react';
import { officesList } from '../data/siteData';
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    office: 'Al Jubail (Headquarters)',
    sector: 'Biogas & Anaerobic Digestion',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
            Contact & Consultation
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-dtre-navy leading-tight">
            Connect with our <span className="text-dtre-accent">EPC Engineering Team</span>.
          </h1>
          <p className="text-base sm:text-lg text-dtre-navy/70 font-light leading-relaxed">
            Whether you are evaluating agricultural feedstock for an anaerobic digester, requiring biomethane gas upgrading, or seeking zero-water dust control for desert infrastructure, our specialists in Al Jubail are ready to advise.
          </p>
        </div>

        {/* 2 Offices Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {officesList.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-editorial font-bold text-dtre-navy">
                    {office.city}
                  </h3>
                  <MapPin className="w-5 h-5 text-dtre-accent" />
                </div>
                <div className="text-xs text-dtre-navy/80 space-y-1 mb-6 font-light leading-relaxed">
                  {office.addressLines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <a
                  href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 text-dtre-navy hover:text-dtre-accent font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-dtre-accent" />
                  <span>{office.phone}</span>
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 text-dtre-muted hover:text-dtre-navy transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-dtre-muted" />
                  <span>{office.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours & Quick Details Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-dtre-accent/10 text-dtre-accent flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-dtre-navy uppercase tracking-wider">Business Operating Hours</h4>
              <p className="text-xs text-dtre-muted mt-0.5 font-light">
                Monday – Thursday: 09:00 am – 05:30 pm | Saturday: 09:00 am – 12:00 pm | Friday: Closed
              </p>
            </div>
          </div>
          <div className="text-xs text-dtre-muted">
            Direct Line: <span className="font-semibold text-dtre-navy">+966 13 766 4909</span>
          </div>
        </div>

        {/* Interactive Inquiry Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm max-w-4xl mx-auto">
          <div className="mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-navy">
              Request Technical Consultation or Project Proposal
            </h2>
            <p className="text-xs sm:text-sm text-dtre-muted font-light">
              Submit your organic feedstock details, plant parameters, or environmental pavement requirements. Our EPC engineers will respond within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                <h3 className="text-lg font-bold">Consultation Request Received</h3>
              </div>
              <p className="text-sm font-light leading-relaxed">
                Thank you, {formData.name}. Your project enquiry regarding {formData.sector} has been dispatched to the {formData.office} engineering team. A senior project director will contact you directly within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-emerald-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-dtre-navy block mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Mohammed Al-Otaibi"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-dtre-navy block mb-2">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-dtre-navy block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-dtre-navy block mb-2">Company / Entity</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Agricultural Development Holding"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-dtre-navy block mb-2">Regional Office</label>
                  <select
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent bg-white cursor-pointer"
                  >
                    <option value="Al Jubail (Headquarters)">Al Jubail, Kingdom of Saudi Arabia</option>
                    <option value="European Engineering Center">European Technical Center (Italy / EU)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-dtre-navy block mb-2">Technology & Project Scope</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent bg-white cursor-pointer"
                  >
                    <option value="Biogas & Anaerobic Digestion">Biogas & Anaerobic Digestion Plants</option>
                    <option value="Bio-Methane & Bio-CNG Upgrading">Bio-Methane & Bio-CNG Upgrading</option>
                    <option value="Bio-Hydrogen Production">Bio-Hydrogen Thermal Conversion (50 kg/ton)</option>
                    <option value="Bio-Methanol & Synthetic Fuels">Bio-Methanol & Maritime Decarbonization</option>
                    <option value="Cogeneration & CHP Systems">Cogeneration & Baseload Power (CHP)</option>
                    <option value="Natural Pavements & Dust Suppression">Eco-Pavements & 100% Water-Free Dust Control</option>
                    <option value="Turnkey EPC Feasibility">General Turnkey EPC Project Modeling</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-dtre-navy block mb-2">Project Brief / Feedstock Volume</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your estimated daily waste tonnage, current disposal methods, energy targets, or infrastructure dust control challenges..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-dtre-muted">
                  * Required fields
                </span>
                <button
                  type="submit"
                  className="bg-dtre-navy hover:bg-dtre-accent text-white px-8 py-3.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-2 shadow-md"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
