import React, { useState } from 'react';
import './Nav.css';

const links = ['About', 'Projects', 'Skills', 'Contact'];

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-bracket">&lt;</span>
          ADG
          <span className="nav__logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                <span className="nav__link-num">{String(links.indexOf(link) + 1).padStart(2, '0')}.</span>
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/AugustoDigio"
              target="_blank"
              rel="noreferrer"
              className="nav__cta"
            >
              GitHub
            </a>
          </li>
        </ul>

        <button className={`nav__burger ${open ? 'nav__burger--open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
