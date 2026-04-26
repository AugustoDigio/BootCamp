import React from 'react'
import './About.css'

const stackItems = [
  { name: 'React',       color: '#61DAFB', icon: '⚛️' },
  { name: 'Node.js',    color: '#84CC16', icon: '🟢' },
  { name: 'JavaScript', color: '#F7DF1E', icon: '𝐉𝐒' },
  { name: 'MongoDB',    color: '#4DB33D', icon: '🍃' },
  { name: 'Express',    color: '#00E5B0', icon: '▶' },
  { name: 'HTML5',      color: '#E34F26', icon: '🔶' },
  { name: 'CSS3',       color: '#2965F1', icon: '🔷' },
  { name: 'Bootstrap',  color: '#7952B3', icon: '🅱' },
  { name: 'Git',        color: '#F05032', icon: '⑂' },
  { name: 'Figma',      color: '#F24E1E', icon: '✦' },
  { name: 'Vercel',     color: '#E8EDF5', icon: '▲' },
  { name: 'Handlebars', color: '#F7921E', icon: '🔧' },
]

const carouselItems = [...stackItems, ...stackItems]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <p className="section-label">Sobre mí</p>
          <h2 className="section-title">Construyo cosas<br />para la web.</h2>

          <div className="about__body">
            <p>
              Soy un desarrollador fullstack de Buenos Aires, Argentina. Vengo del diseño UX/UI
              y hoy construyo aplicaciones web completas — desde la interfaz hasta la base de datos.
            </p>
            <p>
              Actualmente estoy cursando la <strong>Tecnicatura en Análisis y Gestión de Datos</strong> en
              la UBA y un bootcamp de desarrollo web fullstack, mientras exploro el mundo del
              <strong> análisis de datos</strong> aplicado a fintech y finanzas.
            </p>
            <p>
              Lo que me diferencia: entiendo tanto el lado visual como el técnico.
              Puedo pensar en la experiencia del usuario y a la vez construir el backend que la hace funcionar.
            </p>
          </div>
        </div>

        <div className="about__right">
          <div className="about__card">
            <div className="about__card-label">Stack principal</div>
            <div className="about__stack">
              {stackItems.map(({ name, color }) => (
                <span key={name} className="about__tag" style={{ '--tag-color': color }}>
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-label">Actualmente aprendiendo</div>
            <div className="about__stack">
              {['SQL', 'Python', 'Power BI', 'Data Analytics'].map(name => (
                <span key={name} className="about__tag about__tag--learning">{name}</span>
              ))}
            </div>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">2+</span>
              <span className="about__stat-label">Proyectos fullstack</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">3</span>
              <span className="about__stat-label">Años estudiando tech</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">BA</span>
              <span className="about__stat-label">Buenos Aires, AR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
