import React, { useState, useMemo } from 'react';
import { researchReports } from '../data/researchData';
import { ResearchItem } from '../types';
import { ReportModal } from '../components/ReportModal';
import { Search, Calendar, Clock, BookOpen, Download, ArrowUpRight, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ResearchInsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeReport, setActiveReport] = useState<ResearchItem | null>(null);

  const categories = [
    'All',
    'Technical Intelligence',
    'Operational Research',
    'Industry Keynotes',
    'Technical Reference',
    'News'
  ];

  const filteredItems = useMemo(() => {
    return researchReports.filter((item) => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchSearch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Featured Hero Report
  const featuredReport = researchReports[0];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Cinematic Hero Header */}
      <section className="relative bg-[#0c1626] text-white pt-36 sm:pt-44 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80"
            alt="BIOLYTE Clean Energy Research and Engineering Whitepapers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626] via-[#0c1626]/80 to-transparent" />
          <div className="absolute -top-32 right-0 w-96 h-96 bg-dtre-accent/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Engineering Whitepapers & Intelligence
            </span>
            <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white leading-[1.12] tracking-tight">
              Evidence-based <span className="text-dtre-accent">clean energy intelligence</span>.
            </h1>
            <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed pt-2">
              Peer-reviewed technical databooks, biochemical methane potential (BMP) benchmarks, and thermal bio-hydrogen lifecycle analyses engineered for industrial decision-makers.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80">
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">98.5%</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Methane Purity Standard</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">50 kg / t</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Bio-Hydrogen Yield</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-accent">100%</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Water Savings in Soil Binders</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">CE & ATEX</div>
              <div className="text-xs text-white/60 font-light mt-0.5">Verified Safety Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Report Spotlight Banner */}
        {featuredReport && (
          <div className="mb-16 bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden bg-slate-900">
              <img
                src={featuredReport.image}
                alt={featuredReport.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-dtre-accent text-white shadow-md">
                  FEATURED WHITEPAPER
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="text-dtre-accent font-semibold uppercase tracking-wider">
                    {featuredReport.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredReport.publishDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredReport.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors leading-tight">
                  {featuredReport.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  {featuredReport.summary}
                </p>

                {/* Key Takeaways */}
                {featuredReport.keyTakeaways && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 block">
                      Core Technical Findings:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {featuredReport.keyTakeaways.slice(0, 4).map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-dtre-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setActiveReport(featuredReport)}
                  className="bg-slate-900 hover:bg-dtre-accent text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Executive Summary</span>
                </button>

                <span className="text-xs text-slate-500 font-light">
                  Published by BIOLYTE Technical Directorate
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
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
                placeholder="Search technical papers, databooks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-dtre-accent focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Displaying <strong className="text-slate-900 font-semibold">{filteredItems.length}</strong> technical whitepapers & intelligence reports
            </span>
            <span className="hidden sm:inline-block font-light">
              Click any report to view data points and download specs
            </span>
          </div>
        </div>

        {/* Main Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              onClick={() => setActiveReport(item)}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-dtre-accent/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-light">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-dtre-accent" />
                      {item.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-dtre-accent" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-dtre-navy group-hover:text-dtre-accent transition-colors">
                <span className="flex items-center gap-1">
                  <span>Read Whitepaper</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-dtre-accent group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Report Reader Modal */}
      <ReportModal
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />
    </div>
  );
};
