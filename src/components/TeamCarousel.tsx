import React, { useState } from 'react';
import { teamMembers } from '../data/teamData';
import { Person } from '../types';
import { PersonModal } from './PersonModal';
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamCarouselProps {
  onNavigate: (path: string) => void;
}

export const TeamCarousel: React.FC<TeamCarouselProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'exec' | 'leadership'>('exec');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  // Filter members based on category
  const execMembers = teamMembers.filter((m) =>
    m.categories.some((c) => c.toLowerCase().includes('equity') || c.toLowerCase().includes('exec')) ||
    ['keith-dowley', 'david-turner', 'natalie-barone', 'ben-sleath', 'jake-huntley', 'mark-webster'].includes(m.slug)
  );

  const leadershipMembers = teamMembers.filter((m) =>
    m.categories.some((c) => c.toLowerCase().includes('management') || c.toLowerCase().includes('leadership')) ||
    ['natalie-barone', 'harry-glatman', 'tom-sarjant', 'richard-harman', 'matt-smith', 'claudia-harley', 'dan-tiernan'].includes(m.slug)
  );

  const displayList = activeTab === 'exec' ? execMembers : leadershipMembers;

  const scrollContainer = (direction: 'left' | 'right') => {
    const el = document.getElementById('team-scroll-container');
    if (el) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200/60 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
                People
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-semibold text-dtre-navy leading-[1.2]">
                We are <span className="text-dtre-accent">only as strong</span> as our people, their experiences and their network.
              </h2>
              <p className="text-base text-dtre-navy/70 max-w-xl font-light">
                We are team-driven and individual-focused, with a belief in hiring the best talent and enabling them to achieve their potential.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
              {/* Tab Selector */}
              <div className="inline-flex p-1 rounded-full bg-slate-200/70 border border-slate-300/40 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('exec')}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeTab === 'exec'
                      ? 'bg-dtre-navy text-white shadow-sm'
                      : 'text-dtre-navy/70 hover:text-dtre-navy'
                  }`}
                >
                  Executive Committee
                </button>
                <button
                  onClick={() => setActiveTab('leadership')}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeTab === 'leadership'
                      ? 'bg-dtre-navy text-white shadow-sm'
                      : 'text-dtre-navy/70 hover:text-dtre-navy'
                  }`}
                >
                  Leadership Team
                </button>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollContainer('left')}
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-dtre-navy transition-colors shadow-sm"
                  aria-label="Scroll left"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollContainer('right')}
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-dtre-navy transition-colors shadow-sm"
                  aria-label="Scroll right"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div
            id="team-scroll-container"
            className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
          >
            {displayList.map((person) => (
              <motion.div
                key={person.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPerson(person)}
                className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer snap-start flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with hover zoom */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                    <img
                      src={person.image || 'https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/KeithDowley-1.jpg'}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dtre-darker/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="w-9 h-9 rounded-full bg-white text-dtre-navy flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-xs text-dtre-muted font-medium whitespace-pre-line leading-relaxed line-clamp-2">
                      {person.jobTitle}
                    </p>
                  </div>
                </div>

                {/* Quick Contact Footer */}
                <div 
                  className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={`mailto:${person.email}`}
                    className="text-dtre-muted hover:text-dtre-accent flex items-center gap-1.5 transition-colors"
                    title={`Email ${person.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact</span>
                  </a>

                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dtre-muted hover:text-dtre-accent transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Bottom Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/people')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-dtre-navy hover:text-dtre-accent transition-colors"
            >
              <span>View the full DTRE team directory</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Person Modal */}
      <PersonModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </>
  );
};
