import React from 'react';
import './Results.css';

const Results = () => {
  const images = [
    { id: 1, title: 'Harmonização Facial', src: '/assets/result_1.png' },
    { id: 2, title: 'Preenchimento Labial', src: '/assets/result_2.png' },
    { id: 3, title: 'Preenchimento de Mandíbula', src: '/assets/result_3.png' },
    { id: 4, title: 'Toxina Botulínica (Botox)', src: '/assets/result_4.png' },
    { id: 5, title: 'Bioestimulador de Colágeno', src: '/assets/result_5.png' },
    { id: 6, title: 'Rinomodelação', src: '/assets/result_6.png' },
    { id: 7, title: 'Lipo de Papada Enzimática', src: '/assets/result_7.png' },
    { id: 8, title: 'Preenchimento de Olheiras', src: '/assets/result_8.png' },
    { id: 9, title: 'Preenchimento Malar', src: '/assets/result_9.png' },
    { id: 10, title: 'Peeling Químico', src: '/assets/result_10.png' },
    { id: 11, title: 'Skinbooster (Hidratação)', src: '/assets/result_11.png' },
    { id: 12, title: 'Fios de Sustentação', src: '/assets/result_12.png' },
    { id: 13, title: 'Microagulhamento (IPCA)', src: '/assets/result_13.png' },
    { id: 14, title: 'Tratamento Corporal Celulite', src: '/assets/result_14.png' },
    { id: 15, title: 'Protocolo de Rejuvenescimento', src: '/assets/result_15.png' },
  ];

  return (
    <section id="results" className="results section-bg-alt">
      <div className="container">
        <h2>Resultados de Sucesso</h2>
        <p className="text-center mb-4" style={{maxWidth: '600px', margin: '0 auto 4rem auto'}}>
          Confira abaixo alguns dos procedimentos e resultados obtidos na clínica da Dra. Lígia Freitas, unindo sofisticação e saúde para realçar a sua beleza.
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
          <a href="https://www.instagram.com/centroesteticoligiafreitas1/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
