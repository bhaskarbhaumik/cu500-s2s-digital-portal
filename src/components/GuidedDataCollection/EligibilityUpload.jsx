import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { eligibilityTemplate, documentLibrary } from '../../data/mockData';
import './EligibilityUpload.css';

const EligibilityUpload = () => {
  const [uploadMethod, setUploadMethod] = useState('template'); // 'template' or 'ai'
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsProcessing(true);
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        setUploadComplete(true);
      }, 2000);
    }
  };

  return (
    <div className="eligibility-upload">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/data-collection">
          <i className="nf nf-md-chevron_left"></i>
          Back to Data Collection
        </Link>
      </div>

      {/* Page Header */}
      <div className="page-header">
        <h1>Employee Eligibility Submission</h1>
        <p>Upload your employee census data and plan elections. Choose the method that works best for you.</p>
      </div>

      {/* Upload Method Selection */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-file_upload"></i>
          Choose Upload Method
        </div>

        <div className="upload-methods">
          <div
            className={`upload-method ${uploadMethod === 'template' ? 'selected' : ''}`}
            onClick={() => setUploadMethod('template')}
          >
            <div className="method-icon">
              <i className="nf nf-md-table"></i>
            </div>
            <div className="method-content">
              <h3>Use Our Template</h3>
              <p>Download our Excel template, fill it out, and upload it back</p>
              <ul className="method-benefits">
                <li><i className="nf nf-md-check"></i> Pre-formatted columns</li>
                <li><i className="nf nf-md-check"></i> Built-in validation rules</li>
                <li><i className="nf nf-md-check"></i> Faster processing</li>
              </ul>
            </div>
            {uploadMethod === 'template' && (
              <div className="method-badge">
                <i className="nf nf-md-check_circle"></i>
              </div>
            )}
          </div>

          <div
            className={`upload-method ${uploadMethod === 'ai' ? 'selected' : ''}`}
            onClick={() => setUploadMethod('ai')}
          >
            <div className="method-icon ai-icon">
              <i className="nf nf-md-robot"></i>
            </div>
            <div className="method-content">
              <h3>AI-Powered Upload</h3>
              <p>Upload any document - our AI will extract and structure the data for you</p>
              <ul className="method-benefits">
                <li><i className="nf nf-md-check"></i> Upload any format (PDF, Excel, CSV)</li>
                <li><i className="nf nf-md-check"></i> AI extracts data automatically</li>
                <li><i className="nf nf-md-check"></i> Review before submission</li>
              </ul>
            </div>
            {uploadMethod === 'ai' && (
              <div className="method-badge">
                <i className="nf nf-md-check_circle"></i>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Template Method */}
      {uploadMethod === 'template' && (
        <div className="card">
          <div className="card-header">
            <i className="nf nf-md-download"></i>
            Step 1: Download Template
          </div>

          <div className="template-info">
            <div className="template-details">
              <div className="template-icon">
                <i className="nf nf-md-file_excel"></i>
              </div>
              <div>
                <h4>{eligibilityTemplate.fileName}</h4>
                <p>Excel template with validation rules and instructions</p>
                <div className="template-meta">
                  <span><i className="nf nf-md-file"></i> {eligibilityTemplate.maxFileSize} max</span>
                  <span><i className="nf nf-md-format_list_bulleted"></i> {eligibilityTemplate.requiredFields.length} required fields</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">
              <i className="nf nf-md-download"></i>
              Download Template
            </button>
          </div>

          <div className="divider"></div>

          <div className="instructions">
            <h4>Instructions</h4>
            <ol className="instruction-list">
              {eligibilityTemplate.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          <div className="divider"></div>

          <div className="card-header">
            <i className="nf nf-md-upload"></i>
            Step 2: Upload Completed File
          </div>

          {!uploadComplete ? (
            <div className="upload-zone">
              <input
                type="file"
                id="file-upload"
                className="file-input"
                accept=".xlsx,.xls,.csv,.txt"
                onChange={handleFileUpload}
              />
              <label htmlFor="file-upload" className="upload-label">
                <div className="upload-icon">
                  <i className="nf nf-md-cloud_upload"></i>
                </div>
                <div className="upload-text">
                  <h4>Drag and drop your file here</h4>
                  <p>or click to browse</p>
                  <div className="upload-formats">
                    Accepted formats: {eligibilityTemplate.fileFormats.join(', ')}
                  </div>
                </div>
              </label>

              {isProcessing && (
                <div className="upload-processing">
                  <div className="spinner"></div>
                  <p>Processing your file...</p>
                </div>
              )}
            </div>
          ) : (
            <div className="upload-success">
              <div className="success-icon">
                <i className="nf nf-md-check_circle"></i>
              </div>
              <h3>File Uploaded Successfully!</h3>
              <p>Your eligibility file has been received and validated.</p>

              <div className="validation-results">
                <div className="validation-result success">
                  <i className="nf nf-md-check_circle"></i>
                  <div>
                    <strong>425 employees processed</strong>
                    <p>All required fields present and validated</p>
                  </div>
                </div>
                <div className="validation-result success">
                  <i className="nf nf-md-check_circle"></i>
                  <div>
                    <strong>Data quality: Excellent</strong>
                    <p>No errors or inconsistencies detected</p>
                  </div>
                </div>
                <div className="validation-result success">
                  <i className="nf nf-md-check_circle"></i>
                  <div>
                    <strong>Compliance check: Passed</strong>
                    <p>All plan elections comply with federal and state regulations</p>
                  </div>
                </div>
              </div>

              <div className="success-actions">
                <button className="btn btn-outline" onClick={() => setUploadComplete(false)}>
                  <i className="nf nf-md-upload"></i>
                  Upload New File
                </button>
                <Link to="/data-collection" className="btn btn-success">
                  <i className="nf nf-md-check"></i>
                  Continue
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* AI Method */}
      {uploadMethod === 'ai' && (
        <div className="card">
          <div className="card-header">
            <i className="nf nf-md-robot"></i>
            AI-Powered Document Processing
          </div>

          <div className="alert alert-info">
            <i className="nf nf-md-sparkles"></i>
            <div>
              <strong>Powered by Generative AI:</strong> Our AI can read and extract data from any document format,
              including PDFs, Word documents, and spreadsheets. It will automatically identify employee information
              and structure it for you to review.
            </div>
          </div>

          {!uploadComplete ? (
            <div className="upload-zone ai-upload">
              <input
                type="file"
                id="ai-file-upload"
                className="file-input"
                accept=".pdf,.docx,.xlsx,.xls,.csv,.txt"
                onChange={handleFileUpload}
              />
              <label htmlFor="ai-file-upload" className="upload-label">
                <div className="upload-icon ai-icon">
                  <i className="nf nf-md-robot"></i>
                </div>
                <div className="upload-text">
                  <h4>Upload any document with employee data</h4>
                  <p>Our AI will extract and structure the information</p>
                  <div className="upload-formats">
                    Accepted: PDF, Excel, Word, CSV, Text files
                  </div>
                </div>
              </label>

              {isProcessing && (
                <div className="upload-processing ai-processing">
                  <div className="spinner"></div>
                  <div className="processing-steps">
                    <div className="processing-step active">
                      <i className="nf nf-md-check_circle"></i>
                      <span>Uploading document...</span>
                    </div>
                    <div className="processing-step active">
                      <i className="nf nf-md-sync"></i>
                      <span>AI analyzing document structure...</span>
                    </div>
                    <div className="processing-step">
                      <i className="nf nf-md-circle_outline"></i>
                      <span>Extracting employee data...</span>
                    </div>
                    <div className="processing-step">
                      <i className="nf nf-md-circle_outline"></i>
                      <span>Validating information...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="upload-success ai-success">
              <div className="success-icon">
                <i className="nf nf-md-robot"></i>
              </div>
              <h3>AI Processing Complete!</h3>
              <p>We've extracted employee data from your document. Please review and confirm.</p>

              <div className="ai-results">
                <div className="result-stat">
                  <div className="stat-value">425</div>
                  <div className="stat-label">Employees Identified</div>
                </div>
                <div className="result-stat">
                  <div className="stat-value">98%</div>
                  <div className="stat-label">Confidence Score</div>
                </div>
                <div className="result-stat">
                  <div className="stat-value">12</div>
                  <div className="stat-label">Fields Extracted</div>
                </div>
              </div>

              <div className="ai-summary">
                <h4>AI Summary</h4>
                <div className="summary-items">
                  <div className="summary-item">
                    <i className="nf nf-md-check_circle"></i>
                    <span>Identified employee names, DOB, SSN, addresses</span>
                  </div>
                  <div className="summary-item">
                    <i className="nf nf-md-check_circle"></i>
                    <span>Extracted plan elections and dependent information</span>
                  </div>
                  <div className="summary-item">
                    <i className="nf nf-md-check_circle"></i>
                    <span>Mapped to standard eligibility format</span>
                  </div>
                  <div className="summary-item warning">
                    <i className="nf nf-md-alert"></i>
                    <span>3 entries require manual review (ambiguous dates)</span>
                  </div>
                </div>
              </div>

              <div className="success-actions">
                <button className="btn btn-outline" onClick={() => setUploadComplete(false)}>
                  <i className="nf nf-md-upload"></i>
                  Upload Different File
                </button>
                <button className="btn btn-secondary">
                  <i className="nf nf-md-eye"></i>
                  Review Data
                </button>
                <Link to="/data-collection" className="btn btn-success">
                  <i className="nf nf-md-check"></i>
                  Approve & Continue
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Field Reference */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-information"></i>
          Required Fields Reference
        </div>

        <div className="fields-grid">
          <div className="field-group">
            <h4>Required Fields</h4>
            <ul className="field-list required">
              {eligibilityTemplate.requiredFields.map((field, index) => (
                <li key={index}>
                  <i className="nf nf-md-checkbox_marked"></i>
                  {field}
                </li>
              ))}
            </ul>
          </div>

          <div className="field-group">
            <h4>Optional Fields</h4>
            <ul className="field-list optional">
              {eligibilityTemplate.optionalFields.map((field, index) => (
                <li key={index}>
                  <i className="nf nf-md-checkbox_blank_outline"></i>
                  {field}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Document Library */}
      <div className="card">
        <div className="card-header">
          <i className="nf nf-md-folder"></i>
          Your Documents
        </div>

        <div className="document-list">
          {documentLibrary.map(doc => (
            <div key={doc.id} className="document-item">
              <div className="document-icon">
                {doc.type === 'PDF' && <i className="nf nf-md-file_pdf_box"></i>}
                {doc.type === 'XLSX' && <i className="nf nf-md-file_excel"></i>}
              </div>
              <div className="document-info">
                <div className="document-name">{doc.name}</div>
                <div className="document-meta">
                  {doc.size} • Uploaded by {doc.uploadedBy} • {new Date(doc.uploadedAt).toLocaleDateString()}
                </div>
              </div>
              <div className="document-actions">
                <button className="btn btn-sm btn-outline">
                  <i className="nf nf-md-download"></i>
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilityUpload;
