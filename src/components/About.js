import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h3>About Marwa Safaris Africa</h3>
          <p>
            We are a locally-run travel company with deep knowledge of East, Central and Southern Africa. Our team of experienced guides, conservation experts and travel planners crafts responsible itineraries that support communities and protect wildlife.
          </p>

          <ul>
            <li>Local offices & operators across Africa</li>
            <li>ISO-level safety & vetted vehicle fleets</li>
            <li>Custom groups, corporate travel & educational tours</li>
          </ul>
        </div>

        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=1200&q=60" alt="Guides" />
        </div>
      </div>
    </section>
  );
};

export default About;