import React from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Dra. Lígia de Freitas Souza</h2>
            <p className="contact-badge-footer">Biomédica Estéta — CRBM3 25995</p>
            <p className="contact-bio">
              "Realço a sua beleza sem perder a sua essência." 
              Procedimentos de harmonização facial e corporal personalizados para você.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>Rua Equador, N° 370, Cal de Baixo, Coronel Fabriciano, MG</span>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <span>(31) 98697-6349 / (31) 3367-8911</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.instagram.com/centroesteticoligiafreitas1/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="Instagram">
                📸 @centroesteticoligiafreitas1
              </a>
            </div>
          </div>
          
          <div className="contact-cta glass-panel">
            <h3>Agende sua Avaliação</h3>
            <p>Entre em contato pelo WhatsApp e reserve seu horário para atendimento personalizado.</p>
            <a href="https://wa.me/5531986976349" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
              Falar no WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Centro Estético Lígia de Freitas Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
