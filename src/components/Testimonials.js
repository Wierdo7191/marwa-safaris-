import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Our family trip to the Mara was magical. The guides were superb and our kids are still talking about it.",
      author: "Sara, UK"
    },
    {
      text: "Gorilla trekking was life-changing. The care taken by the team meant we felt safe and respectful.",
      author: "Daniel, Kenya"
    },
    {
      text: "The luxury lodge experience exceeded our expectations. Every detail was perfect.",
      author: "Maria, Spain"
    },
    {
      text: "From the moment we arrived, we felt welcomed and cared for. Highly recommend!",
      author: "John, USA"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h3>What Our Travelers Say</h3>

        <div className="testimonial-slider">
          <button className="slider-btn prev" onClick={prevTestimonial}>‹</button>

          <div className="testimonial">
            <blockquote>
              "{testimonials[currentIndex].text}"
            </blockquote>
            <cite>— {testimonials[currentIndex].author}</cite>
          </div>

          <button className="slider-btn next" onClick={nextTestimonial}>›</button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;