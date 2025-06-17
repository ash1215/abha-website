import React from 'react';
import { Facebook, Mail, Phone, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">संपर्क</h2>
          <div className="section-divider orange"></div>
          <p className="section-description">काव्य पाठ आ कार्यक्रम लेल संपर्क करू</p>
        </div>
        <div className="contact-content">
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon-wrapper orange">
                <Mail className="contact-icon icon-lg" />
              </div>
              <h3 className="contact-title">ईमेल</h3>
              <p className="contact-text">abha.jha186@gmail.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper red">
                <Phone className="contact-icon icon-lg" />
              </div>
              <h3 className="contact-title">फोन</h3>
              <p className="contact-text">+91 7982349106</p>
            </div>
            <a href="https://www.youtube.com/@abhaspoetry7131" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="contact-item">
                <div className="contact-icon-wrapper yellow">
                  <Youtube className="contact-icon icon-lg" />
                </div>
                <h3 className="contact-title">YouTube</h3>
                <p className="contact-text">आभा झा चैनल</p>
              </div>
            </a>
            <a href="https://www.facebook.com/abha.jha.999228" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="contact-item">
                <div className="contact-icon-wrapper blue">
                  <Facebook className="contact-icon icon-lg" />
                </div>
                <h3 className="contact-title">Facebook</h3>
                <p className="contact-text">abha.jha.999228</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 