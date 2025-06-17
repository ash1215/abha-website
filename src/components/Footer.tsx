import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Heart className="footer-icon icon-md" />
          <span className="footer-title">आभा झा</span>
        </div>
        <p className="footer-description">मैथिली काव्य आ संस्कृतिक विरासत</p>
        <p className="footer-copyright">
          © 2024 आभा झा। सभ अधिकार सुरक्षित।
        </p>
      </div>
    </footer>
  );
};

export default Footer; 