import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { installationCase, milestones } from '../../data/mockData';
import './StatusTracker.css';

const StatusTracker = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getDaysUntil = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'var(--cigna-green)';
    if (progress >= 50) return 'var(--cigna-blue)';
    if (progress >= 25) return 'var(--cigna-orange)';
    return 'var(--gray-400)';
  };

  const currentMilestone = milestones.find(m => m.status === 'in_progress');

  return (
    <div className="status-tracker">
      {/* Page Header */}
      <div className="page-header">
        <h1>Installation Status Tracker</h1>
        <p>Track your installation progress in real-time - from case initiation to go-live</p>
      </div>

      {/* Pizza Tracker - Main Visual */}
      <div className="pizza-tracker-main">
        <div className="tracker-header">
          <div className="tracker-info">
            <div className="case-id">Case {installationCase.caseId}</div>
            <h2>{installationCase.clientName}</h2>
            <div className="effective-date">
              <i className="nf nf-md-calendar"></i>
              Effective Date: <strong>{formatDate(installationCase.effectiveDate)}</strong>
            </div>
          </div>

          <div className="tracker-progress-circle">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle
                cx="90"
                cy="90"
                r="75"
                fill="none"
                stroke="var(--gray-200)"
                strokeWidth="12"
              />
              <circle
                cx="90"
                cy="90"
                r="75"
                fill="none"
                stroke={getProgressColor(installationCase.progress)}
                strokeWidth="12"
                strokeDasharray={`${2 * Math.PI * 75}`}
                strokeDashoffset={`${2 * Math.PI * 75 * (1 - installationCase.progress / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 90 90)"
                className="progress-circle"
              />
            </svg>
            <div className="progress-overlay">
              <div className="progress-percentage">{installationCase.progress}%</div>
              <div className="progress-label">Complete</div>
            </div>
          </div>
        </div>

        <div className="tracker-stats">
          <div className="stat-box">
            <div className="stat-icon">
              <i className="nf nf-md-calendar_clock"></i>
            </div>
            <div className="stat-content">
              <div className="stat-value">{installationCase.daysRemaining}</div>
              <div className="stat-label">Days Until Go-Live</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <i className="nf nf-md-flag_checkered"></i>
            </div>
            <div className="stat-content">
              <div className="stat-value">{currentMilestone?.name}</div>
              <div className="stat-label">Current Phase</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <i className="nf nf-md-calendar_check"></i>
            </div>
            <div className="stat-content">
              <div className="stat-value">{formatDate(installationCase.targetInstallDate)}</div>
              <div className="stat-label">Target Install Date</div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Timeline */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-timeline"></i>
          Installation Timeline
        </div>

        <div className="visual-timeline">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`timeline-milestone milestone-${milestone.status}`}
              onClick={() => setSelectedMilestone(milestone)}
            >
              <div className="timeline-connector">
                {index > 0 && (
                  <div className={`connector-line ${milestones[index - 1].status === 'completed' ? 'completed' : ''}`}></div>
                )}
              </div>

              <div className="timeline-node">
                <div className="node-circle">
                  {milestone.status === 'completed' && <i className="nf nf-md-check"></i>}
                  {milestone.status === 'in_progress' && <i className="nf nf-md-sync"></i>}
                  {milestone.status === 'pending' && <span className="node-number">{milestone.id}</span>}
                </div>
              </div>

              <div className="timeline-content">
                <div className="milestone-badge-wrapper">
                  {milestone.status === 'completed' && (
                    <span className="milestone-status-badge completed">
                      <i className="nf nf-md-check_circle"></i>
                      Completed
                    </span>
                  )}
                  {milestone.status === 'in_progress' && (
                    <span className="milestone-status-badge in-progress">
                      <i className="nf nf-md-sync"></i>
                      In Progress
                    </span>
                  )}
                  {milestone.status === 'pending' && (
                    <span className="milestone-status-badge pending">
                      Pending
                    </span>
                  )}
                </div>

                <h3 className="milestone-title">{milestone.name}</h3>
                <p className="milestone-desc">{milestone.description}</p>

                <div className="milestone-footer">
                  {milestone.status === 'completed' && milestone.completedDate && (
                    <div className="milestone-date">
                      <i className="nf nf-md-check_circle"></i>
                      Completed {formatDate(milestone.completedDate)} ({milestone.daysToComplete} day{milestone.daysToComplete !== 1 ? 's' : ''})
                    </div>
                  )}

                  {milestone.status === 'in_progress' && milestone.progress && (
                    <div className="milestone-progress-bar">
                      <div className="progress-bar">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{milestone.progress}% Complete</span>
                    </div>
                  )}

                  {milestone.status === 'pending' && milestone.estimatedStart && (
                    <div className="milestone-date pending">
                      <i className="nf nf-md-calendar"></i>
                      Estimated start: {formatDate(milestone.estimatedStart)}
                    </div>
                  )}
                </div>

                {milestone.status === 'in_progress' && milestone.tasks && (
                  <div className="milestone-tasks">
                    <h5>Current Tasks:</h5>
                    <ul>
                      {milestone.tasks.map((task, idx) => (
                        <li key={idx} className={`task-${task.status}`}>
                          {task.status === 'completed' && <i className="nf nf-md-check_circle"></i>}
                          {task.status === 'in_progress' && <i className="nf nf-md-clock"></i>}
                          {task.status === 'pending' && <i className="nf nf-md-circle_outline"></i>}
                          <span>{task.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-chart_timeline_variant"></i>
          Progress Overview
        </div>

        <div className="progress-overview-grid">
          <div className="overview-stat">
            <div className="overview-icon completed">
              <i className="nf nf-md-check_circle"></i>
            </div>
            <div className="overview-content">
              <div className="overview-value">
                {milestones.filter(m => m.status === 'completed').length}
              </div>
              <div className="overview-label">Milestones Completed</div>
            </div>
          </div>

          <div className="overview-stat">
            <div className="overview-icon in-progress">
              <i className="nf nf-md-clock"></i>
            </div>
            <div className="overview-content">
              <div className="overview-value">
                {milestones.filter(m => m.status === 'in_progress').length}
              </div>
              <div className="overview-label">In Progress</div>
            </div>
          </div>

          <div className="overview-stat">
            <div className="overview-icon pending">
              <i className="nf nf-md-circle_outline"></i>
            </div>
            <div className="overview-content">
              <div className="overview-value">
                {milestones.filter(m => m.status === 'pending').length}
              </div>
              <div className="overview-label">Upcoming</div>
            </div>
          </div>

          <div className="overview-stat">
            <div className="overview-icon days">
              <i className="nf nf-md-calendar_today"></i>
            </div>
            <div className="overview-content">
              <div className="overview-value">
                {installationCase.daysRemaining}
              </div>
              <div className="overview-label">Days Remaining</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Dates */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-calendar_month"></i>
          Key Dates
        </div>

        <div className="key-dates">
          <div className="date-item">
            <div className="date-icon">
              <i className="nf nf-md-calendar_star"></i>
            </div>
            <div className="date-content">
              <div className="date-label">Sold Date</div>
              <div className="date-value">{formatDate(installationCase.soldDate)}</div>
            </div>
          </div>

          <div className="date-item">
            <div className="date-icon active">
              <i className="nf nf-md-calendar_clock"></i>
            </div>
            <div className="date-content">
              <div className="date-label">Target Install Date</div>
              <div className="date-value">{formatDate(installationCase.targetInstallDate)}</div>
              <div className="date-note">In {getDaysUntil(installationCase.targetInstallDate)} days</div>
            </div>
          </div>

          <div className="date-item">
            <div className="date-icon">
              <i className="nf nf-md-calendar_check"></i>
            </div>
            <div className="date-content">
              <div className="date-label">Effective Date (Go-Live)</div>
              <div className="date-value">{formatDate(installationCase.effectiveDate)}</div>
              <div className="date-note">In {getDaysUntil(installationCase.effectiveDate)} days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Team */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-account_group"></i>
          Your Implementation Team
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar-large">
              <i className="nf nf-md-account"></i>
            </div>
            <div className="team-name">{installationCase.assignedTeam.implementationManager}</div>
            <div className="team-title">Implementation Manager</div>
            <button className="btn btn-outline btn-sm">
              <i className="nf nf-md-email"></i>
              Contact
            </button>
          </div>

          <div className="team-card">
            <div className="team-avatar-large">
              <i className="nf nf-md-account"></i>
            </div>
            <div className="team-name">{installationCase.broker.name}</div>
            <div className="team-title">Broker</div>
            <div className="team-company">{installationCase.broker.firm}</div>
            <button className="btn btn-outline btn-sm">
              <i className="nf nf-md-email"></i>
              Contact
            </button>
          </div>

          <div className="team-card">
            <div className="team-avatar-large">
              <i className="nf nf-md-account"></i>
            </div>
            <div className="team-name">{installationCase.assignedTeam.complianceOfficer}</div>
            <div className="team-title">Compliance Officer</div>
            <button className="btn btn-outline btn-sm">
              <i className="nf nf-md-email"></i>
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="tracker-actions">
        <Link to="/" className="btn btn-outline btn-lg">
          <i className="nf nf-md-view_dashboard"></i>
          Back to Dashboard
        </Link>

        <div className="action-right">
          <button className="btn btn-secondary btn-lg">
            <i className="nf nf-md-download"></i>
            Download Timeline
          </button>
          <button className="btn btn-primary btn-lg">
            <i className="nf nf-md-bell"></i>
            Subscribe to Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusTracker;
