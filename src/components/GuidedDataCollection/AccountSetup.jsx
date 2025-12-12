import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { accountSetupData } from '../../data/mockData';
import './AccountSetup.css';

const AccountSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { id: 1, name: 'Company Info', icon: 'nf-md-domain' },
    { id: 2, name: 'Contacts', icon: 'nf-md-account_box' },
    { id: 3, name: 'Address', icon: 'nf-md-map_marker' },
    { id: 4, name: 'Review', icon: 'nf-md-check_circle' }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="account-setup">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/data-collection">
          <i className="nf nf-md-chevron_left"></i>
          Back to Data Collection
        </Link>
      </div>

      {/* Page Header */}
      <div className="setup-header">
        <h1>Account Setup</h1>
        <p>Let's get your account set up. We'll guide you through each step.</p>
      </div>

      {/* Progress Stepper */}
      <div className="progress-stepper">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`stepper-step ${currentStep === step.id ? 'active' : ''} ${
              currentStep > step.id ? 'completed' : ''
            }`}
          >
            <div className="stepper-circle">
              {currentStep > step.id ? (
                <i className="nf nf-md-check"></i>
              ) : (
                <i className={`nf ${step.icon}`}></i>
              )}
            </div>
            <div className="stepper-label">{step.name}</div>
            {index < steps.length - 1 && <div className="stepper-line"></div>}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="card setup-card">
        {/* Step 1: Company Info */}
        {currentStep === 1 && (
          <div className="step-content">
            <h2>Company Information</h2>
            <p className="step-description">
              Please provide your company's basic information. All fields marked with * are required.
            </p>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label form-label-required">Legal Company Name</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.companyInfo.legalName}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Doing Business As (DBA)</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.companyInfo.dba}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Federal Tax ID (EIN)</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.companyInfo.taxId}
                />
                <div className="form-help">
                  <i className="nf nf-md-shield_check"></i>
                  Verified and encrypted
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">SIC Code</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.companyInfo.sicCode}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Industry</label>
                <select className="form-select" defaultValue={accountSetupData.companyInfo.industry}>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Financial Services</option>
                  <option>Manufacturing</option>
                  <option>Retail</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Year Established</label>
                <input
                  type="number"
                  className="form-input"
                  defaultValue={accountSetupData.companyInfo.yearEstablished}
                />
              </div>

              <div className="form-group grid-full">
                <label className="form-label">Website</label>
                <input
                  type="url"
                  className="form-input"
                  defaultValue={accountSetupData.companyInfo.website}
                />
              </div>
            </div>

            <div className="alert alert-info">
              <i className="nf nf-md-information"></i>
              <div>
                <strong>Real-time Validation:</strong> Your Tax ID has been verified against IRS records.
                All information is securely encrypted.
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Contacts */}
        {currentStep === 2 && (
          <div className="step-content">
            <h2>Contact Information</h2>
            <p className="step-description">
              Who should we contact for account-related questions?
            </p>

            <h3 className="section-title">Primary Contact</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label form-label-required">First Name</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.primaryContact.firstName}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Last Name</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.primaryContact.lastName}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Title</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.primaryContact.title}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Email</label>
                <input
                  type="email"
                  className="form-input"
                  defaultValue={accountSetupData.primaryContact.email}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  defaultValue={accountSetupData.primaryContact.phone}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  className="form-input"
                  defaultValue={accountSetupData.primaryContact.mobile}
                />
              </div>
            </div>

            <div className="divider"></div>

            <h3 className="section-title">Billing Contact</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label form-label-required">First Name</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.billingContact.firstName}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Last Name</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.billingContact.lastName}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Title</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.billingContact.title}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Email</label>
                <input
                  type="email"
                  className="form-input"
                  defaultValue={accountSetupData.billingContact.email}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  defaultValue={accountSetupData.billingContact.phone}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Address */}
        {currentStep === 3 && (
          <div className="step-content">
            <h2>Mailing Address</h2>
            <p className="step-description">
              Where should we send official correspondence and billing statements?
            </p>

            <div className="form-grid">
              <div className="form-group grid-full">
                <label className="form-label form-label-required">Street Address Line 1</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.mailingAddress.street1}
                />
              </div>

              <div className="form-group grid-full">
                <label className="form-label">Street Address Line 2</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.mailingAddress.street2}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">City</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.mailingAddress.city}
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">State</label>
                <select className="form-select" defaultValue={accountSetupData.mailingAddress.state}>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                  <option value="WA">Washington</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">ZIP Code</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue={accountSetupData.mailingAddress.zipCode}
                />
              </div>
            </div>

            <div className="alert alert-success">
              <i className="nf nf-md-check_circle"></i>
              <div>
                <strong>Address Validated:</strong> Your address has been verified with USPS and is valid.
              </div>
            </div>

            <div className="divider"></div>

            <h3 className="section-title">Employee Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label form-label-required">Total Employees</label>
                <input
                  type="number"
                  className="form-input"
                  defaultValue={accountSetupData.employeeCount.total}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Eligible for Benefits</label>
                <input
                  type="number"
                  className="form-input"
                  defaultValue={accountSetupData.employeeCount.eligible}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Full-Time</label>
                <input
                  type="number"
                  className="form-input"
                  defaultValue={accountSetupData.employeeCount.fullTime}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Part-Time</label>
                <input
                  type="number"
                  className="form-input"
                  defaultValue={accountSetupData.employeeCount.partTime}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {currentStep === 4 && (
          <div className="step-content">
            <h2>Review Your Information</h2>
            <p className="step-description">
              Please review all information before submitting. You can go back to edit any section.
            </p>

            <div className="review-section">
              <div className="review-header">
                <h3>Company Information</h3>
                <button className="btn btn-outline btn-sm" onClick={() => setCurrentStep(1)}>
                  <i className="nf nf-md-pencil"></i>
                  Edit
                </button>
              </div>
              <div className="review-grid">
                <div className="review-item">
                  <span className="review-label">Legal Name:</span>
                  <span className="review-value">{accountSetupData.companyInfo.legalName}</span>
                </div>
                <div className="review-item">
                  <span className="review-label">Tax ID:</span>
                  <span className="review-value">{accountSetupData.companyInfo.taxId}</span>
                </div>
                <div className="review-item">
                  <span className="review-label">Industry:</span>
                  <span className="review-value">{accountSetupData.companyInfo.industry}</span>
                </div>
                <div className="review-item">
                  <span className="review-label">Website:</span>
                  <span className="review-value">{accountSetupData.companyInfo.website}</span>
                </div>
              </div>
            </div>

            <div className="review-section">
              <div className="review-header">
                <h3>Contact Information</h3>
                <button className="btn btn-outline btn-sm" onClick={() => setCurrentStep(2)}>
                  <i className="nf nf-md-pencil"></i>
                  Edit
                </button>
              </div>
              <div className="review-grid">
                <div className="review-item">
                  <span className="review-label">Primary Contact:</span>
                  <span className="review-value">
                    {accountSetupData.primaryContact.firstName} {accountSetupData.primaryContact.lastName}
                  </span>
                </div>
                <div className="review-item">
                  <span className="review-label">Email:</span>
                  <span className="review-value">{accountSetupData.primaryContact.email}</span>
                </div>
                <div className="review-item">
                  <span className="review-label">Billing Contact:</span>
                  <span className="review-value">
                    {accountSetupData.billingContact.firstName} {accountSetupData.billingContact.lastName}
                  </span>
                </div>
                <div className="review-item">
                  <span className="review-label">Billing Email:</span>
                  <span className="review-value">{accountSetupData.billingContact.email}</span>
                </div>
              </div>
            </div>

            <div className="review-section">
              <div className="review-header">
                <h3>Mailing Address</h3>
                <button className="btn btn-outline btn-sm" onClick={() => setCurrentStep(3)}>
                  <i className="nf nf-md-pencil"></i>
                  Edit
                </button>
              </div>
              <div className="review-grid">
                <div className="review-item grid-full">
                  <span className="review-label">Address:</span>
                  <span className="review-value">
                    {accountSetupData.mailingAddress.street1}, {accountSetupData.mailingAddress.street2}<br />
                    {accountSetupData.mailingAddress.city}, {accountSetupData.mailingAddress.state} {accountSetupData.mailingAddress.zipCode}
                  </span>
                </div>
                <div className="review-item">
                  <span className="review-label">Total Employees:</span>
                  <span className="review-value">{accountSetupData.employeeCount.total}</span>
                </div>
                <div className="review-item">
                  <span className="review-label">Eligible for Benefits:</span>
                  <span className="review-value">{accountSetupData.employeeCount.eligible}</span>
                </div>
              </div>
            </div>

            <div className="alert alert-success">
              <i className="nf nf-md-shield_check"></i>
              <div>
                <strong>All Validations Passed:</strong> Your account information has been verified and is ready to submit.
              </div>
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="setup-footer">
          <div className="footer-actions">
            {currentStep > 1 && (
              <button className="btn btn-secondary" onClick={handlePrevious}>
                <i className="nf nf-md-chevron_left"></i>
                Previous
              </button>
            )}

            <div className="footer-save">
              <button className="btn btn-outline">
                <i className="nf nf-md-content_save"></i>
                Save & Exit
              </button>
            </div>

            {currentStep < totalSteps ? (
              <button className="btn btn-primary" onClick={handleNext}>
                Next
                <i className="nf nf-md-chevron_right"></i>
              </button>
            ) : (
              <Link to="/data-collection" className="btn btn-success">
                <i className="nf nf-md-check"></i>
                Submit
              </Link>
            )}
          </div>

          <div className="footer-progress">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
