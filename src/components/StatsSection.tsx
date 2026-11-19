import React from 'react';
import { keyStatistics } from '../data/siteData';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface StatsSectionProps {
  onNavigate: (path: string) => void;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about-dtre" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Text Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-3">
              Kingdom of Saudi Arabia & European Standards
            </span>
            <div className="h-0.5 w-12 bg-dtre-navy/20" />
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-editorial font-semibold text-dtre-navy leading-[1.2]">
              Driving sustainable industrial transition and energy independence through{' '}
              <span className="text-dtre-accent">technical precision</span>.
            </h2>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-dtre-navy/20 hover:border-dtre-accent hover:bg-dtre-accent hover:text-white text-sm font-semibold text-dtre-navy group transition-all"
              >
                <span>About BIOLYTE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Large Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyStatistics.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-dtre-accent/30 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors flex items-baseline tracking-tight">
                  {stat.prefix && <span className="text-2xl sm:text-3xl font-light mr-1">{stat.prefix}</span>}
                  <span>{stat.value}</span>
                  {stat.suffix && (
                    <span className="text-xs sm:text-sm font-sans font-medium uppercase text-dtre-muted ml-1.5 tracking-wider">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="h-px w-10 bg-dtre-accent/40 my-4" />
                <h3 className="text-base font-semibold text-dtre-navy mb-2 leading-snug">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-dtre-muted leading-relaxed mt-4">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
