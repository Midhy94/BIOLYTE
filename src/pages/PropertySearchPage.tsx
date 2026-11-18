import React, { useState, useMemo } from 'react';
import { propertiesList } from '../data/propertiesData';
import { Property } from '../types';
import { PropertyModal } from '../components/PropertyModal';
import { Search, MapPin, SlidersHorizontal, LayoutGrid, List, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PropertySearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    return propertiesList.filter((prop) => {
      const matchSearch =
        searchTerm === '' ||
        prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchSector =
        selectedSector === 'All' || prop.sector === selectedSector;

      const matchStatus =
        selectedStatus === 'All' || prop.status === selectedStatus;

      return matchSearch && matchSector && matchStatus;
    });
  }, [searchTerm, selectedSector, selectedStatus]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Cinematic Hero Section */}
      <section className="relative bg-[#0c1626] text-white pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626] via-[#0c1626]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1626] via-[#0c1626]/70 to-transparent" />
          <div className="absolute -top-32 right-0 w-96 h-96 bg-dtre-accent/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-dtre-accent font-semibold block">
              Commercial Property Search
            </span>
            <h1 className="text-4xl sm:text-6xl font-editorial font-semibold text-white leading-tight">
              Explore Prime Commercial Mandates
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-light">
              Search our active portfolio of Grade A logistics warehouses, Golden Triangle laboratories, and urban industrial facilities across the UK.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-16 sm:pb-24">
        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 mb-10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-dtre-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by property name, town, or postcode..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-dtre-navy placeholder:text-dtre-muted focus:outline-none focus:border-dtre-accent focus:bg-white transition-all"
              />
            </div>

            {/* Sector Selector */}
            <div className="sm:col-span-3">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-dtre-navy focus:outline-none focus:border-dtre-accent transition-all cursor-pointer"
              >
                <option value="All">All Sectors</option>
                <option value="Industrial & Logistics">Industrial & Logistics</option>
                <option value="Science & Technology">Science & Technology</option>
              </select>
            </div>

            {/* Status Selector */}
            <div className="sm:col-span-3">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-dtre-navy focus:outline-none focus:border-dtre-accent transition-all cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="To Let">To Let</option>
                <option value="For Sale">For Sale</option>
                <option value="Under Offer">Under Offer</option>
              </select>
            </div>
          </div>

          {/* Results Counter and View Mode Toggle */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-dtre-muted">
            <div>
              Showing <span className="font-semibold text-dtre-navy">{filteredProperties.length}</span> commercial {filteredProperties.length === 1 ? 'property' : 'properties'}
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === 'grid' ? 'bg-white text-dtre-navy shadow-sm' : 'text-dtre-muted hover:text-dtre-navy'
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === 'list' ? 'bg-white text-dtre-navy shadow-sm' : 'text-dtre-muted hover:text-dtre-navy'
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Listings */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80 p-8 space-y-3">
            <h3 className="text-xl font-editorial font-bold text-dtre-navy">No matching properties found</h3>
            <p className="text-xs text-dtre-muted max-w-md mx-auto">
              Try adjusting your search criteria or contact our transaction desk for off-market opportunities.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSector('All');
                setSelectedStatus('All');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-dtre-navy text-white text-xs font-semibold hover:bg-dtre-accent transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <motion.div
                key={prop.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProperty(prop)}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold">
                      <span className="text-dtre-accent">{prop.status}</span>
                      <span className="text-dtre-muted">EPC {prop.epcRating}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-dtre-muted">
                      <MapPin className="w-3.5 h-3.5 text-dtre-accent shrink-0" />
                      <span className="truncate">{prop.location}</span>
                    </div>

                    <h3 className="text-xl font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors leading-snug">
                      {prop.title}
                    </h3>

                    <p className="text-xs text-dtre-navy/70 line-clamp-2 leading-relaxed font-light">
                      {prop.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono text-sm font-bold text-dtre-navy">
                      {prop.sizeSqFt} sq ft
                    </span>
                    <span className="text-[10px] text-dtre-muted block">({prop.sizeSqM} sq m)</span>
                  </div>

                  <span className="font-semibold text-dtre-accent group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProperties.map((prop) => (
              <motion.div
                key={prop.id}
                onClick={() => setSelectedProperty(prop)}
                className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-24 h-24 sm:w-32 sm:h-24 rounded-xl object-cover shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold">
                      <span className="text-dtre-accent">{prop.status}</span>
                      <span className="text-slate-300">/</span>
                      <span className="text-dtre-muted">{prop.sector}</span>
                    </div>
                    <h3 className="text-lg font-editorial font-bold text-dtre-navy group-hover:text-dtre-accent transition-colors">
                      {prop.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-dtre-muted">
                      <MapPin className="w-3.5 h-3.5 text-dtre-accent" />
                      <span>{prop.location}</span>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <div className="font-mono text-base font-bold text-dtre-navy">
                    {prop.sizeSqFt} sq ft
                  </div>
                  <div className="text-xs text-dtre-muted">{prop.tenure} • EPC {prop.epcRating}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
};
