import React from 'react';
import { Brain, Shield, Video, TrendingUp, CreditCard, MessageCircle } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain />,
      title: "AI-Powered Matching",
      description: "Our algorithm finds the best-fit tutor for your unique learning style."
    },
    {
      icon: <Shield />,
      title: "Verified Tutors",
      description: "All tutors are vetted with background and academic checks."
    },
    {
      icon: <Video />,
      title: "Virtual Classroom",
      description: "Integrated live video, whiteboard, and session tools."
    },
    {
      icon: <TrendingUp />,
      title: "Progress Tracking",
      description: "Real-time dashboards for parents and students to see results."
    },
    {
      icon: <CreditCard />,
      title: "Secure Payments",
      description: "100% secure online payments and scheduling."
    },
    {
      icon: <MessageCircle />,
      title: "AI Chatbot Support",
      description: "Instant help for students and tutors, 24/7."
    }
  ];

  return (
    <section className="section features-section">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;