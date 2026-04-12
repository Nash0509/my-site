import React from 'react';
import './Cta.css';
import { LinkedinIcon, GithubIcon } from './Icons';

const Cta = () => {
  return (
    <section className="cta-section section" id="cta">
      <div className="container">
        <div className="cta-box card reveal">
          <div className="cta-bg-glow"></div>
          <div className="cta-content">
            <h2 className="display-lg">
              Let's build something <span className="text-gradient">scalable.</span>
            </h2>
            <p className="cta-sub">
              Whether you need to scale an existing system, automate a complex workflow, or build a product from scratch — I bring engineering rigor and an eye for design.
            </p>
            
            <div className="cta-actions">
              <a href="mailto:nishantsinghworkshard@gmail.com" className="btn btn-primary btn-3d">
                <span className="btn-3d-text">Book a Consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <div className="cta-socials">
                <a href="https://www.linkedin.com/in/nishant0509" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://github.com/nash0509" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>
            
            <div className="cta-meta">
              <span className="availability">
                <span className="badge-dot"></span> Currently accepting new clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
