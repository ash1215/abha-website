import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Gallery from './components/Gallery';
import YouTube from './components/YouTube';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AbhaJhaWebsite: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Books />
      <Gallery />
      <YouTube />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default AbhaJhaWebsite;
