import React from 'react';
import { Sparkles, Activity, BookOpen } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Harmonização Facial',
      description: 'Procedimentos como preenchimento labial, botox e bioestimuladores para realçar seus traços de forma natural.',
      icon: <Sparkles size={32} />
    },
    {
      id: 2,
      title: 'Estética Corporal',
      description: 'Tratamentos avançados para gordura localizada, flacidez e celulite, promovendo bem-estar e autoestima.',
      icon: <Activity size={32} />
    },
    {
      id: 3,
      title: 'Mentoria para Profissionais',
      description: 'Cursos e mentorias VIP para profissionais que desejam elevar o nível dos seus atendimentos e resultados.',
      icon: <BookOpen size={32} />
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Meus Serviços</h2>
        <p className="text-center mb-4" style={{maxWidth: '600px', margin: '0 auto 4rem auto'}}>
          Protocolos exclusivos e tratamentos de alta tecnologia para entregar os melhores resultados, sempre focando na sua segurança e satisfação.
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card glass-panel">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Saber mais <span>→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
