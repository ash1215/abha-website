import React from 'react';

interface GalleryItem {
  image: string;
  title: string;
}

const Gallery: React.FC = () => {
  const images = [
    {
      id: 1,
      image: process.env.PUBLIC_URL + "/images/WhatsApp Image 2025-06-03 at 15.23.26.jpeg",
      title: "Image 1"
    },
    {
      id: 2,
      image: process.env.PUBLIC_URL + "/images/WhatsApp Image 2025-06-03 at 15.23.27.jpeg",
      title: "Image 2"
    },
    {
      id: 3,
      image: process.env.PUBLIC_URL + "/images/WhatsApp Image 2025-06-03 at 15.23.28.jpeg",
      title: "Image 3"
    },
    {
      id: 4,
      image: process.env.PUBLIC_URL + "/images/WhatsApp Image 2025-06-03 at 15.23.29.jpeg",
      title: "Image 4"
    },
    {
      id: 5,
      image: process.env.PUBLIC_URL + "/images/WhatsApp Image 2025-06-03 at 15.23.30.jpeg",
      title: "Image 5"
    },
    {
      id: 6,
      image: process.env.PUBLIC_URL + "/images/WhatsApp Image 2025-06-03 at 15.23.31.jpeg",
      title: "Image 6"
    }
  ];

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">फोटो गैलरी</h2>
          <div className="section-divider red"></div>
          <p className="section-description">काव्य पाठ आ सांस्कृतिक कार्यक्रमक तस्वीरें</p>
        </div>
        <div className="gallery-grid">
          {images.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.image} alt={item.title} className="gallery-image" />
              <div className="gallery-overlay">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 