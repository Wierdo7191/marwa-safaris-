import React from 'react';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const Home = () => {
  return (
    <main>
      <Hero />
      <Packages />
      <Gallery />
      <Testimonials />
      <About />
    </main>
  );
};

export default Home;