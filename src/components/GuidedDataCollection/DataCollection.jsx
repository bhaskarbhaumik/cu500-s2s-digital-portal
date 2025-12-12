import React from 'react';
import { Link } from 'react-router-dom';
import { validationResults } from '../../data/mockData';
import './DataCollection.css';

const DataCollection = () => {
  const dataCollectionSteps = [
    {
      id: 1,
      title: 'Account Setup',
      description: 'Company information, contacts, and billing details',
      status: validationResults.accountSetup.status,
      icon: 'nf-md-domain',
      url: '/data-collection/account-setup',
      estimatedTime: '15-20 minutes'
    },
    {
      id: 2,
      title: 'Employee Eligibility',
      description: 'Upload census data and employee plan elections',
      status: validationResults.eligibilityFile.status,
      icon: 'nf-md-account_multiple',
      url: '/data-collection/eligibility',
      estimatedTime: '30-45 minutes'
    },
    {
      id: 3,
      title: 'Plan Configuration',
      description: 'Review and confirm benefit plan details',
      status: 'pending',
      icon: 'nf-md-clipboard_list',
      url: '/plan-selection',
      estimatedTime: '20 minutes'
    },
    {
      id: 4,
      title: 'Document Upload',
      description: 'Additional supporting documents and forms',
      status: 'pending',
      icon: 'nf-md-file_upload',
      url: '#documents',
      estimatedTime: '10 minutes'
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'passed':
        return <span className="badge badge-success"><i className="nf nf-md-check"></i> Completed</span>;
      case 'warning':
        return <span className="badge badge-warning"><i className="nf nf-md-alert"></i> In Progress</span>;
      case 'pending':
        return <span className="badge badge-secondary">Not Started</span>;
      default:
        return <span className="badge badge-secondary">Pending</span>;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'passed':
        return 'nf-md-check_circle';
      case 'warning':
        return 'nf-md-clock';
      case 'pending':
        return 'nf-md-circle_outline';
      default:
        return 'nf-md-circle_outline';
    }
  };

  return (
    <div className="data-collection">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Guided Data Collection</h1>
          <p>Complete the following steps to set up your account and submit employee eligibility information. Our AI-powered system will validate your data in real-time to ensure accuracy and compliance.</p>
        </div>
      </div>

      {/* Info Alert */}
      <div className="alert alert-info">
        <i className="nf nf-md-information"></i>
        <div>
          <strong>Turbo Tax-Style Experience:</strong> We'll guide you through each step with clear instructions and real-time validation. Save your progress at any time and return later to complete.
        </div>
      </div>

      {/* Progress Overview */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-progress_check"></i>
          Your Progress
        </div>
        <div className="progress-overview">
          <div className="progress-stats">
            <div className="stat">
              <div className="stat-value">2</div>
              <div className="stat-label">of 4 Steps</div>
            </div>
            <div className="stat">
              <div className="stat-value">50%</div>
              <div className="stat-label">Complete</div>
            </div>
            <div className="stat">
              <div className="stat-value">~45</div>
              <div className="stat-label">Min. Remaining</div>
            </div>
          </div>
          <div className="progress-bar-large">
            <div className="progress-bar-fill" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>

      {/* Data Collection Steps */}
      <div className="collection-steps">
        {dataCollectionSteps.map((step, index) => (
          <div key={step.id} className={`collection-step step-${step.status}`}>
            <div className="step-number">
              <span className="step-index">{index + 1}</span>
              <i className={`step-status-icon nf ${getStatusIcon(step.status)}`}></i>
            </div>

            <div className="step-content">
              <div className="step-header">
                <div className="step-title-group">
                  <i className={`step-icon nf ${step.icon}`}></i>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                {getStatusBadge(step.status)}
              </div>

              <p className="step-description">{step.description}</p>

              <div className="step-footer">
                <div className="step-time">
                  <i className="nf nf-md-clock_outline"></i>
                  Estimated time: {step.estimatedTime}
                </div>

                {step.status === 'passed' ? (
                  <Link to={step.url} className="btn btn-outline btn-sm">
                    <i className="nf nf-md-pencil"></i>
                    Edit
                  </Link>
                ) : step.status === 'warning' ? (
                  <Link to={step.url} className="btn btn-primary btn-sm">
                    <i className="nf nf-md-play"></i>
                    Continue
                  </Link>
                ) : (
                  <Link to={step.url} className="btn btn-secondary btn-sm">
                    <i className="nf nf-md-arrow_right"></i>
                    Start
                  </Link>
                )}
              </div>

              {/* Validation Results for Completed Steps */}
              {step.status === 'passed' && step.id === 1 && (
                <div className="validation-summary">
                  <div className="validation-header">
                    <i className="nf nf-md-shield_check"></i>
                    Validation Complete
                  </div>
                  <div className="validation-checks">
                    {validationResults.accountSetup.checks.map((check, idx) => (
                      <div key={idx} className="validation-check">
                        <i className="nf nf-md-check_circle"></i>
                        <span>{check.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-help_circle"></i>
          Need Help?
        </div>
        <div className="help-content">
          <div className="help-options">
            <div className="help-option">
              <i className="nf nf-md-download"></i>
              <div>
                <h4>Download Templates</h4>
                <p>Get our Excel templates for employee eligibility and other required data</p>
                <a href="#templates" className="link-primary">View Templates</a>
              </div>
            </div>
            <div className="help-option">
              <i className="nf nf-md-file_document"></i>
              <div>
                <h4>View User Guide</h4>
                <p>Step-by-step instructions for each data collection phase</p>
                <a href="#guide" className="link-primary">Open Guide</a>
              </div>
            </div>
            <div className="help-option">
              <i className="nf nf-md-phone"></i>
              <div>
                <h4>Contact Support</h4>
                <p>Speak with our implementation team for assistance</p>
                <a href="#support" className="link-primary">Get Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
