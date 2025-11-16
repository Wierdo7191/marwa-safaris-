import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <div className="logo">
            <span className="logo-text">MS</span>
          </div>
          <div className="brand-info">
            <h1>Marwa Safaris Africa</h1>
            <p>Authentic African journeys — Responsible, Luxurious, Memorable</p>
          </div>
        </Link>
        <nav className="header-nav">
          <div className="dropdown">
            <button className="btn btn-outline" onClick={() => toggleDropdown('destinations')}>
              Destinations ▼
            </button>
            {dropdownOpen === 'destinations' && (
              <div className="dropdown-menu">
                <Link to="/packages" onClick={() => setDropdownOpen(null)}>Kenya Safaris</Link>
                <Link to="/packages" onClick={() => setDropdownOpen(null)}>Uganda Gorilla Trekking</Link>
                <Link to="/packages" onClick={() => setDropdownOpen(null)}>Tanzania Adventures</Link>
              </div>
            )}
          </div>
          <Link to="/packages" className="btn btn-outline">Packages</Link>
          <Link to="/gallery" className="btn btn-outline">Gallery</Link>
          <Link to="/about" className="btn btn-outline">About</Link>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
          <div className="dropdown">
            <button className="btn btn-outline" onClick={() => toggleDropdown('account')}>
              Account ▼
            </button>
            {dropdownOpen === 'account' && (
              <div className="dropdown-menu">
                <Link to="/signin" onClick={() => setDropdownOpen(null)}>Sign In</Link>
                <Link to="/signup" onClick={() => setDropdownOpen(null)}>Sign Up</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="btn btn-primary">Book Now</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;