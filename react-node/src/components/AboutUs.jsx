import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>About Our Company</h2>
        <p>
          Founded in [Year], we have grown to become a leader in the construction industry. Our commitment to quality, safety, and innovation has earned us a reputation for excellence. We believe in building strong client relationships and delivering projects that stand the test of time.
        </p>
        <a href="#about" className="learn-more-btn">Learn More</a>
      </div>
      <div className="about-us-image">
        <img src="/images/about-us-placeholder.jpg" alt="Construction Site" />
      </div>
    </section>
  );
};

export default AboutUs;
