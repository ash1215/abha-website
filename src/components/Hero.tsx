import React from 'react';
import { BookOpen, Youtube } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <img
            src="/images/dp.jpg"
            alt="आभा झा"
            className="hero-image"
          />
          <h1 className="hero-title">
            आभा झा
          </h1>
          <p className="hero-subtitle">
            मैथिली कवयित्री
          </p>
          <p className="hero-description">
            माधुर्य आ संवेदनाक स्वर
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('books')}
              className="btn btn-primary"
            >
              <BookOpen className="icon-sm" />
              <span>पुस्तकें देखें</span>
            </button>
            <button 
              onClick={() => scrollToSection('videos')}
              className="btn btn-red"
            >
              <Youtube className="icon-sm" />
              <span>वीडियो देखें</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 