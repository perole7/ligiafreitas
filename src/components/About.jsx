import React from 'react';
import { Award, Heart, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-bg-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card glass-panel">
              <img src="/assets/ligia_about.png" alt="Dra. Lígia de Freitas" className="about-profile-img" />
            </div>
            <div className="experience-badge">
              <span>+</span>
              <p>Experiência e <br/>Excelência</p>
            </div>
          </div>
          
          <div className="about-content">
            <h2>Sua Beleza em Boas Mãos</h2>
            <h3 className="about-title">Dra. Lígia de Freitas Souza</h3>
            <p className="about-bio">
              Sou biomédica esteta apaixonada por transformar vidas através do autocuidado. 
              Minha missão é realçar o que você tem de melhor, respeitando seus traços únicos 
              e preservando a sua essência.
            </p>
            <p className="about-bio">
              Trabalho com protocolos personalizados de harmonização facial e corporal, 
              sempre com foco na naturalidade e na saúde da sua pele.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div>
                  <h4>Especialista</h4>
                  <p>Biomédica Esteta (CRBM3 25995)</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4>Segurança</h4>
                  <p>Produtos premium e protocolos seguros</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <Heart size={24} />
                </div>
                <div>
                  <h4>Mentoria</h4>
                  <p>Capacitação para profissionais da área</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
