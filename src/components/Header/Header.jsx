import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''} id="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <i className="fas fa-film"></i>
          No<span>Mad</span>
        </a>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={isMenuActive ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        <nav className={isMenuActive ? 'active' : ''} id="nav">
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;