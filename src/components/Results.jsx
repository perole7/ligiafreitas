import React from 'react';
import { Camera } from 'lucide-react';
import './Results.css';

const Results = () => {
  const images = [
    { id: 1, title: 'Harmonização Facial - Antes e Depois' },
    { id: 2, title: 'Preenchimento Labial' },
    { id: 3, title: 'Bioestimulador de Colágeno' },
    { id: 4, title: 'Estética Corporal' },
  ];

  return (
    <section id="results" className="results section-bg-alt">
      <div className="container">
        <h2>Resultados Reais</h2>
        <p className="text-center mb-4" style={{maxWidth: '600px', margin: '0 auto 4rem auto'}}>
          Acompanhe algumas de nossas transformações. Cada protocolo é único, planejado para valorizar a sua beleza com segurança e excelência.
        </p>
        
        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="gallery-item glass-panel">
              <div className="gallery-placeholder">
                <Camera size={32} />
                <p>Inserir Imagem {img.id}</p>
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
