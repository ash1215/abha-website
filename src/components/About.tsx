import React from 'react';

const About: React.FC = () => {
  const tags = ['काव्य', 'संस्कृति', 'परंपरा', 'भाषा', 'साहित्य'];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">परिचय</h2>
          <div className="section-divider orange"></div>
        </div>
        <div className="about-grid">
          <div className="about-cards">
            <div className="about-card orange">
              <h3 className="card-title">जन्म</h3>
              <p className="card-text">1975 ई.</p>
            </div>
            <div className="about-card red">
              <h3 className="card-title">भाषा</h3>
              <p className="card-text">मैथिली आ हिंदी</p>
            </div>
            <div className="about-card yellow">
              <h3 className="card-title">विशेषता</h3>
              <p className="card-text">काव्य पाठ आ सांस्कृतिक कार्यक्रम</p>
            </div>
          </div>
          <div className="about-text">
            <p className="about-paragraph">
              आभा झा एक प्रतिष्ठित मैथिली कवयित्री हैं जिनकी विशेष अभिरुचि मैथिली एवं हिंदी में काव्य सृजन में है। 
              उन्होंने साहित्य अकादेमी एवं मैथिली भोजपुरी अकादेमी जैसे समृद्ध मंचों पर कई बार कविता प्रस्तुत करने का अवसर प्राप्त किया है।
            </p>
            <p className="about-paragraph">
              देश के विभिन्न भागों में आयोजित राष्ट्रीय स्तर के कार्यक्रमों में प्रस्तुति देने के साथ-साथ आकाशवाणी दिल्ली में आयोजित हिंदी पखवाड़ा में जज की भूमिका में उपस्थिति। 
              नेशनल टेलीविजन जी.टी.वी के नव वर्ष विशेष कार्यक्रम और शेमारू चैनल के 'वाह भाइ वाह' कार्यक्रम में भाग ले चुकी हैं।
            </p>
            <p className="about-paragraph">
              <strong>पुरस्कार:</strong> मैथिली काव्य संग्रह 'ऊर्मि' के लिए डा. नीरा मिश्र स्मृति साहित्य सम्मान 2024 से नवाजा गया है।
            </p>
            <div className="tags">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 