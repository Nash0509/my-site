import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo">
          <span className="logo-dot" />
          Nishant Singh
        </a>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#what-i-do" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Stack</a>
          <a href="#thinking" className="nav-link" onClick={() => setMenuOpen(false)}>Process</a>
        </nav>

        <div className="nav-actions">
          <a href="#cta" className="btn btn-primary btn-nav">Hire Me</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Nav;
