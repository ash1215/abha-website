import React from 'react';

interface GalleryItem {
  image: string;
  title: string;
}

const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      image: "/images/WhatsApp Image 2025-06-03 at 15.23.26.jpeg",
      title: "काव्य पाठ कार्यक्रम"
    },
    {
      image: "/images/WhatsApp Image 2025-06-03 at 15.23.27.jpeg",
      title: "सांस्कृतिक कार्यक्रम"
    },
    {
      image: "/images/WhatsApp Image 2025-06-03 at 15.23.28.jpeg",
      title: "साहित्यिक सम्मेलन"
    },
    {
      image: "/images/WhatsApp Image 2025-06-03 at 15.23.29.jpeg",
      title: "पुरस्कार समारोह"
    },
    {
      image: "/images/WhatsApp Image 2025-06-03 at 15.23.30.jpeg",
      title: "मैथिली भाषा सम्मेलन"
    },
    {
      image: "/images/WhatsApp Image 2025-06-03 at 15.23.31.jpeg",
      title: "टेलीविजन कार्यक्रम"
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
          {galleryItems.map((item, index) => (
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