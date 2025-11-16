import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>© {new Date().getFullYear()} Marwa Safaris Africa — All rights reserved</div>
        <div className="footer-links">
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="cta-section">
          <p>Ready for your African adventure?</p>
          <Link to="/contact" className="btn btn-primary">Get Quote Today</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;