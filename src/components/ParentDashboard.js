import React from 'react';
import { TrendingUp, Calendar, CreditCard } from 'lucide-react';
import './ParentDashboard.css';

const ParentDashboard = () => {
  const schedule = [
    { day: "Monday", subject: "Mathematics", time: "4:00 PM", tutor: "Mr. Perera" },
    { day: "Wednesday", subject: "Science", time: "3:00 PM", tutor: "Ms. Silva" },
    { day: "Friday", subject: "Chemistry", time: "5:00 PM", tutor: "Dr. Fernando" }
  ];

  const invoices = [
    { id: "INV-001", amount: "LKR 5,000", date: "Nov 1, 2024", status: "Paid" },
    { id: "INV-002", amount: "LKR 5,000", date: "Nov 15, 2024", status: "Due" }
  ];

  return (
    <div className="dashboard-content">
      <h1 className="dashboard-title">Your Child's Academic Progress</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2 className="card-title">
            <TrendingUp className="title-icon" />
            Progress Reports
          </h2>
          <div className="progress-summary">
            <div className="summary-item">
              <span className="summary-label">Overall Grade</span>
              <span className="summary-value grade-a">A</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Attendance</span>
              <span className="summary-value">95%</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Assignments</span>
              <span className="summary-value">18/20</span>
            </div>
          </div>
          <div className="tutor-feedback">
            <h4>Recent Feedback</h4>
            <div className="feedback-item">
              <strong>Mr. Perera:</strong> 
              <p>Excellent improvement in algebra. Keep up the good work!</p>
            </div>
            <div className="feedback-item">
              <strong>Ms. Silva:</strong>
              <p>Shows strong understanding of concepts. Recommend more practice.</p>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">
            <Calendar className="title-icon" />
            Weekly Schedule
          </h2>
          <div className="schedule-list">
            {schedule.map((item, index) => (
              <div key={index} className="schedule-item">
                <div className="schedule-day">{item.day}</div>
                <div className="schedule-details">
                  <h4>{item.subject}</h4>
                  <p>{item.time} • {item.tutor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card full-width">
          <h2 className="card-title">
            <CreditCard className="title-icon" />
            Billing & Payments
          </h2>
          <div className="invoices-table">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="invoice-row">
                <div className="invoice-info">
                  <h4>{invoice.id}</h4>
                  <p>{invoice.date}</p>
                </div>
                <div className="invoice-amount">{invoice.amount}</div>
                <div className={`invoice-status status-${invoice.status.toLowerCase()}`}>
                  {invoice.status}
                </div>
                {invoice.status === "Due" && (
                  <button className="btn-solid btn-sm">Pay Now</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;