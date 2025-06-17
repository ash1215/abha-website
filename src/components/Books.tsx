import React from 'react';
import { BookOpen } from 'lucide-react';

interface Book {
  title: string;
  year: string;
  description: string;
  themes: string[];
}

const Books: React.FC = () => {
  const books: Book[] = [
    {
      title: "प्रथम प्रणय",
      year: "प्रकाशित",
      description: "मैथिली काव्य संग्रह - प्रेम और भावनाओं का सुंदर चित्रण",
      themes: ["प्रेम", "भावना", "संवेदना"]
    },
    {
      title: "ऊर्मि", 
      year: "2024",
      description: "मैथिली काव्य संग्रह - डा. नीरा मिश्र स्मृति साहित्य सम्मान 2024 से सम्मानित",
      themes: ["साहित्य", "संस्कृति", "पुरस्कृत कृति"]
    }
  ];

  return (
    <section id="books" className="section bg-gradient">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">पुस्तकें</h2>
          <div className="section-divider orange"></div>
          <p className="section-description">मैथिली काव्य संग्रह</p>
        </div>
        <div className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <div className="book-header">
                <BookOpen className="icon-lg book-icon" />
                <span className="book-year">
                  {book.year}
                </span>
              </div>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-description">{book.description}</p>
              <div className="book-themes">
                {book.themes.map((theme, themeIndex) => (
                  <span key={themeIndex} className="theme-tag">
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books; 