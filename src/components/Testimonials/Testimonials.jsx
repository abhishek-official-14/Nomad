import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>Hear what our clients have to say about working with us</p>
        </div>
        <div className="testimonials-slider">
          <div className="testimonial-item">
            <p className="testimonial-text">
              "Working with Nomad Studio was an absolute pleasure. They
              understood our vision from day one and delivered a final product
              that exceeded our expectations. The attention to detail and
              creative approach made all the difference."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
                />
              </div>
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <p>Marketing Director, TechGlobal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
