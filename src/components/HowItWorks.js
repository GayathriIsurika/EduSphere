import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Get Matched",
      description: "Tell us your needs. Our AI instantly matches you with the perfect, verified tutor for O/L or A/L subjects."
    },
    {
      number: "2",
      title: "Learn & Track",
      description: "Use our integrated virtual classroom. Parents can track academic progress with real-time reports."
    },
    {
      number: "3",
      title: "Pay Securely",
      description: "No more cash. All payments and scheduling are handled safely through our secure escrow system."
    }
  ];

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;