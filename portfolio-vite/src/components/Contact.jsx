import React from 'react'
import './Contact.css'

const LINKEDIN_DM = 'https://www.linkedin.com/messaging/compose/?recipient=augusto-di-giovambattista'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Contacto</p>
        <h2 className="section-title">¿Hablamos?</h2>

        <div className="contact__inner">

          {/* Left: description + links */}
          <div className="contact__left">
            <p className="contact__desc">
              Estoy buscando mi primera experiencia profesional en desarrollo web o datos.
              Si tenés un proyecto, una pasantía o una oportunidad, escribime.
            </p>

            <div className="contact__links">
              <a href="mailto:augusto.digiovambattista@gmail.com" className="contact__item">
                <div className="contact__item-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__item-label">Email</div>
                  <div className="contact__item-value">augudigio@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/augusto-di-giovambattista" target="_blank" rel="noreferrer" className="contact__item">
                <div className="contact__item-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__item-label">LinkedIn</div>
                  <div className="contact__item-value">augusto-di-giovambattista</div>
                </div>
              </a>

              <a href="https://github.com/AugustoDigio" target="_blank" rel="noreferrer" className="contact__item">
                <div className="contact__item-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__item-label">GitHub</div>
                  <div className="contact__item-value">AugustoDigio</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="contact__right">
            <div className="contact__cta">
              <div className="contact__cta-icon">💼</div>
              <h3 className="contact__cta-title">Abierto a oportunidades</h3>
              <p className="contact__cta-desc">
                Busco pasantías o posiciones junior en <strong>desarrollo web</strong> o <strong>análisis de datos</strong>.
                Disponible para trabajo remoto o en Buenos Aires.
              </p>
              <div className="contact__badges">
                <span className="contact__badge">🟢 Disponible ahora</span>
                <span className="contact__badge">🌎 Remoto / AR</span>
                <span className="contact__badge">📊 Fintech / Tech</span>
              </div>
              <a href={LINKEDIN_DM} target="_blank" rel="noreferrer" className="contact__send">
                Enviar mensaje
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="contact__footer">
        <span>Diseñado y construido por Augusto Di Giovambattista</span>
        <span className="contact__footer-dot">·</span>
        <span>Buenos Aires, Argentina · {new Date().getFullYear()}</span>
      </div>
    </section>
  )
}
