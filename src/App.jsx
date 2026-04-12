import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Thinking from './components/Thinking';
import Stack from './components/Stack';
import Cta from './components/Cta';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <WhatIDo />
        <Projects />
        <Thinking />
        <Stack />
        <Cta />
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '2.5rem',
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--border)',
        fontSize: '0.9rem',
        background: 'var(--white)'
      }}>
        <p>&copy; {new Date().getFullYear()} Nishant Singh. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
