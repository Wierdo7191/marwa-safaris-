import React from 'react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="page-header-content">
          <h1>About Marwa Safaris Africa</h1>
          <p>Discover our story and commitment to responsible tourism</p>
        </div>
      </section>
      <About />
      <Testimonials />
    </main>
  );
};

export default AboutPage;