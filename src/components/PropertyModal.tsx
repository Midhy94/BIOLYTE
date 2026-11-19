import React, { useState, useEffect } from 'react';
import { Property } from '../types';
import { X, MapPin, Building, ShieldCheck, Download, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [enquirySent, setEnquirySent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!property) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dtre-darker/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Image Banner */}
          <div className="relative h-72 sm:h-80 w-full shrink-0 bg-slate-900">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dtre-darker/90 via-dtre-darker/40 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              aria-label="Close property modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest font-semibold">
                <span className="text-dtre-accent">{property.status}</span>
                <span className="text-white/40">/</span>
                <span className="text-white/80">{property.sector}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold leading-tight">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
                <MapPin className="w-3.5 h-3.5 text-dtre-accent" />
                <span>{property.location}</span>
              </div>
            </div>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div>
                <span className="text-[10px] uppercase font-semibold text-dtre-muted block">Total Size (sq ft)</span>
                <span className="text-xl font-bold font-mono text-dtre-navy">{property.sizeSqFt}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-dtre-muted block">Total Size (sq m)</span>
                <span className="text-xl font-bold font-mono text-dtre-navy">{property.sizeSqM}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-dtre-muted block">Tenure</span>
                <span className="text-xl font-bold text-dtre-navy">{property.tenure}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-dtre-muted block">EPC Rating</span>
                <span className="text-xl font-bold text-emerald-600">{property.epcRating}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dtre-muted">
                Property Description
              </h3>
              <p className="text-sm sm:text-base text-dtre-navy/80 leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dtre-muted">
                Key Specification & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-dtre-navy">
                    <CheckCircle2 className="w-4 h-4 text-dtre-accent shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Enquiry Form */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-editorial font-bold text-dtre-navy mb-4">
                Arrange a Viewing or Request Full Brochure
              </h3>

              {enquirySent ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Your enquiry for {property.title} has been received. A DTRE transaction partner will be in touch shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                    />
                    <input
                      type="tel"
                      placeholder="Contact Telephone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Provide details on your requirement or requested viewing dates..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-dtre-navy focus:outline-none focus:border-dtre-accent"
                  />
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => alert(`Brochure download initiated for ${property.title}`)}
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 hover:border-dtre-accent hover:bg-slate-50 text-dtre-navy transition-colors"
                    >
                      <Download className="w-4 h-4 text-dtre-accent" />
                      <span>Download PDF Particulars</span>
                    </button>
                    <button
                      type="submit"
                      className="bg-dtre-navy hover:bg-dtre-accent text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-colors"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
