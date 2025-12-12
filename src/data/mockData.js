// Mock Data for Cigna U500 Digital Portal

export const currentUser = {
  id: 'USR001',
  name: 'Jennifer Martinez',
  email: 'jmartinez@acmecorp.com',
  role: 'Client Administrator',
  company: 'Acme Corporation',
  accountId: 'ACC-U500-2025-001',
  phone: '(555) 123-4567'
};

export const installationCase = {
  caseId: 'CASE-2025-001234',
  clientName: 'Acme Corporation',
  effectiveDate: '2025-04-01',
  soldDate: '2025-01-15',
  status: 'in_progress',
  currentPhase: 'data_collection',
  progress: 45,
  daysRemaining: 38,
  targetInstallDate: '2025-03-25',
  broker: {
    name: 'Sarah Johnson',
    firm: 'Benefits Solutions Group',
    email: 'sjohnson@benefitsgroup.com',
    phone: '(555) 987-6543'
  },
  assignedTeam: {
    implementationManager: 'Michael Chen',
    complianceOfficer: 'Patricia Williams',
    salesRep: 'David Thompson'
  }
};

export const milestones = [
  {
    id: 1,
    name: 'Case Initiated',
    description: 'Installation case created and assigned',
    status: 'completed',
    completedDate: '2025-01-16',
    daysToComplete: 1
  },
  {
    id: 2,
    name: 'Data Collection',
    description: 'Client submitting account setup and eligibility data',
    status: 'in_progress',
    startDate: '2025-01-17',
    progress: 65,
    tasks: [
      { name: 'Account Information', status: 'completed' },
      { name: 'Employee Eligibility File', status: 'in_progress' },
      { name: 'Plan Selections', status: 'pending' },
      { name: 'Digital Signatures', status: 'pending' }
    ]
  },
  {
    id: 3,
    name: 'Validation & Compliance',
    description: 'Automated validation and legislative compliance checks',
    status: 'pending',
    estimatedStart: '2025-02-05'
  },
  {
    id: 4,
    name: 'Configuration',
    description: 'Product configuration in FACETS system',
    status: 'pending',
    estimatedStart: '2025-02-12'
  },
  {
    id: 5,
    name: 'Testing & Verification',
    description: 'End-to-end testing and data verification',
    status: 'pending',
    estimatedStart: '2025-02-26'
  },
  {
    id: 6,
    name: 'Go-Live Ready',
    description: 'Installation complete and ready for effective date',
    status: 'pending',
    estimatedStart: '2025-03-25'
  }
];

export const notifications = [
  {
    id: 1,
    type: 'action_required',
    title: 'Employee Eligibility File Upload Needed',
    message: 'Please upload your employee census file to continue the installation process.',
    timestamp: '2025-01-18T14:30:00',
    read: false,
    priority: 'high',
    actionUrl: '/data-collection/eligibility'
  },
  {
    id: 2,
    type: 'info',
    title: 'Account Information Validated',
    message: 'Your account setup information has been successfully validated and approved.',
    timestamp: '2025-01-17T16:45:00',
    read: true,
    priority: 'normal'
  },
  {
    id: 3,
    type: 'success',
    title: 'Case Assigned',
    message: 'Your implementation manager Michael Chen has been assigned to your case.',
    timestamp: '2025-01-16T10:00:00',
    read: true,
    priority: 'normal'
  }
];

export const pendingTasks = [
  {
    id: 1,
    title: 'Upload Employee Eligibility File',
    description: 'Provide employee census data including demographics and plan elections',
    dueDate: '2025-01-25',
    priority: 'high',
    estimatedTime: '30-45 minutes',
    category: 'data_collection',
    actionUrl: '/data-collection/eligibility'
  },
  {
    id: 2,
    title: 'Review and Confirm Plan Selections',
    description: 'Verify the selected benefit plans match your requirements',
    dueDate: '2025-01-28',
    priority: 'high',
    estimatedTime: '20 minutes',
    category: 'plan_selection',
    actionUrl: '/plan-selection'
  },
  {
    id: 3,
    title: 'Digital Signature Required',
    description: 'Authorize final commitment for selected plans',
    dueDate: '2025-02-01',
    priority: 'medium',
    estimatedTime: '5 minutes',
    category: 'signature',
    actionUrl: '/plan-selection/signature'
  }
];

