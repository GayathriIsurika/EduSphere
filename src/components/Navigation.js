import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ onSignIn, onSignUp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <Brain className="logo-icon" />
            <span className="logo-text">EduSphere</span>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#for-tutors" onClick={() => setMobileMenuOpen(false)}>For Tutors</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          </div>

          <div className="nav-buttons">
            <button className="btn-outlined" onClick={onSignIn}>Sign In</button>
            <button className="btn-solid" onClick={onSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;