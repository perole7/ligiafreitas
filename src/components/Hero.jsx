import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">
            <Sparkles size={16} />
            <span>Biomédica Esteta</span>
          </div>
          
          <h1>Realço a sua beleza <span>sem perder a sua essência.</span></h1>
          
          <p className="hero-subtitle">
            Descubra a melhor versão de si mesma com tratamentos exclusivos de harmonização facial e corporal liderados pela Dra. Lígia de Freitas.
          </p>
          
          <div className="hero-actions">
            <a href="https://wa.me/5531986976349" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agende sua Avaliação
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-outline">
              Nossos Serviços
            </a>
          </div>
        </div>
        
        <div className="hero-image-container animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="hero-image-card glass-panel">
            <img src="/assets/ligia_hero.png" alt="Dra. Lígia de Freitas Souza" className="hero-profile-img" />
          </div>
          
          <div className="floating-card experience-card glass-panel">
            <span className="stat">CRBM3</span>
            <span className="label">25995</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
