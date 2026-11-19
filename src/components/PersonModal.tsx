import React, { useEffect } from 'react';
import { Person } from '../types';
import { X, Mail, Linkedin, Phone, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PersonModalProps {
  person: Person | null;
  onClose: () => void;
}

export const PersonModal: React.FC<PersonModalProps> = ({ person, onClose }) => {
  useEffect(() => {
    if (!person) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [person, onClose]);

  if (!person) return null;

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
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            aria-label="Close profile modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-12">
            {/* Photo Column */}
            <div className="sm:col-span-5 relative bg-slate-100 min-h-[300px]">
              <img
                src={person.image || 'https://dtre-com.s3.eu-west-2.amazonaws.com/dtre-com/KeithDowley-1.jpg'}
                alt={person.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dtre-darker/60 via-transparent to-transparent sm:hidden" />
            </div>

            {/* Content Column */}
            <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2 text-xs uppercase tracking-widest font-semibold text-dtre-accent">
                  {person.categories.join(' · ')}
                </div>

                <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-dtre-navy mb-1">
                  {person.name}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-dtre-accent whitespace-pre-line leading-snug">
                  {person.jobTitle}
                </p>

                <div className="h-px w-12 bg-slate-200 my-4" />

                <div className="text-xs text-dtre-navy/80 leading-relaxed space-y-3 font-light max-h-48 overflow-y-auto pr-2">
                  <p>{person.bio}</p>
                </div>
              </div>

              {/* Contact actions */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 text-xs font-semibold text-dtre-navy hover:text-dtre-accent transition-colors"
                  >
                    <Mail className="w-4 h-4 text-dtre-accent" />
                    <span>{person.email}</span>
                  </a>
                )}

                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-dtre-navy hover:text-dtre-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-dtre-accent" />
                    <span>Connect on LinkedIn</span>
                  </a>
                )}

                <div className="flex items-center gap-2 text-xs text-dtre-muted pt-1">
                  <Building className="w-4 h-4 text-dtre-muted" />
                  <span>DTRE Commercial Real Estate Advisers</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
