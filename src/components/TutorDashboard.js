import React from 'react';
import { DollarSign, Calendar, Users, Clock, FileText } from 'lucide-react';
import './TutorDashboard.css';

const TutorDashboard = () => {
  const sessions = [
    { student: "Sahan", subject: "Mathematics", time: "Today, 4:00 PM" },
    { student: "Nimal", subject: "Mathematics", time: "Tomorrow, 3:00 PM" },
    { student: "Kasun", subject: "Physics", time: "Wed, 5:00 PM" }
  ];

  const students = [
    { name: "Sahan", progress: 85 },
    { name: "Nimal", progress: 78 },
    { name: "Kasun", progress: 92 }
  ];

  return (
    <div className="dashboard-content">
      <h1 className="dashboard-title">Manage Your Students & Schedule</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2 className="card-title">
            <DollarSign className="title-icon" />
            My Earnings
          </h2>
          <div className="earnings-summary">
            <div className="earnings-item">
              <span>Total Earned</span>
              <h3>LKR 50,000</h3>
            </div>
            <div className="earnings-item deduction">
              <span>Platform Commission (15%)</span>
              <h3>-LKR 7,500</h3>
            </div>
            <div className="earnings-item payout">
              <span>Your Payout</span>
              <h3>LKR 42,500</h3>
            </div>
          </div>
          <button className="btn-solid" style={{ width: '100%', marginTop: '1rem' }}>
            Request Payout
          </button>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">
            <Calendar className="title-icon" />
            My Schedule
          </h2>
          <div className="sessions-list">
            {sessions.map((session, index) => (
              <div key={index} className="session-item">
                <div className="session-info">
                  <h4>{session.student}</h4>
                  <p>{session.subject}</p>
                  <p className="session-time">
                    <Clock size={16} />
                    {session.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card full-width">
          <h2 className="card-title">
            <Users className="title-icon" />
            My Students
          </h2>
          <div className="students-list">
            {students.map((student, index) => (
              <div key={index} className="student-item">
                <div className="student-info">
                  <div className="student-avatar">{student.name.charAt(0)}</div>
                  <div>
                    <h4>{student.name}</h4>
                    <div className="student-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${student.progress}%` }}></div>
                      </div>
                      <span>{student.progress}%</span>
                    </div>
                  </div>
                </div>
                <button className="btn-outlined btn-sm">
                  <FileText size={16} />
                  Submit Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;