import React from 'react';
import { CheckCircle } from 'lucide-react';
import './ForTutorsSection.css';

const ForTutorsSection = () => {
  const benefits = [
    "Grow your client base",
    "Manage your schedule",
    "Secure, on-time payments"
  ];

  return (
    <section className="section cta-section" id="for-tutors">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Join Sri Lanka's Most Advanced Tuition Platform</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <CheckCircle className="check-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <button className="btn-solid btn-lg">Apply to Become a Tutor</button>
        </div>
      </div>
    </section>
  );
};

export default ForTutorsSection;