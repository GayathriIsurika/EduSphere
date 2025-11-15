import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <section className="hero-section">
        <div className="hero-content">
          <p className="tagline">Stop Learning the Old Way.</p>

          <h1 className="hero-heading">
            The Personalized AI <span className="accent-text">Tutor</span> Built for Your Success.
          </h1>

          <p className="hero-description">
            Get unlimited, on-demand support and a custom curriculum that adapts to your pace and goals—not a textbook schedule.
          </p>

          <div className="cta-group">
            <a href="#" className="btn btn-primary">Start Your Free Trial Today</a>
            <a href="#" className="btn btn-secondary">Watch a 1-Minute Demo</a>
          </div>

          <p className="trust-signal">Trusted by 50,000+ students succeeding with EduSphere.</p>
        </div>

        <div className="hero-visual">
          <img src={`${process.env.PUBLIC_URL}/placeholder-ai-illustration.svg`} alt="AI Powered Education Illustration" />
        </div>
      </section>
    </div>
  );
}

export default App;
