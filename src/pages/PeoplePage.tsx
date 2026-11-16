import React, { useState, useMemo } from 'react';
import { teamMembers } from '../data/teamData';
import { Person } from '../types';
import { PersonModal } from '../components/PersonModal';
import { Search, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const PeoplePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const categories = [
    'All',
    'Equity Partners',
    'Industrial & Logistics Capital Markets',
    'Science & Technology',
    'Alternative Capital Markets',
    'Operations & Finance'
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
        m.categories.some((c) => c.toLowerCase().includes(selectedCategory.toLowerCase()));

      return matchSearch && matchCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
            Our People
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-dtre-navy leading-tight">
            Our team is strategic and collaborative, promising a service{' '}
            <span className="text-dtre-accent">that is tenacious and honest</span>.
          </h1>
          <p className="text-base sm:text-lg text-dtre-navy/70 font-light">
            Meet the directors, engineers, and project specialists driving sustainable energy infrastructure and circular economy solutions forward.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 mb-12 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all ${
                    selectedCategory === cat
                      ? 'bg-dtre-navy text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-dtre-navy'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-dtre-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, role, sector..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent transition-all"
              />
            </div>
          </div>

          <div className="pt-2 text-xs text-dtre-muted">
            Displaying <span className="font-semibold text-dtre-navy">{filteredMembers.length}</span> partners & advisers
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMembers.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedPerson(person)}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={person.image || 'https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/KeithDowley-1.jpg'}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dtre-darker/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-white text-dtre-navy flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-xs text-dtre-muted font-medium whitespace-pre-line leading-relaxed line-clamp-2">
                    {person.jobTitle}
                  </p>
                </div>
              </div>

              <div 
                className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={`mailto:${person.email}`}
                  className="text-dtre-muted hover:text-dtre-accent flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>

                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-dtre-muted hover:text-dtre-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PersonModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </div>
  );
};
