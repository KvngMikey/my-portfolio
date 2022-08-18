import React from 'react';
import './Homepage.css';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Skills from '../pages/Skills';

const Homepage = () => {
  return (
    <div>
      <h1>Homepage </h1>

      <About />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
};

export default Homepage;
