import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Markets from './components/Markets';
import FeaturedProjects from './components/FeaturedProjects';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Markets />
        <FeaturedProjects />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
