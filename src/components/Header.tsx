import React, { useState, useEffect, useRef } from 'react';
import { DTRELogo, DTREArrow } from './DTRELogo';
import { headerNavigation, headerSideNavigation } from '../data/siteData';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isHeroDark?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, isHeroDark = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);

      setIsScrolled(currentScrollY > 40);

      // If at or near top, always keep visible
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
        setActiveMegaMenu(null);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up -> reveal navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkTheme = !isScrolled && isHeroDark && currentPath === '/';

  return (
    <>
      {/* Fixed Header & Announcement Wrapper with Autohide on Scroll Down */}
      <div 
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Top Banner */}
        {bannerVisible && (
          <div className={`text-xs font-medium py-2 px-4 transition-all duration-300 border-b ${
            isScrolled
              ? 'bg-dtre-navy text-white border-white/10'
              : isDarkTheme
              ? 'bg-dtre-darker/60 backdrop-blur-sm text-white/90 border-white/10'
              : 'bg-dtre-navy text-white border-white/10'
          }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2 mx-auto sm:mx-0">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-dtre-accent" />
                <span>Sustainable Energy EPC: Explore our Biogas, Biomethane & Bio-Hydrogen Solutions</span>
                <button 
                  onClick={() => onNavigate('/services')} 
                  className="underline font-semibold hover:text-dtre-accent transition-colors ml-2 inline-flex items-center gap-1"
                >
                  Explore Technologies <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <button 
                onClick={() => setBannerVisible(false)}
                className="hidden sm:block text-white/60 hover:text-white text-sm"
                aria-label="Close announcement banner"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <header
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 text-dtre-navy py-4'
              : isDarkTheme
              ? 'bg-transparent text-white py-6'
              : 'bg-white/95 backdrop-blur-md text-dtre-navy border-b border-slate-100 py-5'
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="BIOLYTE Homepage"
            >
              <DTRELogo 
                className="h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105" 
                fill="#D12B81"
              />
            </button>

            {/* Desktop Primary Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {headerNavigation.map((item) => {
                const hasMega = Boolean(item.columns && item.columns.length > 0);
                const isActive = currentPath === item.url || (item.url !== '/' && currentPath.startsWith(item.url));

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => hasMega && setActiveMegaMenu(item.title)}
                    onMouseLeave={() => hasMega && setActiveMegaMenu(null)}
                  >
                    <button
                      onClick={() => {
                        onNavigate(item.url);
                        setActiveMegaMenu(null);
                      }}
                      className={`inline-flex items-center gap-1 py-2 tracking-tight transition-colors ${
                        isActive
                          ? isDarkTheme ? 'text-dtre-accent font-semibold' : 'text-dtre-accent font-semibold'
                          : isDarkTheme
                          ? 'text-white/90 hover:text-white'
                          : 'text-dtre-navy/80 hover:text-dtre-navy'
                      }`}
                    >
                      {item.title}
                      {hasMega && (
                        <ChevronDown 
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeMegaMenu === item.title ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {hasMega && activeMegaMenu === item.title && (() => {
                        const isAbout = item.title === 'About';
                        const isSingleCol = item.columns?.length === 1;
                        const positionClass = isAbout
                          ? 'right-0 top-full pt-2 w-[380px]'
                          : isSingleCol
                          ? 'left-1/2 -translate-x-1/2 top-full pt-2 w-[400px]'
                          : 'left-0 top-full pt-2 w-[640px] -ml-6';

                        return (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className={`absolute ${positionClass}`}
                          >
                            <div className="relative rounded-2xl p-6 text-dtre-navy overflow-hidden bg-white/80 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.9)]">
                              {/* Glass Specular Top Sheen */}
                              <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-transparent pointer-events-none" />

                              <div className={`relative z-10 grid ${isSingleCol ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-8'}`}>
                                {item.columns?.map((col) => (
                                  <div key={col.title} className="space-y-3.5">
                                    <div className="text-xs font-semibold uppercase tracking-wider text-dtre-muted/90 border-b border-slate-200/50 pb-2 flex items-center justify-between">
                                      <span>{col.title}</span>
                                      <span className="text-[10px] font-mono text-dtre-accent/80 font-normal">
                                        0{col.links.length}
                                      </span>
                                    </div>
                                    <div className="space-y-1.5">
                                      {col.links.map((link) => (
                                        <button
                                          key={link.title}
                                          onClick={() => {
                                            onNavigate(link.url);
                                            setActiveMegaMenu(null);
                                          }}
                                          className="w-full text-left group block p-2.5 rounded-xl hover:bg-white/70 hover:shadow-sm border border-transparent hover:border-white/80 transition-all duration-150"
                                        >
                                          <div className="text-sm font-semibold text-dtre-navy group-hover:text-dtre-accent flex items-center justify-between transition-colors">
                                            <span>{link.title}</span>
                                            <DTREArrow className="w-2.5 h-2.5 text-dtre-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150" />
                                          </div>
                                          {link.description && (
                                            <p className="text-xs text-dtre-muted group-hover:text-dtre-navy/80 mt-1 line-clamp-2 leading-relaxed transition-colors">
                                              {link.description}
                                            </p>
                                          )}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Mega Menu Bottom Callout */}
                              <div className="relative z-10 mt-6 pt-3.5 border-t border-slate-200/50 flex items-center justify-between text-xs bg-white/50 backdrop-blur-md -mx-6 -mb-6 px-6 py-3.5">
                                <span className="text-dtre-navy/70 font-medium">
                                  Need turnkey feasibility or EPC consultation?
                                </span>
                                <button
                                  onClick={() => {
                                    onNavigate('/contact');
                                    setActiveMegaMenu(null);
                                  }}
                                  className="font-semibold text-dtre-navy hover:text-dtre-accent flex items-center gap-1.5 transition-colors group"
                                >
                                  <span>Speak to an Engineer</span>
                                  <ArrowRight className="w-3 h-3 text-dtre-accent group-hover:translate-x-0.5 transition-transform" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Desktop Side Nav */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {headerSideNavigation.map((side) => {
                const isContact = side.title === 'Contact';
                if (isContact) {
                  return (
                    <button
                      key={side.title}
                      onClick={() => onNavigate(side.url)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm ${
                        isDarkTheme
                          ? 'bg-white text-dtre-navy hover:bg-dtre-accent hover:text-white'
                          : 'bg-dtre-navy text-white hover:bg-dtre-darker'
                      }`}
                    >
                      {side.title}
                    </button>
                  );
                }

                return (
                  <button
                    key={side.title}
                    onClick={() => onNavigate(side.url)}
                    className={`transition-colors ${
                      currentPath === side.url
                        ? 'text-dtre-accent font-semibold'
                        : isDarkTheme
                        ? 'text-white/80 hover:text-white'
                        : 'text-dtre-navy/80 hover:text-dtre-navy'
                    }`}
                  >
                    {side.title}
                  </button>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => onNavigate('/contact')}
                className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
                  isDarkTheme ? 'bg-white text-dtre-navy' : 'bg-dtre-navy text-white'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full ${
                  isDarkTheme ? 'text-white hover:bg-white/10' : 'text-dtre-navy hover:bg-slate-100'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-dtre-navy text-white flex flex-col justify-between p-6 lg:hidden overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <DTRELogo className="h-7 w-auto" fill="#D12B81" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-widest text-dtre-accent font-semibold">
                    Navigation
                  </div>
                  {headerNavigation.map((nav) => (
                    <div key={nav.title} className="space-y-2">
                      <button
                        onClick={() => {
                          onNavigate(nav.url);
                          setMobileMenuOpen(false);
                        }}
                        className="text-xl font-medium block hover:text-dtre-accent transition-colors"
                      >
                        {nav.title}
                      </button>
                      {nav.columns && (
                        <div className="pl-4 space-y-2 border-l border-white/10">
                          {nav.columns.flatMap(c => c.links).map((link) => (
                            <button
                              key={link.title}
                              onClick={() => {
                                onNavigate(link.url);
                                setMobileMenuOpen(false);
                              }}
                              className="block text-sm text-white/70 hover:text-white transition-colors text-left"
                            >
                              {link.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="text-xs uppercase tracking-widest text-dtre-accent font-semibold">
                    Company
                  </div>
                  {headerSideNavigation.map((side) => (
                    <button
                      key={side.title}
                      onClick={() => {
                        onNavigate(side.url);
                        setMobileMenuOpen(false);
                      }}
                      className="block text-lg text-white/90 hover:text-white"
                    >
                      {side.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-white/60 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4 text-dtre-accent" />
                <span>Al Jubail HQ: +966 13 766 4909</span>
              </div>
              <p>© 2026 BIOLYTE. Sustainable Energy EPC & Green Technology.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
