import React, { useRef } from 'react';
import { useMouseTilt } from '../hooks/useMouseTilt';
import './WhatIDo.css';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="m9 9 5 5M9 14l5-5"/>
      </svg>
    ),
    tag: "Full-Stack",
    title: "End-to-end Product Engineering",
    desc: "From pixel-perfect React UIs to battle-hardened Node.js APIs — I own the full stack. Authentication, state, databases, deployment.",
    highlights: ["React / Next.js Frontends", "Node.js & NestJS Backends", "PostgreSQL & MongoDB", "REST API Design"]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    tag: "Automation",
    title: "Workflow Automation Systems",
    desc: "I eliminate bottlenecks. Custom automation tools, scheduled pipelines, data processors, and smart integrations that run while you sleep.",
    highlights: ["Automated Data Pipelines", "File Processing (Excel, CSV)", "API Integrations", "Background Job Systems"]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    tag: "UI Engineering",
    title: "Clean, Conversion-Focused UI",
    desc: "Design-aware development. I build interfaces that are not just functional but feel premium — with micro-interactions and clean component systems.",
    highlights: ["Responsive Design Systems", "Component Architecture", "Micro-animations", "Performance Optimization"]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
      </svg>
    ),
    tag: "Enterprise",
    title: "Enterprise-Grade Reliability",
    desc: "Complex ERP modules, large-scale data handling, multipart uploads, and crash prevention. Systems that hold up when load spikes.",
    highlights: ["Large File Handling (S3)", "Dynamic Filtering & Tables", "Memory Optimization", "Error Resilience"]
  }
];

const ServiceCard = ({ s, i }) => {
  const tiltRef = useMouseTilt({ maxTilt: 8, perspective: 1000, scale: 1.02 });
  
  return (
    <div ref={tiltRef} className={`service-card card reveal reveal-delay-${i + 1}`}>
      <div className="card-glare" />
      <div className="service-icon">{s.icon}</div>
      <span className="chip service-tag">{s.tag}</span>
      <h3 className="display-sm service-title">{s.title}</h3>
      <p className="service-desc">{s.desc}</p>
      <ul className="service-highlights">
        {s.highlights.map((h, j) => (
          <li key={j}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
};

const WhatIDo = () => {
  return (
    <section className="what-section section" id="what-i-do">
      <div className="container">
        <div className="section-header">
          <span className="label reveal">What I Do</span>
          <h2 className="display-lg reveal reveal-delay-1">
            From idea to production — <span className="text-gradient">I handle it all.</span>
          </h2>
          <p className="reveal reveal-delay-2">
            Not a task executor. I'm a product thinker who writes clean code, spots architectural issues early, and builds systems built to last.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
