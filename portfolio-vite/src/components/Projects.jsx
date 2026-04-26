import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'TechStore',
    subtitle: 'E-commerce fullstack',
    desc: 'Tienda online completa con arquitectura MVC, CRUD de productos, integración con Mercado Pago Checkout Pro y autenticación de usuarios. Deploy en Render con MongoDB Atlas como base de datos en la nube.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Handlebars', 'Bootstrap 5', 'Mercado Pago'],
    type: 'Fullstack',
    color: '#00E5B0',
    github: 'https://github.com/AugustoDigio',
    live: null,
    highlights: ['CRUD completo', 'Pago online', 'Deploy en Render', 'MongoDB Atlas'],
    emoji: '🛒',
  },
  {
    id: 2,
    title: 'Juguetería Cósmica',
    subtitle: 'E-commerce temático',
    desc: 'Tienda de juguetes espaciales con diseño visual inmersivo. Fondo galáctico, productos con imágenes generadas por IA, alta de productos, buscador y navegación multi-página.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Diseño UI'],
    type: 'Frontend',
    color: '#7B61FF',
    github: 'https://github.com/AugustoDigio',
    live: null,
    highlights: ['Diseño temático', 'CRUD frontend', 'Buscador', 'Multi-página'],
    emoji: '🚀',
  },
  {
    id: 3,
    title: 'Proyectos Bootcamp',
    subtitle: 'React · Componentes · Formularios',
    desc: 'Colección de componentes y ejercicios del bootcamp fullstack: formularios controlados con useState, renderizado condicional, listas dinámicas con .map() y props entre componentes.',
    tags: ['React', 'JavaScript', 'CSS', 'Hooks'],
    type: 'React',
    color: '#00AEFF',
    github: 'https://github.com/AugustoDigio',
    live: null,
    highlights: ['useState', 'Props', 'Renderizado condicional', 'Componentes'],
    emoji: '⚛️',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">Proyectos</p>
        <h2 className="section-title">Lo que he construido</h2>

        <div className="projects__grid">
          {projects.map(p => (
            <div
              key={p.id}
              className={`project-card ${active === p.id ? 'project-card--active' : ''}`}
              style={{ '--project-color': p.color }}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="project-card__top">
                <div className="project-card__emoji">{p.emoji}</div>
                <span className="project-card__type">{p.type}</span>
              </div>

              <div className="project-card__glow" />

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__subtitle">{p.subtitle}</p>
              <p className="project-card__desc">{p.desc}</p>

              <div className="project-card__highlights">
                {p.highlights.map(h => (
                  <span key={h} className="project-card__highlight">
                    <span className="project-card__highlight-dot" />
                    {h}
                  </span>
                ))}
              </div>

              <div className="project-card__tags">
                {p.tags.map(tag => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>

              <div className="project-card__actions">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--live">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 2H2v12h12v-4M10 2h4v4M14 2L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects__more">
          <a href="https://github.com/AugustoDigio" target="_blank" rel="noreferrer" className="projects__more-link">
            Ver más en GitHub
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
