import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { availablePlans, shoppingCart, validationResults } from '../../data/mockData';
import './PlanSelection.css';

const PlanSelection = () => {
  const [selectedPlans, setSelectedPlans] = useState(availablePlans.filter(p => p.selected));
  const [showSignature, setShowSignature] = useState(false);

  const togglePlan = (planId) => {
    const plan = availablePlans.find(p => p.id === planId);
    if (selectedPlans.find(p => p.id === planId)) {
      setSelectedPlans(selectedPlans.filter(p => p.id !== planId));
    } else {
      setSelectedPlans([...selectedPlans, plan]);
    }
  };

  const isPlanSelected = (planId) => {
    return selectedPlans.some(p => p.id === planId);
  };

  const getTotalCost = () => {
    return selectedPlans.reduce((sum, plan) => sum + plan.monthlyPremium, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="plan-selection">
      {/* Page Header */}
      <div className="page-header">
        <h1>Plan Selection & Review</h1>
        <p>Review your selected benefit plans and finalize your choices</p>
      </div>

      {/* Shopping Cart Summary */}
      <div className="cart-summary">
        <div className="cart-summary-header">
          <div className="cart-icon">
            <i className="nf nf-md-cart"></i>
          </div>
          <div className="cart-details">
            <h2>Your Selection</h2>
            <p>{selectedPlans.length} plan{selectedPlans.length !== 1 ? 's' : ''} selected for {shoppingCart.summary.totalEmployees} employees</p>
          </div>
          <div className="cart-total">
            <div className="total-label">Monthly Total</div>
            <div className="total-amount">{formatCurrency(shoppingCart.summary.totalMonthlyPremium)}</div>
            <div className="total-breakdown">
              Employer: {formatCurrency(shoppingCart.summary.employerContribution)} |
              Employee: {formatCurrency(shoppingCart.summary.employeeContribution)}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Status */}
      <div className="alert alert-success">
        <i className="nf nf-md-shield_check"></i>
        <div>
          <strong>All Plans Compliance Verified:</strong> Your selected plans meet all federal and state requirements
          for CA, NY, TX, FL. <a href="#compliance-details" className="link-primary">View compliance report</a>
        </div>
      </div>

      {/* Available Plans */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-clipboard_list"></i>
          Available Plans
        </div>

        <div className="plans-grid">
          {availablePlans.map(plan => (
            <div
              key={plan.id}
              className={`plan-card ${isPlanSelected(plan.id) ? 'selected' : ''}`}
            >
              <div className="plan-header">
                <div className="plan-type-badge">
                  {plan.type}
                </div>
                {isPlanSelected(plan.id) && (
                  <div className="selected-badge">
                    <i className="nf nf-md-check_circle"></i>
                    Selected
                  </div>
                )}
              </div>

              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-category">{plan.category}</div>

              <div className="plan-pricing">
                <div className="price-item">
                  <span className="price-label">Monthly Premium</span>
                  <span className="price-value">{formatCurrency(plan.monthlyPremium)}</span>
                </div>
                <div className="price-item">
                  <span className="price-label">Employee Contribution</span>
                  <span className="price-value">{formatCurrency(plan.employeeContribution)}</span>
                </div>
                {plan.deductible && (
                  <div className="price-item">
                    <span className="price-label">Deductible</span>
                    <span className="price-value">{formatCurrency(plan.deductible)}</span>
                  </div>
                )}
                {plan.oopMax && (
                  <div className="price-item">
                    <span className="price-label">Out-of-Pocket Max</span>
                    <span className="price-value">{formatCurrency(plan.oopMax)}</span>
                  </div>
                )}
                {plan.annualMaximum && (
                  <div className="price-item">
                    <span className="price-label">Annual Maximum</span>
                    <span className="price-value">{formatCurrency(plan.annualMaximum)}</span>
                  </div>
                )}
              </div>

              <div className="plan-features">
                <h4>Key Features</h4>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="nf nf-md-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-compliance">
                <div className="compliance-status">
                  <i className="nf nf-md-shield_check"></i>
                  Compliance: {plan.compliance.status}
                </div>
                <div className="compliance-badges">
                  {plan.compliance.aca && <span className="compliance-badge">ACA</span>}
                  {plan.compliance.hipaa && <span className="compliance-badge">HIPAA</span>}
                </div>
              </div>

              {isPlanSelected(plan.id) && (
                <div className="enrollment-info">
                  <i className="nf nf-md-account_group"></i>
                  {plan.enrollmentCount} employees enrolled
                </div>
              )}

              <button
                className={`btn ${isPlanSelected(plan.id) ? 'btn-outline' : 'btn-primary'} btn-full`}
                onClick={() => togglePlan(plan.id)}
              >
                {isPlanSelected(plan.id) ? (
                  <>
                    <i className="nf nf-md-close"></i>
                    Remove from Selection
                  </>
                ) : (
                  <>
                    <i className="nf nf-md-plus"></i>
                    Add to Selection
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-calculator"></i>
          Cost Breakdown & Invoice Preview
        </div>

        <div className="cost-breakdown">
          <div className="breakdown-section">
            <h4>Selected Plans Summary</h4>
            <table className="breakdown-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Enrolled</th>
                  <th>Monthly Premium</th>
                  <th>Employer</th>
                  <th>Employee</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {selectedPlans.map(plan => (
                  <tr key={plan.id}>
                    <td>
                      <div className="plan-name-cell">
                        <strong>{plan.name}</strong>
                        <span className="plan-type-small">{plan.type}</span>
                      </div>
                    </td>
                    <td>{plan.enrollmentCount}</td>
                    <td>{formatCurrency(plan.monthlyPremium)}</td>
                    <td>{formatCurrency(plan.monthlyPremium - plan.employeeContribution)}</td>
                    <td>{formatCurrency(plan.employeeContribution)}</td>
                    <td><strong>{formatCurrency(plan.monthlyPremium * plan.enrollmentCount)}</strong></td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="total-row">
                  <td colSpan="2"><strong>Monthly Total</strong></td>
                  <td><strong>{formatCurrency(getTotalCost())}</strong></td>
                  <td><strong>{formatCurrency(shoppingCart.summary.employerContribution)}</strong></td>
                  <td><strong>{formatCurrency(shoppingCart.summary.employeeContribution)}</strong></td>
                  <td><strong>{formatCurrency(shoppingCart.summary.totalMonthlyPremium)}</strong></td>
                </tr>
                <tr className="annual-row">
                  <td colSpan="5">Annual Cost Estimate</td>
                  <td><strong>{formatCurrency(shoppingCart.summary.annualCost)}</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="alert alert-info">
            <i className="nf nf-md-information"></i>
            <div>
              <strong>Real-Time Rating:</strong> Costs shown are calculated in real-time using your actual enrollment data
              and will match your final invoice exactly.
            </div>
          </div>
        </div>
      </div>

      {/* Validation Summary */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-shield_check"></i>
          Plan Validation Summary
        </div>

        <div className="validation-details">
          {validationResults.planCompliance.checks.map((check, index) => (
            <div key={index} className="validation-item">
              <div className="validation-icon">
                <i className="nf nf-md-check_circle"></i>
              </div>
              <div className="validation-content">
                <strong>{check.name}</strong>
                <p>{check.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="selection-actions">
        <Link to="/data-collection" className="btn btn-outline btn-lg">
          <i className="nf nf-md-chevron_left"></i>
          Back to Data Collection
        </Link>

        <div className="action-buttons-right">
          <button className="btn btn-secondary btn-lg">
            <i className="nf nf-md-download"></i>
            Download Summary
          </button>
          <button className="btn btn-success btn-lg" onClick={() => setShowSignature(true)}>
            <i className="nf nf-md-pencil"></i>
            Proceed to Signature
          </button>
        </div>
      </div>

      {/* Digital Signature Modal */}
      {showSignature && (
        <div className="modal-overlay" onClick={() => setShowSignature(false)}>
          <div className="modal-content signature-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Digital Signature Required</h2>
              <button className="modal-close" onClick={() => setShowSignature(false)}>
                <i className="nf nf-md-close"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="alert alert-info">
                <i className="nf nf-md-information"></i>
                <div>
                  By signing below, you authorize Cigna to proceed with the installation of the selected benefit plans
                  for your organization.
                </div>
              </div>

              <div className="signature-summary">
                <h4>You are authorizing:</h4>
                <ul>
                  <li><i className="nf nf-md-check"></i> {selectedPlans.length} benefit plans</li>
                  <li><i className="nf nf-md-check"></i> {shoppingCart.summary.totalEmployees} employees</li>
                  <li><i className="nf nf-md-check"></i> Monthly cost: {formatCurrency(shoppingCart.summary.totalMonthlyPremium)}</li>
                  <li><i className="nf nf-md-check"></i> Effective date: April 1, 2025</li>
                </ul>
              </div>

              <div className="signature-area">
                <label className="form-label form-label-required">Type your full name to sign</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your full name"
                />
                <div className="form-help">
                  <i className="nf nf-md-shield_lock"></i>
                  Your signature is legally binding and encrypted
                </div>
              </div>

              <div className="signature-agree">
                <label className="checkbox-label">
                  <input type="checkbox" className="form-checkbox" />
                  <span>
                    I have reviewed all plan details and authorize this selection. I understand this is a legally
                    binding electronic signature.
                  </span>
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setShowSignature(false)}>
                Cancel
              </button>
              <button className="btn btn-success">
                <i className="nf nf-md-check"></i>
                Sign and Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanSelection;
