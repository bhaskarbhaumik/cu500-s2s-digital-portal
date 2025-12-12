import React from 'react';
import { Link } from 'react-router-dom';
import { currentUser, notifications } from '../../data/mockData';
import { useTheme } from '../../hooks/useTheme';
import CignaLogo from './CignaLogo';
import './Header.css';

const Header = () => {
  const unreadCount = notifications.filter(n => !n.read).length;
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="brand-link">
            <CignaLogo />
            <div className="brand-text">
              <div className="brand-tagline">U500 Digital Portal</div>
            </div>
          </Link>
        </div>

        <nav className="header-nav">
          <Link to="/" className="nav-link">
            <i className="nf nf-md-view_dashboard"></i>
            <span>Dashboard</span>
          </Link>
          <Link to="/data-collection" className="nav-link">
            <i className="nf nf-md-form_select"></i>
            <span>Data Collection</span>
          </Link>
          <Link to="/plan-selection" className="nav-link">
            <i className="nf nf-md-cart"></i>
            <span>Plan Selection</span>
          </Link>
          <Link to="/status-tracker" className="nav-link">
            <i className="nf nf-md-timeline_clock"></i>
            <span>Status Tracker</span>
          </Link>
        </nav>

        <div className="header-actions">
          <button className="header-icon-btn notifications-btn">
            <i className="nf nf-md-bell"></i>
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>

          <button
            className="header-icon-btn theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <i className={`nf ${theme === 'light' ? 'nf-md-weather_night' : 'nf-md-weather_sunny'}`}></i>
          </button>

          <button className="header-icon-btn help-btn">
            <i className="nf nf-md-help_circle"></i>
          </button>

          <div className="user-menu">
            <div className="user-avatar">
              <i className="nf nf-md-account_circle"></i>
            </div>
            <div className="user-info">
              <div className="user-name">{currentUser.name}</div>
              <div className="user-company">{currentUser.company}</div>
            </div>
            <i className="nf nf-md-chevron_down"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