export const availablePlans = [
  {
    id: 'PLAN-HMO-001',
    name: 'Cigna HMO Standard',
    type: 'Medical',
    category: 'HMO',
    monthlyPremium: 485.50,
    employeeContribution: 125.00,
    deductible: 1500,
    oopMax: 5000,
    features: [
      'Primary Care: $20 copay',
      'Specialist: $40 copay',
      'Emergency Room: $250 copay',
      'Prescription Drugs: $10/$30/$60',
      'Preventive Care: Covered 100%'
    ],
    compliance: {
      status: 'validated',
      states: ['CA', 'NY', 'TX', 'FL'],
      aca: true,
      hipaa: true
    },
    selected: true,
    enrollmentCount: 235
  },
  {
    id: 'PLAN-PPO-001',
    name: 'Cigna PPO Preferred',
    type: 'Medical',
    category: 'PPO',
    monthlyPremium: 625.75,
    employeeContribution: 175.00,
    deductible: 1000,
    oopMax: 4000,
    features: [
      'Primary Care: $15 copay (in-network)',
      'Specialist: $35 copay (in-network)',
      'Emergency Room: $200 copay',
      'Out-of-Network Coverage: 70% after deductible',
      'Prescription Drugs: $5/$25/$50',
      'Preventive Care: Covered 100%'
    ],
    compliance: {
      status: 'validated',
      states: ['CA', 'NY', 'TX', 'FL', 'IL', 'PA'],
      aca: true,
      hipaa: true
    },
    selected: true,
    enrollmentCount: 142
  },
  {
    id: 'PLAN-DENTAL-001',
    name: 'Cigna Dental Care DHMO',
    type: 'Dental',
    category: 'DHMO',
    monthlyPremium: 35.50,
    employeeContribution: 15.00,
    annualMaximum: 1500,
    features: [
      'Preventive: Covered 100%',
      'Basic: $10-$50 copays',
      'Major: $100-$500 copays',
      'Orthodontia: $2000 lifetime maximum',
      'No deductibles'
    ],
    compliance: {
      status: 'validated',
      states: ['CA', 'NY', 'TX', 'FL'],
      aca: false,
      hipaa: true
    },
    selected: true,
    enrollmentCount: 312
  },
  {
    id: 'PLAN-VISION-001',
    name: 'Cigna Vision Standard',
    type: 'Vision',
    category: 'Vision',
    monthlyPremium: 12.50,
    employeeContribution: 8.00,
    features: [
      'Eye Exam: $10 copay (annually)',
      'Lenses: $25 copay (annually)',
      'Frames: $130 allowance (every 2 years)',
      'Contacts: $130 allowance (in lieu of glasses)',
      'Lasik: 15% discount'
    ],
    compliance: {
      status: 'validated',
      states: ['CA', 'NY', 'TX', 'FL'],
      aca: false,
      hipaa: true
    },
    selected: true,
    enrollmentCount: 298
  }
];

export const accountSetupData = {
  companyInfo: {
    legalName: 'Acme Corporation',
    dba: 'Acme Corp',
    taxId: '**-***4567',
    sicCode: '3571',
    industry: 'Technology',
    yearEstablished: 2010,
    website: 'www.acmecorp.com'
  },
  primaryContact: {
    firstName: 'Jennifer',
    lastName: 'Martinez',
    title: 'HR Director',
    email: 'jmartinez@acmecorp.com',
    phone: '(555) 123-4567',
    mobile: '(555) 123-4568'
  },
  billingContact: {
    firstName: 'Robert',
    lastName: 'Chen',
    title: 'CFO',
    email: 'rchen@acmecorp.com',
    phone: '(555) 123-4569'
  },
  mailingAddress: {
    street1: '123 Technology Boulevard',
    street2: 'Suite 500',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105'
  },
  employeeCount: {
    total: 487,
    eligible: 425,
    fullTime: 412,
    partTime: 75
  },
  coverage: {
    states: ['CA', 'NY', 'TX', 'FL', 'WA'],
    locations: [
      { city: 'San Francisco', state: 'CA', employeeCount: 315 },
      { city: 'Austin', state: 'TX', employeeCount: 87 },
      { city: 'New York', state: 'NY', employeeCount: 65 },
      { city: 'Seattle', state: 'WA', employeeCount: 20 }
    ]
  }
};

