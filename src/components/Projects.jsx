import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: "buynest",
    tag: "E-Commerce",
    title: "Buynest",
    tagline: "A storefront that converts.",
    description: "Full-featured e-commerce platform with product discovery, cart management, user profiles, and image handling. Built for performance and designed to feel premium.",
    features: ["Product catalog & search", "Cart & checkout flows", "User profiles & auth (JWT)", "Image upload & optimized delivery"],
    tech: ["React", "Node.js", "MongoDB", "Redux", "AWS S3"],
    color: "#4f46e5",
    accent: "rgba(79,70,229,0.08)"
  },
  {
    id: "social",
    tag: "Social Platform",
    title: "Threadly",
    tagline: "Real-time social at scale.",
    description: "Instagram-inspired social network with a fully async notification engine, scalable post feeding algorithm, and real-time-like interactions — all on a production-grade backend.",
    features: ["Post feed with like & follow", "Real-time notification system", "Scalable backend architecture", "User discovery & search"],
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    color: "#7c3aed",
    accent: "rgba(124,58,237,0.08)"
  },
  {
    id: "erp",
    tag: "Enterprise",
    title: "Enterprise ERP Suite",
    tagline: "Heavy data, handled right.",
    description: "Complex business management system. Dynamic tables, advanced multi-column filtering, large Excel imports, and multipart file uploads — engineered to stay stable under extreme load.",
    features: ["Dynamic filtered data tables", "Excel / CSV mass import", "Multipart large file uploads", "Crash-resilient request handling"],
    tech: ["Next.js", "NestJS", "MySQL", "AWS S3", "Fastify"],
    color: "#059669",
    accent: "rgba(5,150,105,0.08)"
  },
  {
    id: "youtube",
    tag: "Streaming",
    title: "ViewStream",
    tagline: "Video, without the lag.",
    description: "YouTube-inspired streaming platform with smooth chunked video playback, watch history engine, channel management, and a performant recommendation feed.",
    features: ["Chunked video streaming", "Watch history tracking", "Channel & profile system", "Recommendation feed"],
    tech: ["React", "Express", "PostgreSQL", "Cloudinary", "FFmpeg"],
    color: "#dc2626",
    accent: "rgba(220,38,38,0.08)"
  }
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="label reveal">Selected Work</span>
          <h2 className="display-lg reveal reveal-delay-1">
            Products I've <span className="text-gradient">shipped.</span>
          </h2>
          <p className="reveal reveal-delay-2">
            Each project is a real-world system, not a tutorial clone. Built with production constraints, performance requirements, and real users in mind.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-row reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--p-color': p.color, '--p-accent': p.accent }}
            >
              <div className="project-left">
                <div className="project-meta">
                  <span className="project-tag" style={{ color: p.color, background: p.accent }}>
                    {p.tag}
                  </span>
                  <span className="project-number">0{i + 1}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-tagline">{p.tagline}</p>
                <p className="project-desc">{p.description}</p>

                <div className="project-tech-row">
                  {p.tech.map((t, j) => (
                    <span key={j} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-right">
                <div className="project-mockup" style={{ background: p.accent }}>
                  <div className="mockup-bar">
                    <span /><span /><span />
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-title" style={{ background: p.color }} />
                    <div className="mockup-lines">
                      <span style={{ width: '80%' }} />
                      <span style={{ width: '60%' }} />
                      <span style={{ width: '70%' }} />
                    </div>
                    <div className="mockup-cards">
                      <span style={{ background: `${p.color}22` }} />
                      <span style={{ background: `${p.color}22` }} />
                      <span style={{ background: `${p.color}22` }} />
                    </div>
                  </div>
                </div>

                <ul className="project-features">
                  {p.features.map((f, j) => (
                    <li key={j}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color: p.color}}><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
