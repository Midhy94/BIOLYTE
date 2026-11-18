import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PropertySearchPage } from './pages/PropertySearchPage';
import { ResearchInsightsPage } from './pages/ResearchInsightsPage';
import { PeoplePage } from './pages/PeoplePage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const handleNavigate = (path: string) => {
    // If it's an anchor on the current page, handle smooth scroll
    if (path.startsWith('#')) {
      const el = document.getElementById(path.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Split anchor if any (e.g. /about#history)
    const [pathname, hash] = path.split('#');
    setCurrentPath(pathname || '/');
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Determine which page to render based on currentPath
  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/homepage':
        return <HomePage onNavigate={handleNavigate} />;
      
      case '/services':
      case '/industrial-and-logistics':
        return <ServicesPage initialSlug="industrial-and-logistics" onNavigate={handleNavigate} />;
      
      case '/science-technology':
        return <ServicesPage initialSlug="science-technology" onNavigate={handleNavigate} />;
      
      case '/alternatives':
        return <ServicesPage initialSlug="alternatives" onNavigate={handleNavigate} />;
      
      case '/sustainability-consultancy':
        return <ServicesPage initialSlug="sustainability-consultancy" onNavigate={handleNavigate} />;
      
      case '/property-search':
      case '/search/properties':
        return <PropertySearchPage />;
      
      case '/research-insights':
      case '/market-intelligence':
        return <ResearchInsightsPage />;
      
      case '/people':
        return <PeoplePage />;
      
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      
      case '/careers':
        return <CareersPage />;
      
      case '/contact':
        return <ContactPage />;
      
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-dtre-navy font-sans antialiased selection:bg-dtre-accent selection:text-white">
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        isHeroDark={true}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
