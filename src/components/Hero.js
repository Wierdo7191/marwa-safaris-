import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <h2>Explore Africa with Marwa Safaris</h2>
            <p>
              Tailor-made safaris, expert guides, responsible tourism and unforgettable experiences across East, West and Southern Africa. From gorilla trekking to luxury lodges and beach escapes — we craft journeys that last a lifetime.
            </p>

            <div className="hero-actions">
              <a href="#packages" className="btn btn-primary">View Packages</a>
              <a href="#contact" className="btn btn-outline">Request Quote</a>
            </div>

            <div className="hero-features">
              <div>
                <strong>24/7 Support</strong>
                <div>Local guides & emergency response</div>
              </div>
              <div>
                <strong>Responsible Travel</strong>
                <div>Community & conservation contributions</div>
              </div>
              <div>
                <strong>Custom Itineraries</strong>
                <div>Family, honeymoon, luxury & budget options</div>
              </div>
              <div>
                <strong>Secure Bookings</strong>
                <div>Payments & travel insurance assistance</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img alt="Safari" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;