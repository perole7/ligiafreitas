import React from 'react';
import './Results.css';

const Results = () => {
  const images = [
    { id: 1, title: 'Resultados de Tratamentos Estéticos', src: '/assets/result_1.png' },
    { id: 2, title: 'Harmonização Facial Individualizada', src: '/assets/result_2.png' },
    { id: 3, title: 'Procedimentos Faciais e Corporais', src: '/assets/result_3.png' },
    { id: 4, title: 'Protocolos de Alta Performance', src: '/assets/result_4.png' },
    { id: 5, title: 'Evolução e Resultados Clínicos', src: '/assets/result_5.png' },
    { id: 6, title: 'Estética Avançada Dra. Lígia', src: '/assets/result_6.png' },
  ];

  return (
    <section id="results" className="results section-bg-alt">
      <div className="container">
        <h2>Resultados de Sucesso</h2>
        <p className="text-center mb-4" style={{maxWidth: '600px', margin: '0 auto 4rem auto'}}>
          Confira abaixo alguns dos resultados obtidos nos tratamentos desenvolvidos pela Dra. Lígia Freitas, valorizando a harmonia e o contorno corporal e facial.
        </p>
        
        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="gallery-item glass-panel">
              <div className="gallery-image-wrapper">
                <img src={img.src} alt={img.title} className="gallery-img-real" />
              </div>
              <div className="gallery-overlay">
                <h4>{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{marginTop: '4rem'}}>
          <a href="https://www.instagram.com/centroesteticoligiafreitas1/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
