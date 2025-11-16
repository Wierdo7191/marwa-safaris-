import React from 'react';
import Packages from '../components/Packages';

const PackagesPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="page-header-content">
          <h1>Our Safari Packages</h1>
          <p>Choose from our curated selection of unforgettable African adventures</p>
        </div>
      </section>
      <Packages />
    </main>
  );
};

export default PackagesPage;