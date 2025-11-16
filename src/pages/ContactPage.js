import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="page-header-content">
          <h1>Contact Us</h1>
          <p>Get in touch to plan your dream safari</p>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default ContactPage;