import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'TechBrand Commercial',
      description: '60-second spot for a leading technology company'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Overview',
      description: 'Brand film for a global financial services firm'
    },
    {
      image: 'https://images.unsplash.com/photo-1514525253161-9a55d707c9fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Indie Artist Music Video',
      description: 'Cinematic music video for an emerging artist'
    },
    {
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Product Launch Event',
      description: 'Multi-camera coverage of a major product launch'
    },
    {
      image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Environmental Documentary',
      description: 'Short documentary on sustainability initiatives'
    },
    {
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Brand Film',
      description: 'Elegant brand story for a high-end fashion label'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>Explore our recent work and see how we've helped brands tell their stories</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;