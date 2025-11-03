import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">Company Name</h2>
          <p>
            We are a leading construction company, committed to delivering high-quality projects and exceeding client expectations.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Markets</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h2>Support</h2>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-links">
            {/* Replace with actual social media icons */}
            <a href="#"><img src="/images/social-placeholder.svg" alt="Social Media"/></a>
            <a href="#"><img src="/images/social-placeholder.svg" alt="Social Media"/></a>
            <a href="#"><img src="/images/social-placeholder.svg" alt="Social Media"/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Company Name | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
