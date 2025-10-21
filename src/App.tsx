import { useState, useEffect } from 'react';
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';
import { OIRSystemPage } from './components/OIRSystemPage';
import { ChemicalCompliancePage } from './components/ChemicalCompliancePage';
import { RedCardSystemPage } from './components/RedCardSystemPage';
import { RGBAnalyticsPage } from './components/RGBAnalyticsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'oir-system' | 'chemical-compliance' | 'red-card-system' | 'rgb-analytics'>('home');

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/oir-system') {
        setCurrentPage('oir-system');
      } else if (path === '/chemical-compliance') {
        setCurrentPage('chemical-compliance');
      } else if (path === '/red-card-system') {
        setCurrentPage('red-card-system');
      } else if (path === '/rgb-analytics') {
        setCurrentPage('rgb-analytics');
      } else {
        setCurrentPage('home');
      }
    };

    // Set initial page based on URL
    handlePopState();

    // Listen for browser navigation
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const projectImages = [
    // OIR System - Quality inspection dashboard
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    // Chemical Compliance Checker - Laboratory with chemical equipment
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    // Red Card System - Defect tracking/quality control
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    // RGB Analytics - Machine learning/data analytics
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const navigateToOIRSystem = () => {
    setCurrentPage('oir-system');
    window.history.pushState(null, '', '/oir-system');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToChemicalCompliance = () => {
    setCurrentPage('chemical-compliance');
    window.history.pushState(null, '', '/chemical-compliance');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRedCardSystem = () => {
    setCurrentPage('red-card-system');
    window.history.pushState(null, '', '/red-card-system');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRGBAnalytics = () => {
    setCurrentPage('rgb-analytics');
    window.history.pushState(null, '', '/rgb-analytics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'oir-system') {
    return <OIRSystemPage onBack={navigateToHome} />;
  }

  if (currentPage === 'chemical-compliance') {
    return <ChemicalCompliancePage onBack={navigateToHome} />;
  }

  if (currentPage === 'red-card-system') {
    return <RedCardSystemPage onBack={navigateToHome} />;
  }

  if (currentPage === 'rgb-analytics') {
    return <RGBAnalyticsPage onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects projectImages={projectImages} onNavigateToOIR={navigateToOIRSystem} onNavigateToChemicalCompliance={navigateToChemicalCompliance} onNavigateToRedCard={navigateToRedCardSystem} onNavigateToRGBAnalytics={navigateToRGBAnalytics} />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
