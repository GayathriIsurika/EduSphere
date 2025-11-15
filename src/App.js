import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import ForTutorsSection from './components/ForTutorsSection';
import Footer from './components/Footer';
import DashboardSidebar from './components/DashboardSidebar';
import StudentDashboard from './components/StudentDashboard';
import ParentDashboard from './components/ParentDashboard';
import TutorDashboard from './components/TutorDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dashboardView, setDashboardView] = useState('student');

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="app">
        <Navigation onSignIn={handleSignIn} onSignUp={handleSignIn} />
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <ForTutorsSection />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app dashboard-layout">
      <DashboardSidebar 
        activeView={dashboardView} 
        setActiveView={setDashboardView}
        onLogout={handleLogout}
      />
      <main className="dashboard-main">
        {dashboardView === 'student' && <StudentDashboard />}
        {dashboardView === 'parent' && <ParentDashboard />}
        {dashboardView === 'tutor' && <TutorDashboard />}
      </main>
    </div>
  );
}

export default App;