import React from 'react';
import { newsArticles } from '../data/researchData';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsSectionProps {
  onNavigate: (path: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Company News
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial font-semibold text-dtre-navy">
              Latest News
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/research-insights?tab=News')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 hover:border-dtre-accent hover:bg-dtre-accent hover:text-white text-sm font-semibold text-dtre-navy transition-all group"
          >
            <span>View all news</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onNavigate('/research-insights?tab=News')}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <span className="text-xs uppercase tracking-wider text-dtre-accent font-semibold block mb-1">
                  {article.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-dtre-muted mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-xs text-dtre-navy/70 leading-relaxed font-light line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-dtre-navy group-hover:text-dtre-accent transition-colors">
                <span>Read article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
