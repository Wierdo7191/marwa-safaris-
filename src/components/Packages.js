import React from 'react';

const Packages = () => {
  const packages = [
    {
      title: 'Classic Kenya Wildlife Safari',
      desc: 'Maasai Mara game drives, Lake Nakuru flamingos, All meals & transfers',
      img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60',
    },
    {
      title: 'Gorilla Trekking in Uganda',
      desc: 'Permits included, Guided treks, Luxury lodge',
      img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=60',
    },
    {
      title: 'Zanzibar Beach & Spice Tour',
      desc: 'Beach villa, Stone Town guided tour, Spice farm visit',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
    },
    {
      title: 'Mount Kilimanjaro Climb (Machame Route)',
      desc: 'Professional guides, Full board, Scenic routes',
      img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60',
    },
    {
      title: 'Luxury Conservation Lodge Experience',
      desc: 'Private guides, Conservancy walks, Spa & fine dining',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60',
    },
  ];

  return (
    <section id="packages" className="packages">
      <div className="packages-container">
        <h3>Popular Packages</h3>

        <div className="packages-grid">
          {packages.map((p, idx) => (
            <article key={idx} className="package-card">
              <img src={p.img} alt={p.title} className="package-image" />
              <div className="package-body">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>

                <div className="package-actions">
                  <div className="package-price">USD 1,800</div>
                  <div>
                    <button onClick={() => alert(`${p.title} added to booking cart (placeholder)`)} className="btn-book">Book</button>
                    <button onClick={() => alert('Open quick view / full itinerary (placeholder)')} className="btn-view">View</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;