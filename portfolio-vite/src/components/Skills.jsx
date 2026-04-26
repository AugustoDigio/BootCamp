import React from 'react'
import './Skills.css'

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
  { name: 'SQL',        color: '#00AEFF', icon: '🗄️' },
  { name: 'Python',     color: '#3776AB', icon: '🐍' },
  { name: 'Power BI',   color: '#F2C811', icon: '📊' },
]

const row1 = [...stackItems, ...stackItems]
const row2 = [...stackItems].reverse()
const row2doubled = [...row2, ...row2]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">Habilidades</p>
        <h2 className="section-title">Mi stack técnico</h2>
      </div>

      <div className="skills__carousel-wrap">
        {/* Row 1 — left to right */}
        <div className="skills__fade skills__fade--left" />
        <div className="skills__fade skills__fade--right" />

        <div className="skills__track skills__track--fwd">
          {row1.map((item, i) => (
            <div key={i} className="skills__card" style={{ '--c': item.color }}>
              <span className="skills__icon">{item.icon}</span>
              <span className="skills__name">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 — right to left */}
        <div className="skills__track skills__track--rev">
          {row2doubled.map((item, i) => (
            <div key={i} className="skills__card" style={{ '--c': item.color }}>
              <span className="skills__icon">{item.icon}</span>
              <span className="skills__name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="skills__learning">
          <div className="skills__learning-label">
            <span className="skills__learning-dot" />
            Aprendiendo ahora
          </div>
          <div className="skills__learning-tags">
            {['SQL', 'Python (pandas)', 'Power BI', 'Análisis de datos', 'Estadística aplicada'].map(s => (
              <span key={s} className="skills__learning-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
