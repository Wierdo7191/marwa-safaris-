import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1520637836862-4d197d17c1a8?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <section className="gallery">
      <div className="gallery-container">
        <h3>Safari Gallery</h3>
        <p>Experience the beauty of Africa through our lens</p>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={img} alt={`Safari ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;