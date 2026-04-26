import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h, particles;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 176, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x, dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 176, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__content container">
        <div className="hero__pre">
          <span className="hero__pre-line" />
          <span className="hero__pre-text">Hola, soy</span>
        </div>

        <h1 className="hero__name">Augusto<br />Di Giovambattista</h1>

        <div className="hero__role">
          <span className="hero__role-bracket">{`{`}</span>
          <span className="hero__role-text">Fullstack Developer</span>
          <span className="hero__role-bracket">{`}`}</span>
        </div>

        <p className="hero__desc">
          Construyo productos web de punta a punta — desde la interfaz hasta el servidor.
          Especializado en <em>React</em>, <em>Node.js</em> y <em>MongoDB</em>,
          con foco en fintech y experiencias digitales que realmente funcionan.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            Ver proyectos
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">Contacto</a>
        </div>

        <div className="hero__links">
          <a href="https://github.com/AugustoDigio" target="_blank" rel="noreferrer" className="hero__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/augusto-di-giovambattista" target="_blank" rel="noreferrer" className="hero__social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero__avatar">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__avatar-svg">
          <defs>
            <radialGradient id="avatarGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#1A2F45"/>
              <stop offset="100%" stopColor="#0D1117"/>
            </radialGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4956A"/>
              <stop offset="100%" stopColor="#B87A52"/>
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5B0"/>
              <stop offset="100%" stopColor="#00AEFF"/>
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle cx="100" cy="100" r="96" fill="url(#avatarGrad)" stroke="#1E2D40" strokeWidth="2"/>

          {/* Decorative ring */}
          <circle cx="100" cy="100" r="90" stroke="#00E5B0" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3"/>

          {/* Body / shirt */}
          <ellipse cx="100" cy="175" rx="52" ry="38" fill="url(#shirtGrad)" opacity="0.9"/>
          <ellipse cx="100" cy="165" rx="38" ry="28" fill="url(#shirtGrad)"/>

          {/* Neck */}
          <rect x="90" y="128" width="20" height="20" rx="4" fill="url(#skinGrad)"/>

          {/* Head */}
          <ellipse cx="100" cy="108" rx="34" ry="36" fill="url(#skinGrad)"/>

          {/* Hair */}
          <ellipse cx="100" cy="78" rx="34" ry="20" fill="#1A1A2E"/>
          <ellipse cx="100" cy="72" rx="30" ry="16" fill="#252545"/>
          {/* Hair detail */}
          <path d="M70 88 Q80 72 100 70 Q120 72 130 88" stroke="#1A1A2E" strokeWidth="8" fill="none" strokeLinecap="round"/>

          {/* Eyes */}
          <ellipse cx="88" cy="108" rx="5" ry="6" fill="#1A1A2E"/>
          <ellipse cx="112" cy="108" rx="5" ry="6" fill="#1A1A2E"/>
          <circle cx="89" cy="107" r="1.5" fill="white"/>
          <circle cx="113" cy="107" r="1.5" fill="white"/>

          {/* Eyebrows */}
          <path d="M83 100 Q88 97 93 100" stroke="#1A1A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M107 100 Q112 97 117 100" stroke="#1A1A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          {/* Nose */}
          <path d="M100 112 Q97 120 100 122 Q103 120 100 112" fill="#C07A52" opacity="0.6"/>

          {/* Smile */}
          <path d="M91 128 Q100 135 109 128" stroke="#9A6040" strokeWidth="2" fill="none" strokeLinecap="round"/>

          {/* Ears */}
          <ellipse cx="66" cy="110" rx="5" ry="7" fill="url(#skinGrad)"/>
          <ellipse cx="134" cy="110" rx="5" ry="7" fill="url(#skinGrad)"/>

          {/* Laptop hint at bottom */}
          <rect x="60" y="175" width="80" height="6" rx="2" fill="#1E2D40" opacity="0.8"/>
          <rect x="55" y="181" width="90" height="3" rx="1.5" fill="#151C26" opacity="0.8"/>

          {/* Code symbol on shirt */}
          <text x="100" y="162" textAnchor="middle" fill="rgba(8,12,16,0.5)" fontSize="12" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
        </svg>

        <div className="hero__avatar-glow" />
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
