import React from 'react';
import { ResearchItem } from '../types';
import { X, Download, Calendar, Clock, Share2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReportModalProps {
  report: ResearchItem | null;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ report, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const [downloaded, setDownloaded] = React.useState(false);

  if (!report) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dtre-darker/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden z-10 my-8"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-dtre-dark">
            <img
              src={report.image}
              alt={report.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dtre-darker via-dtre-darker/50 to-transparent" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              aria-label="Close report modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category text on top of heading */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block mb-2">
                {report.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold leading-tight">
                {report.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 text-xs text-dtre-muted">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-dtre-accent" />
                  {report.publishDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-dtre-accent" />
                  {report.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-dtre-navy text-xs font-medium"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dtre-muted">
                Executive Overview
              </h3>
              <p className="text-base text-dtre-navy/90 leading-relaxed font-light">
                {report.summary}
              </p>
            </div>

            {/* Key Takeaways */}
            {report.keyTakeaways && report.keyTakeaways.length > 0 && (
              <div className="space-y-3 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-dtre-navy flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-dtre-accent" />
                  Key Benchmark Findings
                </h3>
                <ul className="space-y-3">
                  {report.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-dtre-navy/80">
                      <CheckCircle2 className="w-4 h-4 text-dtre-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Podcast Player Preview if applicable */}
            {report.podcastEpisode && (
              <div className="bg-dtre-navy text-white rounded-2xl p-6 space-y-4">
                <div className="text-xs uppercase tracking-wider text-dtre-accent font-semibold">
                  Podcast Episode
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Guest: {report.podcastEpisode.guest}</span>
                  <span className="text-xs font-mono text-white/60">Duration: {report.podcastEpisode.duration}</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-dtre-accent h-full w-1/3" />
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-dtre-muted">
              Published by DTRE Market Research Desk
            </span>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-dtre-navy hover:bg-dtre-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{downloaded ? 'Preparing PDF...' : 'Download Full PDF Report'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
