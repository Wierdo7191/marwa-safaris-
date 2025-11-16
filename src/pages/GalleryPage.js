import React from 'react';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="page-header-content">
          <h1>Safari Gallery</h1>
          <p>Experience the beauty of Africa through our lens</p>
        </div>
      </section>
      <Gallery />
    </main>
  );
};

export default GalleryPage;