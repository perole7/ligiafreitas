import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          Dra. Lígia <span>Freitas</span>
        </a>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>História</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
          <a href="#results" onClick={() => setIsMobileMenuOpen(false)}>Resultados</a>
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setIsMobileMenuOpen(false)}>
            Agendar
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
