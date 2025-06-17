import React from 'react';
import { Youtube } from 'lucide-react';

const YouTube: React.FC = () => {
  return (
    <section id="videos" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">YouTube चैनल</h2>
          <div className="section-divider red"></div>
          <p className="section-description">काव्य पाठ आ सांस्कृतिक सामग्री</p>
        </div>
        <div className="youtube-content">
          <Youtube className="icon-xl youtube-icon" />
          <h3 className="youtube-title">हमर YouTube चैनल पर जाउ</h3>
          <p className="youtube-description">
            मैथिली कविता, काव्य पाठ, आ सांस्कृतिक कार्यक्रम सभक वीडियो नियमित रूप सँ अपलोड कएल जाइत अछि। 
            चैनल सब्सक्राइब कए कए हमरा सभक मैथिली भाषा आ संस्कृतिक यात्रा मे साझीदार बनू।
          </p>
          <button 
            onClick={() => window.open('https://www.youtube.com/@abhaspoetry7131', '_blank')}
            className="btn btn-red"
          >
            <Youtube className="icon-sm" />
            <span>चैनल देखें</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTube; 