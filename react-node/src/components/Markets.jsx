import React from 'react';
import './Markets.css';

const marketsData = [
  {
    title: 'Commercial',
    description: 'We build high-quality commercial spaces, from offices to retail centers.',
    imageUrl: '/images/market-commercial.jpg'
  },
  {
    title: 'Industrial',
    description: 'Our industrial projects include warehouses, manufacturing plants, and distribution centers.',
    imageUrl: '/images/market-industrial.jpg'
  },
  {
    title: 'Residential',
    description: 'We construct modern and sustainable residential buildings, from single-family homes to large apartment complexes.',
    imageUrl: '/images/market-residential.jpg'
  }
];

const Markets = () => {
  return (
    <section className="markets">
      <h2>Our Markets</h2>
      <div className="markets-grid">
        {marketsData.map((market, index) => (
          <div className="market-card" key={index}>
            <img src={market.imageUrl} alt={market.title} />
            <div className="market-card-content">
              <h3>{market.title}</h3>
              <p>{market.description}</p>
              <a href="#" className="learn-more-link">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Markets;
