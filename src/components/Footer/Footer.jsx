import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Nomad Studio</h3>
            <p>
              Creating cinematic experiences that captivate audiences and drive
              results for brands worldwide.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-vimeo-v"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Commercial Production</a>
              </li>
              <li>
                <a href="#">Corporate Videos</a>
              </li>
              <li>
                <a href="#">Brand Films</a>
              </li>
              <li>
                <a href="#">Music Videos</a>
              </li>
              <li>
                <a href="#">Post-Production</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Nomad Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
