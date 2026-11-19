import React, { useState } from 'react';
import { researchReports } from '../data/researchData';
import { ResearchItem } from '../types';
import { ReportModal } from './ReportModal';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResearchSectionProps {
  onNavigate: (path: string) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onNavigate }) => {
  const [activeReport, setActiveReport] = useState<ResearchItem | null>(null);

  return (
    <>
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
                Green Technology & Engineering
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-semibold text-dtre-navy leading-[1.2]">
                <span className="text-dtre-accent">Technology-led</span> and outcome-oriented.
              </h2>
              <p className="text-base sm:text-lg text-dtre-navy/70 max-w-2xl font-light leading-relaxed">
                Clean energy transition demands proven engineering. We combine validated European thermochemical and anaerobic digestion technologies with deep regional feedstock intelligence to deliver sustainable, bankable infrastructure.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <button
                onClick={() => onNavigate('/research-insights')}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-dtre-navy hover:text-white text-dtre-navy px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 group"
              >
                <span>View Technical Intelligence</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchReports.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden hover:shadow-xl hover:border-dtre-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-xs uppercase tracking-wider text-dtre-accent font-semibold block">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-dtre-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-dtre-navy/70 line-clamp-3 leading-relaxed font-light">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveReport(item)}
                    className="w-full py-2.5 px-4 rounded-full border border-slate-200 hover:border-dtre-accent hover:bg-white text-xs font-semibold text-dtre-navy flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-dtre-accent" />
                    <span>Read Report</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Modal */}
      <ReportModal
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />
    </>
  );
};