export const validationResults = {
  accountSetup: {
    status: 'passed',
    validatedAt: '2025-01-17T16:45:00',
    checks: [
      { name: 'Tax ID Verification', status: 'passed', message: 'Valid EIN format and verified' },
      { name: 'Address Validation', status: 'passed', message: 'All addresses validated via USPS' },
      { name: 'Contact Information', status: 'passed', message: 'All required contacts provided' }
    ]
  },
  eligibilityFile: {
    status: 'warning',
    validatedAt: null,
    checks: [
      { name: 'File Format', status: 'pending', message: 'Awaiting file upload' },
      { name: 'Required Fields', status: 'pending', message: 'Awaiting file upload' },
      { name: 'Data Quality', status: 'pending', message: 'Awaiting file upload' }
    ]
  },
  planCompliance: {
    status: 'passed',
    validatedAt: '2025-01-16T12:00:00',
    checks: [
      { name: 'State Compliance - CA', status: 'passed', message: 'All plans compliant with CA regulations' },
      { name: 'State Compliance - NY', status: 'passed', message: 'All plans compliant with NY regulations' },
      { name: 'State Compliance - TX', status: 'passed', message: 'All plans compliant with TX regulations' },
      { name: 'ACA Compliance', status: 'passed', message: 'Medical plans meet ACA minimum value requirements' },
      { name: 'HIPAA Compliance', status: 'passed', message: 'All privacy and security requirements met' }
    ]
  }
};

export const eligibilityTemplate = {
  fileName: 'Cigna_Eligibility_Template_v2025.xlsx',
  downloadUrl: '/templates/eligibility-template.xlsx',
  requiredFields: [
    'Employee ID',
    'First Name',
    'Last Name',
    'Date of Birth',
    'Social Security Number',
    'Gender',
    'Address',
    'City',
    'State',
    'ZIP Code',
    'Hire Date',
    'Employment Status',
    'Plan Elections'
  ],
  optionalFields: [
    'Middle Name',
    'Email',
    'Phone',
    'Salary',
    'Department',
    'Job Title'
  ],
  fileFormats: ['XLSX', 'CSV', 'TXT (pipe-delimited)'],
  maxFileSize: '10 MB',
  instructions: [
    'Download the template file',
    'Fill in employee information (one row per employee)',
    'Include all dependents as separate rows with relationship code',
    'Save the file in Excel or CSV format',
    'Upload the completed file below'
  ]
};

export const shoppingCart = {
  items: availablePlans.filter(p => p.selected),
  summary: {
    totalEmployees: 425,
    totalMonthlyPremium: 25847.50,
    employerContribution: 18234.25,
    employeeContribution: 7613.25,
    annualCost: 310170.00
  }
};

export const documentLibrary = [
  {
    id: 1,
    name: 'Benefit Plan Summary - HMO',
    type: 'PDF',
    size: '2.3 MB',
    uploadedBy: 'System',
    uploadedAt: '2025-01-16T10:00:00',
    category: 'Plan Documents'
  },
  {
    id: 2,
    name: 'Benefit Plan Summary - PPO',
    type: 'PDF',
    size: '2.5 MB',
    uploadedBy: 'System',
    uploadedAt: '2025-01-16T10:00:00',
    category: 'Plan Documents'
  },
  {
    id: 3,
    name: 'Eligibility Template',
    type: 'XLSX',
    size: '45 KB',
    uploadedBy: 'System',
    uploadedAt: '2025-01-16T10:00:00',
    category: 'Templates'
  },
  {
    id: 4,
    name: 'Prior Plan Summary',
    type: 'PDF',
    size: '3.1 MB',
    uploadedBy: 'Jennifer Martinez',
    uploadedAt: '2025-01-17T09:15:00',
    category: 'Client Documents'
  }
];
