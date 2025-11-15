import React from 'react';
import { Brain, BookOpen, Users, User, LogOut } from 'lucide-react';
import './DashboardSidebar.css';

const DashboardSidebar = ({ activeView, setActiveView, onLogout }) => {
  const menuItems = [
    { id: 'student', label: 'Student Dashboard', icon: <BookOpen /> },
    { id: 'parent', label: 'Parent Dashboard', icon: <Users /> },
    { id: 'tutor', label: 'Tutor Dashboard', icon: <User /> }
  ];

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-logo">
        <Brain className="logo-icon" />
        <span>EduSphere</span>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${activeView === item.id ? 'active' : ''}`}
            onClick={() => setActiveView(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
        <button className="sidebar-item logout" onClick={onLogout}>
          <LogOut />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default DashboardSidebar;