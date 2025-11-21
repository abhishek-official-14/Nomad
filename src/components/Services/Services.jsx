import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-video',
      title: 'Commercial Production',
      description: 'Engaging commercials that effectively communicate your brand message and drive results.'
    },
    {
      icon: 'fas fa-film',
      title: 'Corporate Videos',
      description: 'Professional corporate videos that showcase your company\'s values and achievements.'
    },
    {
      icon: 'fas fa-photo-video',
      title: 'Brand Films',
      description: 'Compelling brand stories that connect with your audience on an emotional level.'
    },
    {
      icon: 'fas fa-music',
      title: 'Music Videos',
      description: 'Creative music videos that amplify the artist\'s vision and connect with fans.'
    },
    {
      icon: 'fas fa-broadcast-tower',
      title: 'Live Streaming',
      description: 'High-quality live streaming solutions for events, conferences, and broadcasts.'
    },
    {
      icon: 'fas fa-edit',
      title: 'Post-Production',
      description: 'Expert editing, color grading, VFX, and sound design to polish your content.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We offer a comprehensive range of video production services to bring your vision to life</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;