import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="logo">
        <img src="/images/logo-placeholder.svg" alt="Company Logo" />
        <span>Company Name</span>
      </div>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Markets</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="search-icon">
        <img src="/images/search-icon.svg" alt="Search" />
      </div>
    </header>
  );
};

export default Header;
