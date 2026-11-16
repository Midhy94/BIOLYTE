import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { StatsSection } from '../components/StatsSection';
import { ServicesSection } from '../components/ServicesSection';
import { LogoMarquee } from '../components/LogoMarquee';
import { ResearchSection } from '../components/ResearchSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { NewsSection } from '../components/NewsSection';
import { PropertySearchCTA } from '../components/PropertySearchCTA';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider onNavigate={onNavigate} />
      <StatsSection onNavigate={onNavigate} />
      <ServicesSection onNavigate={onNavigate} />
      <LogoMarquee />
      <ResearchSection onNavigate={onNavigate} />
      <TestimonialSection />
      <NewsSection onNavigate={onNavigate} />
      <PropertySearchCTA onNavigate={onNavigate} />
    </div>
  );
};
