import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Building with Purpose, Precision, and Passion</h1>
        <p>Your Vision, Our Expertise</p>
        <a href="#projects" className="cta-button">Explore Our Work</a>
      </div>
    </section>
  );
};

export default Hero;
