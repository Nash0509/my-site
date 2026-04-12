import React from 'react';
import './Stack.css';

const categories = [
  {
    title: "Frontend Engineering",
    skills: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express", "NestJS", "Fastify", "REST APIs", "Socket.io"],
  },
  {
    title: "Data & Storage",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "AWS S3", "Redis"],
  },
  {
    title: "Workflow & Tooling",
    skills: ["Git / GitHub", "Docker", "Vercel", "DigitalOcean", "Jest"],
  }
];

const Stack = () => {
  return (
    <section className="stack-section section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="label reveal">The Stack</span>
          <h2 className="display-lg reveal reveal-delay-1">
            Tools of the <span className="text-gradient">Trade.</span>
          </h2>
          <p className="reveal reveal-delay-2">
            I don't just learn frameworks; I understand the underlying patterns. I pick the right tool for the job to optimize for performance, maintainability, and delivery speed.
          </p>
        </div>

        <div className="stack-grid">
          {categories.map((cat, i) => (
            <div key={i} className={`stack-card card reveal reveal-delay-${i + 1}`}>
              <h3 className="stack-title">{cat.title}</h3>
              <div className="stack-items">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="stack-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
