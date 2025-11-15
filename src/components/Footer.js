import React from 'react';
import { Brain } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Brain className="logo-icon" />
              <span>EduSphere</span>
            </div>
            <p className="footer-tagline">The Future of Education</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>edusphere@gmail.com</p>
            <p>+94 71 883 2642</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#for-tutors">For Tutors</a>
            <a href="#about">About Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 EduSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;