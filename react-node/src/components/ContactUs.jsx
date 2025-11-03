import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>123 Main Street, New York, NY 10001</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@constructco.com</p>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
