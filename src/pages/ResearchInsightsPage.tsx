import React, { useState, useMemo } from 'react';
import { researchReports, newsArticles } from '../data/researchData';
import { ResearchItem } from '../types';
import { ReportModal } from '../components/ReportModal';
import { Search, Calendar, Clock, BookOpen, Download, Radio, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ResearchInsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeReport, setActiveReport] = useState<ResearchItem | null>(null);

  const categories = ['All', 'Technical Intelligence', 'Operational Research', 'Industry Keynotes', 'Technical Reference', 'News'];

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

  return (
    <div className="bg-slate-50 min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
            Technologies & Technical Intelligence
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-dtre-navy leading-tight">
            Engineering Briefs & Clean Energy Insights
          </h1>
          <p className="text-base sm:text-lg text-dtre-navy/70 font-light">
            Grounded in rigorous thermochemical and biological engineering, our technical whitepapers empower informed decision-making for agricultural operators, municipalities, and industrial energy partners.
          </p>
        </div>

        {/* Category Pills & Search Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all ${selectedCategory === cat
                    ? 'bg-dtre-navy text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-dtre-navy'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-dtre-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reports and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Main Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-dtre-accent/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

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

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveReport(item)}
                  className="w-full py-2.5 px-4 rounded-full border border-slate-200 hover:border-dtre-accent hover:bg-slate-50 text-xs font-semibold text-dtre-navy flex items-center justify-center gap-2 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-dtre-accent" />
                  <span>Read Intelligence Report</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company News Section (shown when selectedCategory is All or News) */}
        {(selectedCategory === 'All' || selectedCategory === 'News') && (
          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="mb-8 space-y-2">
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
                Announcements
              </span>
              <h2 className="text-3xl font-editorial font-bold text-dtre-navy">
                Corporate Press & Transaction Announcements
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-dtre-accent block">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-editorial font-bold text-dtre-navy leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-dtre-muted line-clamp-3 font-light">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-dtre-muted flex items-center justify-between">
                    <span>{article.date}</span>
                    <span className="font-semibold text-dtre-accent">Press Release</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ReportModal
        report={activeReport}
        onClose={() => setActiveReport(null)}
      />
    </div>
  );
};
