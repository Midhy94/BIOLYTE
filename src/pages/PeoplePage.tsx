import React, { useState, useMemo } from 'react';
import { teamMembers } from '../data/teamData';
import { Person } from '../types';
import { PersonModal } from '../components/PersonModal';
import { Search, Mail, Linkedin, ArrowUpRight, ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const PeoplePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const categories = [
    'All',
    'Executive Leadership',
    'Process & Chemical Engineering',
    'Mechanical & EPC Delivery',
    'Environmental Infrastructure',
    'Project Management & Operations'
  ];

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((m) => {
      const matchSearch =
        searchTerm === '' ||
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.bio.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCat =
        selectedCategory === 'All' ||
        m.categories.some((c) => c.toLowerCase().includes(selectedCategory.toLowerCase())) ||
        (selectedCategory === 'Executive Leadership' && (m.categories.includes('Equity Partners') || m.categories.includes('Management Board')));

      return matchSearch && matchCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Cinematic Hero Section */}
      <section className="relative bg-[#0c1626] text-white pt-36 sm:pt-44 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80"
            alt="BIOLYTE Executive Engineering Committee"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626] via-[#0c1626]/80 to-transparent" />
          <div className="absolute -top-32 right-0 w-96 h-96 bg-dtre-accent/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Leadership & Engineering Directorate
            </span>
            <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white leading-[1.12] tracking-tight">
              European rigor, grounded in <span className="text-dtre-accent">Saudi Arabian execution</span>.
            </h1>
            <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed pt-2">
              Meet the directors, process engineers, and turnkey EPC specialists driving industrial anaerobic digestion, biomethane upgrading, and sustainable infrastructure across the Kingdom.
            </p>
          </div>

          {/* Quick Summary Metrics */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80">
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">40+ Yrs</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Cumulative EPC Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">Al Jubail</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Field Project Office</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-accent">CE & ATEX</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Certified Safety Compliance</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">24/7 O&M</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Plant Monitoring Desk</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 mb-12 space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-150 ${
                      isSelected
                        ? 'bg-dtre-accent text-white shadow-md shadow-dtre-accent/20'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search directors, engineers, disciplines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-dtre-accent focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Displaying <strong className="text-slate-900 font-semibold">{filteredMembers.length}</strong> senior project directors & technical specialists
            </span>
            <span className="hidden sm:inline-block font-light">
              Click any profile to view full engineering background
            </span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMembers.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.02 }}
              onClick={() => setSelectedPerson(person)}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-dtre-accent/40 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Portrait Container */}
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={person.image || 'https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/KeithDowley-1.jpg'}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:bg-dtre-accent group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-dtre-accent block">
                    BIOLYTE DIRECTORATE
                  </span>
                  <h3 className="text-lg font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors leading-snug">
                    {person.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-light whitespace-pre-line leading-relaxed line-clamp-2">
                    {person.jobTitle}
                  </p>
                </div>
              </div>

              {/* Bottom Communication Bar */}
              <div 
                className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={`mailto:${person.email}`}
                  className="text-slate-500 hover:text-dtre-accent flex items-center gap-1.5 transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-dtre-accent" />
                  <span>Direct Email</span>
                </a>

                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-slate-50 hover:bg-dtre-accent hover:text-white text-slate-500 flex items-center justify-center transition-all"
                    title={`${person.name} on LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
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
