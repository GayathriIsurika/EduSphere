import React from 'react';
import { Calendar, BarChart3, Users, Clock } from 'lucide-react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const upcomingClasses = [
    { id: 1, subject: "O/L Mathematics", tutor: "Mr. Perera", time: "Today, 4:00 PM" },
    { id: 2, subject: "O/L Science", tutor: "Ms. Silva", time: "Tomorrow, 3:00 PM" },
    { id: 3, subject: "A/L Chemistry", tutor: "Dr. Fernando", time: "Wed, 5:00 PM" }
  ];

  const tutors = [
    { name: "Mr. Perera", subject: "Mathematics", rating: 4.8 },
    { name: "Ms. Silva", subject: "Science", rating: 4.9 },
    { name: "Dr. Fernando", subject: "Chemistry", rating: 4.7 }
  ];

  return (
    <div className="dashboard-content">
      <h1 className="dashboard-title">Welcome, Sahan!</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2 className="card-title">
            <Calendar className="title-icon" />
            Upcoming Classes
          </h2>
          <div className="classes-list">
            {upcomingClasses.map((cls) => (
              <div key={cls.id} className="class-item">
                <div className="class-info">
                  <h3>{cls.subject}</h3>
                  <p>with {cls.tutor}</p>
                  <p className="class-time">
                    <Clock size={16} />
                    {cls.time}
                  </p>
                </div>
                <button className="btn-solid btn-sm">Join Class</button>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">
            <BarChart3 className="title-icon" />
            My Progress
          </h2>
          <div className="progress-chart">
            <div className="progress-item">
              <span>Mathematics</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
              <span className="progress-value">85%</span>
            </div>
            <div className="progress-item">
              <span>Science</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '92%' }}></div>
              </div>
              <span className="progress-value">92%</span>
            </div>
            <div className="progress-item">
              <span>Chemistry</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '78%' }}></div>
              </div>
              <span className="progress-value">78%</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card full-width">
          <h2 className="card-title">
            <Users className="title-icon" />
            My Tutors
          </h2>
          <div className="tutors-grid">
            {tutors.map((tutor, index) => (
              <div key={index} className="tutor-card">
                <div className="tutor-avatar">{tutor.name.charAt(0)}</div>
                <h3>{tutor.name}</h3>
                <p>{tutor.subject}</p>
                <div className="tutor-rating">⭐ {tutor.rating}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;