import React from 'react';
import { Link } from 'react-router-dom';
import { installationCase, pendingTasks, notifications, milestones } from '../../data/mockData';
import './Dashboard.css';

const Dashboard = () => {
  const currentMilestone = milestones.find(m => m.status === 'in_progress');
  const highPriorityTasks = pendingTasks.filter(t => t.priority === 'high');
  const unreadNotifications = notifications.filter(n => !n.read);

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

  return (
    <div className="dashboard">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="banner-content">
          <h1>Welcome to Your Installation Portal</h1>
          <p>Case ID: <strong>{installationCase.caseId}</strong> | Effective Date: <strong>{formatDate(installationCase.effectiveDate)}</strong></p>
        </div>
        <div className="banner-status">
          <div className="status-badge status-in-progress">
            <i className="nf nf-md-clock_outline"></i>
            In Progress
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card metric-progress">
          <div className="metric-icon">
            <i className="nf nf-md-chart_donut"></i>
          </div>
          <div className="metric-content">
            <div className="metric-label">Overall Progress</div>
            <div className="metric-value">{installationCase.progress}%</div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${installationCase.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="metric-card metric-days">
          <div className="metric-icon">
            <i className="nf nf-md-calendar_clock"></i>
          </div>
          <div className="metric-content">
            <div className="metric-label">Days Until Go-Live</div>
            <div className="metric-value">{installationCase.daysRemaining}</div>
            <div className="metric-subtitle">Target: {formatDate(installationCase.targetInstallDate)}</div>
          </div>
        </div>

        <div className="metric-card metric-tasks">
          <div className="metric-icon">
            <i className="nf nf-md-format_list_checks"></i>
          </div>
          <div className="metric-content">
            <div className="metric-label">Pending Tasks</div>
            <div className="metric-value">{pendingTasks.length}</div>
            <div className="metric-subtitle">{highPriorityTasks.length} high priority</div>
          </div>
        </div>

        <div className="metric-card metric-milestone">
          <div className="metric-icon">
            <i className="nf nf-md-flag_checkered"></i>
          </div>
          <div className="metric-content">
            <div className="metric-label">Current Phase</div>
            <div className="metric-value-text">{currentMilestone?.name}</div>
            <div className="metric-subtitle">{currentMilestone?.progress}% complete</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Action Items */}
        <div className="dashboard-section">
          <div className="card">
            <div className="card-header">
              <i className="nf nf-md-alert_circle"></i>
              Action Items Required
            </div>
            <div className="action-items-list">
              {pendingTasks.map(task => (
                <div key={task.id} className="action-item">
                  <div className="action-item-header">
                    <div className="action-item-priority">
                      {task.priority === 'high' && (
                        <span className="badge badge-error">High Priority</span>
                      )}
                      {task.priority === 'medium' && (
                        <span className="badge badge-warning">Medium</span>
                      )}
                    </div>
                    <div className="action-item-due">
                      Due: {formatDate(task.dueDate)} ({getDaysUntil(task.dueDate)} days)
                    </div>
                  </div>
                  <h4 className="action-item-title">{task.title}</h4>
                  <p className="action-item-description">{task.description}</p>
                  <div className="action-item-footer">
                    <div className="action-item-time">
                      <i className="nf nf-md-clock_outline"></i>
                      Est. {task.estimatedTime}
                    </div>
                    <Link to={task.actionUrl} className="btn btn-primary btn-sm">
                      Start Task
                      <i className="nf nf-md-arrow_right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications & Quick Links */}
        <div className="dashboard-sidebar">
          {/* Notifications */}
          <div className="card">
            <div className="card-header">
              <i className="nf nf-md-bell"></i>
              Recent Notifications
            </div>
            <div className="notifications-list">
              {notifications.slice(0, 3).map(notif => (
                <div key={notif.id} className={`notification-item ${!notif.read ? 'unread' : ''}`}>
                  <div className="notification-icon">
                    {notif.type === 'success' && <i className="nf nf-md-check_circle"></i>}
                    {notif.type === 'info' && <i className="nf nf-md-information"></i>}
                    {notif.type === 'action_required' && <i className="nf nf-md-alert"></i>}
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">{notif.title}</div>
                    <div className="notification-message">{notif.message}</div>
                    <div className="notification-time">{formatDate(notif.timestamp)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="card">
            <div className="card-header">
              <i className="nf nf-md-link_variant"></i>
              Quick Links
            </div>
            <div className="quick-links">
              <Link to="/status-tracker" className="quick-link">
                <i className="nf nf-md-timeline_clock"></i>
                <span>View Installation Status</span>
                <i className="nf nf-md-chevron_right"></i>
              </Link>
              <Link to="/plan-selection" className="quick-link">
                <i className="nf nf-md-cart"></i>
                <span>Review Plan Selections</span>
                <i className="nf nf-md-chevron_right"></i>
              </Link>
              <Link to="/data-collection" className="quick-link">
                <i className="nf nf-md-upload"></i>
                <span>Upload Documents</span>
                <i className="nf nf-md-chevron_right"></i>
              </Link>
              <a href="#help" className="quick-link">
                <i className="nf nf-md-help_circle"></i>
                <span>Help & Support</span>
                <i className="nf nf-md-chevron_right"></i>
              </a>
            </div>
          </div>

          {/* Implementation Team */}
          <div className="card">
            <div className="card-header">
              <i className="nf nf-md-account_group"></i>
              Your Implementation Team
            </div>
            <div className="team-members">
              <div className="team-member">
                <div className="team-avatar">
                  <i className="nf nf-md-account"></i>
                </div>
                <div className="team-info">
                  <div className="team-name">{installationCase.assignedTeam.implementationManager}</div>
                  <div className="team-role">Implementation Manager</div>
                </div>
              </div>
              <div className="team-member">
                <div className="team-avatar">
                  <i className="nf nf-md-account"></i>
                </div>
                <div className="team-info">
                  <div className="team-name">{installationCase.broker.name}</div>
                  <div className="team-role">Broker - {installationCase.broker.firm}</div>
                </div>
              </div>
              <div className="team-member">
                <div className="team-avatar">
                  <i className="nf nf-md-account"></i>
                </div>
                <div className="team-info">
                  <div className="team-name">{installationCase.assignedTeam.complianceOfficer}</div>
                  <div className="team-role">Compliance Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Progress Overview */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-progress_check"></i>
          Installation Progress Overview
        </div>
        <div className="milestones-timeline">
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className={`milestone-item milestone-${milestone.status}`}>
              <div className="milestone-connector">
                {index > 0 && <div className="connector-line"></div>}
              </div>
              <div className="milestone-marker">
                {milestone.status === 'completed' && <i className="nf nf-md-check_circle"></i>}
                {milestone.status === 'in_progress' && <i className="nf nf-md-clock"></i>}
                {milestone.status === 'pending' && <i className="nf nf-md-circle_outline"></i>}
              </div>
              <div className="milestone-content">
                <div className="milestone-header">
                  <h4 className="milestone-name">{milestone.name}</h4>
                  {milestone.status === 'completed' && (
                    <span className="badge badge-success">
                      <i className="nf nf-md-check"></i>
                      Completed
                    </span>
                  )}
                  {milestone.status === 'in_progress' && (
                    <span className="badge badge-info">
                      <i className="nf nf-md-sync"></i>
                      In Progress
                    </span>
                  )}
                  {milestone.status === 'pending' && (
                    <span className="badge badge-secondary">Pending</span>
                  )}
                </div>
                <p className="milestone-description">{milestone.description}</p>
                {milestone.status === 'completed' && (
                  <div className="milestone-date">
                    Completed on {formatDate(milestone.completedDate)}
                  </div>
                )}
                {milestone.status === 'in_progress' && milestone.progress && (
                  <div className="milestone-progress">
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
                  <div className="milestone-date">
                    Estimated start: {formatDate(milestone.estimatedStart)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
