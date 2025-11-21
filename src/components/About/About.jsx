import React from "react";
import "./About.css";

const About = () => {
  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "15+", label: "Industry Awards" },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Nomad Studio</h2>
            <p>
              Founded in 2015, Nomad Studio has grown from a small creative
              collective to a full-service video production company with a
              reputation for excellence.
            </p>
            <p>
              Our team of directors, cinematographers, editors, and producers
              collaborate to create compelling visual stories that resonate with
              audiences and deliver measurable results for our clients.
            </p>
            <p>
              We believe in the power of storytelling to connect, inspire, and
              drive change. Every project we undertake is approached with
              creativity, technical expertise, and a commitment to exceeding
              expectations.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Our Studio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
