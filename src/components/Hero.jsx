import React from 'react';
import { useMouseTilt } from '../hooks/useMouseTilt';
import './Hero.css';

const Hero = () => {
  const tiltRef = useMouseTilt({ maxTilt: 5, perspective: 1200, scale: 1 });

  return (
    <section className="hero-section" id="home">
      {/* Animated mesh background wrapped in 3D parallax */}
      <div className="hero-bg-container" ref={tiltRef}>
        <div className="hero-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="grid-overlay" />
        </div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge chip reveal">
          <span className="badge-dot" />
          Open to freelance & contract work
        </div>

        <h1 className="display-xl hero-headline reveal reveal-delay-1">
          Software that <span className="text-gradient">scales.</span>
          <br />
          Interfaces that <span className="text-gradient">convert.</span>
        </h1>

        <p className="hero-sub reveal reveal-delay-2">
          I engineer full-stack products trusted in production — from clean React frontends 
          to resilient Node.js backends, automation systems, and enterprise-grade data pipelines.
        </p>

        <div className="hero-ctas reveal reveal-delay-3">
          <a href="#projects" className="btn btn-primary">
            See My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#cta" className="btn btn-ghost">Hire Me</a>
        </div>

        <div className="hero-stats reveal reveal-delay-4">
          <div className="stat">
            <span className="stat-num">4+</span>
            <span className="stat-label">Production Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">1</span>
            <span className="stat-label">Goal: Ship Value</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
