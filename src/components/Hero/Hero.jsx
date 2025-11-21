import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Creating Cinematic Experiences That Captivate</h1>
          <p>We are a premier video production studio specializing in cinematic storytelling, commercial production, and brand films that leave lasting impressions.</p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn">View Our Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;