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
            src={process.env.PUBLIC_URL + "/images/dp.jpg"}
            alt="Abha Jha"
            className="rounded-full w-48 h-48 object-cover"
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