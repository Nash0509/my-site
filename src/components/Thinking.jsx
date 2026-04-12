import React from 'react';
import './Thinking.css';

const Thinking = () => {
  return (
    <section className="thinking-section section" id="thinking">
      <div className="container">
        <div className="thinking-grid">
          <div className="thinking-content">
            <span className="label reveal">The Mindset</span>
            <h2 className="display-lg reveal reveal-delay-1">
              Code is just a tool.<br />
              <span className="text-gradient">Value is the goal.</span>
            </h2>
            <p className="thinking-text reveal reveal-delay-2">
              I don't write code just to write code. I engineer solutions that solve real business bottlenecks. My process prioritizes automation, preventing technical debt, and designing interfaces that users inherently understand.
            </p>
            <div className="thinking-points reveal reveal-delay-3">
              <div className="point">
                <div className="point-icon">01</div>
                <div>
                  <h4>Build for the User</h4>
                  <p>Design is how it works. A clean UI reduces friction and drives conversion.</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">02</div>
                <div>
                  <h4>Automate the Rest</h4>
                  <p>If a task is repetitive, script it. Humans should focus on strategy, machines on execution.</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">03</div>
                <div>
                  <h4>Expect the Worst</h4>
                  <p>Backends fail, DBs lock, networks drop. I write resilient architectures that handle the edge cases.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="thinking-visual reveal reveal-delay-4">
            <div className="visual-card">
              <div className="visual-metric">
                <span className="metric-label">System Uptime Target</span>
                <span className="metric-value text-gradient">99.99%</span>
              </div>
              <div className="visual-graph">
                  <div className="bar" style={{height: '40%'}}></div>
                  <div className="bar" style={{height: '60%'}}></div>
                  <div className="bar" style={{height: '30%'}}></div>
                  <div className="bar" style={{height: '80%'}}></div>
                  <div className="bar" style={{height: '50%'}}></div>
                  <div className="bar" style={{height: '90%'}}></div>
                  <div className="bar" style={{height: '100%', background: 'var(--accent-start)'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thinking;
