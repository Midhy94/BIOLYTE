import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Briefcase, GraduationCap, Users, Heart } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const openings = [
    {
      id: "job-1",
      title: "Senior Surveyor - Logistics Capital Markets",
      location: "London (Argyll Street)",
      department: "Capital Markets",
      type: "Full-Time",
      description: "Leading acquisition and disposal advisory for prime big-box distribution assets across the UK, reporting directly to equity partners."
    },
    {
      id: "job-2",
      title: "Associate Director - Science & Technology",
      location: "Cambridge (Station Road)",
      department: "Science & Technology",
      type: "Full-Time",
      description: "Advising institutional developers and university colleges on life science laboratory leasing and Golden Triangle masterplanning."
    },
    {
      id: "job-3",
      title: "Senior Research Analyst - Market Intelligence",
      location: "London / Hybrid",
      department: "Research",
      type: "Full-Time",
      description: "Managing DTRE's proprietary transaction databook, authoring quarterly Big Box Logistics Reports, and client presentations."
    },
    {
      id: "job-4",
      title: "Graduate Surveyor (RICS APC Scheme)",
      location: "London / Manchester",
      department: "Rotational Program",
      type: "Graduate",
      description: "Structured commercial property pathway with dedicated partner mentorship, rotations across leasing, capital markets, and valuation."
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
            Careers at BIOLYTE
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-dtre-navy leading-tight">
            Build Your Career with <span className="text-dtre-accent">Clean Energy Leaders</span>.
          </h1>
          <p className="text-base sm:text-lg text-dtre-navy/70 font-light leading-relaxed">
            At BIOLYTE, our culture is entrepreneurial, engineering-driven, and collaborative. We provide our people with high-profile exposure to pioneering waste-to-value infrastructure, EPC project management, and genuine career acceleration.
          </p>
        </div>

        {/* Culture & Benefits Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
            <GraduationCap className="w-8 h-8 text-dtre-accent" />
            <h3 className="font-editorial font-bold text-dtre-navy text-base">APC & RICS Mentorship</h3>
            <p className="text-xs text-dtre-muted leading-relaxed font-light">
              Industry-leading RICS APC pass rates supported by weekly partner mentoring and structured mock interviews.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
            <Users className="w-8 h-8 text-dtre-accent" />
            <h3 className="font-editorial font-bold text-dtre-navy text-base">Direct Partner Access</h3>
            <p className="text-xs text-dtre-muted leading-relaxed font-light">
              Work alongside founding equity partners on benchmark transactions rather than being lost in corporate silos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
            <Briefcase className="w-8 h-8 text-dtre-accent" />
            <h3 className="font-editorial font-bold text-dtre-navy text-base">High-Impact Deals</h3>
            <p className="text-xs text-dtre-muted leading-relaxed font-light">
              Direct exposure to £100m+ portfolio transactions, European institutional funds, and sovereign investors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
            <Heart className="w-8 h-8 text-dtre-accent" />
            <h3 className="font-editorial font-bold text-dtre-navy text-base">Wellbeing & Benefits</h3>
            <p className="text-xs text-dtre-muted leading-relaxed font-light">
              Comprehensive private medical coverage, life assurance, agile working policy, and team social events.
            </p>
          </div>
        </div>

        {/* Current Vacancies */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-1">
                Open Positions
              </span>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-navy">
                Current Opportunities
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-dtre-muted">
              {openings.length} Active Vacancies
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {openings.map((job) => (
              <div
                key={job.id}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-dtre-accent">
                      {job.department}
                    </span>
                    <span className="text-xs text-dtre-muted">• {job.location}</span>
                    <span className="text-xs text-dtre-muted">• {job.type}</span>
                  </div>
                  <h3 className="text-lg font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs text-dtre-navy/70 font-light leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedJob(job.title)}
                  className="bg-slate-100 hover:bg-dtre-navy hover:text-white text-dtre-navy px-5 py-2.5 rounded-full text-xs font-semibold transition-all shrink-0 self-start md:self-center"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dtre-darker/80 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl border border-slate-200">
              <button
                onClick={() => {
                  setSelectedJob(null);
                  setApplied(false);
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg"
              >
                ✕
              </button>

              <h3 className="text-xl font-editorial font-bold text-dtre-navy mb-1">
                Apply for {selectedJob}
              </h3>
              <p className="text-xs text-dtre-muted mb-6">
                Submit your CV and contact information directly to DTRE Operations & HR.
              </p>

              {applied ? (
                <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Application Submitted!</span>
                  </div>
                  <p>
                    Thank you {applicantName}. Your CV has been sent to Natalie Barone (Head of Operations & Finance). We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-semibold text-dtre-navy block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-dtre-navy block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-dtre-navy block mb-1">LinkedIn Profile or CV Link</label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-dtre-navy block mb-1">Brief Introduction</label>
                    <textarea
                      rows={3}
                      placeholder="Summary of experience and background..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-dtre-navy hover:bg-dtre-accent text-white py-3 rounded-full text-xs font-semibold transition-colors mt-2"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
