#  Digital Portal - Sales to Setup

## Overview

The ** Digital Portal for Client/Broker** is the unified, self-service digital "front door" for clients and brokers in the Sales-to-Setup business process. This portal replaces manual intake processes (emails, spreadsheets, forms) with a modern, automated, and transparent digital pipeline.

This is an "art-of-possible" UI prototype demonstrating the complete digital transformation initiative for client installation process.

## Project Purpose

This prototype demonstrates how to reduce the current 65-day installation process to a competitive 10-day market standard by:
- Eliminating manual data entry and document-based handoffs
- Providing real-time validation and compliance checking
- Leveraging AI for intelligent automation
- Creating transparency through visual progress tracking

## Key Features

### 1. Unified Dashboard
- **Real-time progress tracking** with visual metrics
- **Action items widget** highlighting pending tasks
- **Notification center** for status updates and alerts
- **Team visibility** showing assigned implementation staff
- **Milestone overview** with completion status

### 2. Guided Data Collection (Turbo Tax-Style)
- **Step-by-step workflow** for account setup
- **Real-time validation** of company information, contacts, and addresses
- **Progress indicators** showing completion status
- **Save and resume** capability
- **Form pre-population** where possible

### 3. AI-Powered Document Upload
- **Dual upload methods:**
  - Template-based: Structured Excel template with built-in validation
  - AI-powered: Upload any document format (PDF, Word, Excel, CSV)
- **Generative AI document processing:**
  - Automatic data extraction from unstructured documents
  - Intelligent field mapping to standard format
  - Confidence scoring and validation
  - Manual review for ambiguous entries
- **Real-time file validation** with immediate feedback

### 4. Plan Selection & Shopping Cart
- **Visual plan cards** with detailed feature comparison
- **Real-time compliance validation** for all states
- **Cost breakdown calculator** showing employer/employee contributions
- **Invoice preview** guaranteeing 100% rate accuracy
- **Digital signature capture** for sold commit
- **Multi-plan selection** with enrollment counts

### 5. Status Tracker (Pizza Tracker)
- **Circular progress indicator** showing overall completion
- **Visual timeline** with milestone status
- **Phase-by-phase breakdown** with estimated dates
- **Real-time updates** on current activities
- **Days-to-go-live countdown**
- **Team contact information**

### 6. Real-Time Validation & Compliance
- **AI-driven reconciliation** comparing submitted data against sold plans
- **Automated compliance checks** for state and federal regulations
- **Anomaly detection** flagging discrepancies before submission
- **Instant feedback** on data quality issues

### 7. Light/Dark Theme Toggle
- **System preference detection** - Automatically matches your OS theme
- **Manual toggle** - Click the moon/sun icon in header to switch themes
- **Persistent preference** - Remembers your choice across sessions
- **Smooth transitions** - All components animate smoothly between themes
- **Accessibility** - Optimized contrast ratios for both light and dark modes

## Tech Stack

- **React 18.3.1** - UI framework
- **React Router 6.26** - Client-side routing
- **Vite 5.4** - Build tool and dev server
- **CSS Variables** - Theming with brand colors
- **SVG Graphics** - Official Group logo
- **Nerd Fonts** - Icon system for UI elements

## Brand Colors

The UI uses official brand colors:
- **Primary Blue:** #0080C9
- **Orange:** #FA9800
- **Green:** #52BB40

## Project Structure

```
src/
├── components/
│   ├── Dashboard/           # Main dashboard with metrics and notifications
│   ├── GuidedDataCollection/
│   │   ├── DataCollection.jsx   # Overview page
│   │   ├── AccountSetup.jsx     # Multi-step account setup form
│   │   └── EligibilityUpload.jsx # Employee eligibility file upload
│   ├── PlanSelection/       # Shopping cart and plan review
│   ├── StatusTracker/       # Pizza tracker implementation
│   └── Shared/             # Reusable components (Header, etc.)
├── data/
│   └── mockData.js         # Static data for prototype demonstration
├── styles/
│   └── global.css          # Global styles and brand theme
├── App.jsx                 # Main app with routing
└── main.jsx               # Application entry point
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:3000`

## Key UI Components

### 1. Dashboard (`/`)
- Overall progress metrics
- Pending action items
- Recent notifications
- Implementation team
- Installation timeline overview

### 2. Data Collection (`/data-collection`)
- Step-by-step progress tracker
- Four-phase workflow:
  1. Account Setup
  2. Employee Eligibility
  3. Plan Configuration
  4. Document Upload

### 3. Account Setup (`/data-collection/account-setup`)
- Multi-step form with progress stepper
- Company information
- Contact details
- Mailing address
- Employee counts
- Real-time validation

### 4. Eligibility Upload (`/data-collection/eligibility`)
- Template download
- File upload (drag & drop)
- AI-powered document processing option
- Validation results
- Document library

### 5. Plan Selection (`/plan-selection`)
- Available plans grid
- Plan comparison
- Shopping cart summary
- Cost breakdown table
- Compliance validation
- Digital signature modal

### 6. Status Tracker (`/status-tracker`)
- Progress circle visualization
- Key metrics (days remaining, current phase)
- Visual timeline with milestones
- Task-level progress
- Key dates calendar
- Team contact cards

## AI Integration Points

This prototype demonstrates three AI capabilities outlined in the RFP:

### 1. AI-Assisted Workflow (Client Companion)
*Demonstrated in:* Dashboard and Status Tracker
- Real-time status analysis
- Next best action recommendations
- Risk flagging for edge cases

### 2. AI-Driven Reconciliation & Anomaly Detection
*Demonstrated in:* Data Collection and Plan Selection
- Comparing submitted data against sold plans
- Flagging discrepancies and unusual configurations
- Rate mismatch detection

### 3. Generative AI for Document Processing
*Demonstrated in:* Eligibility Upload
- Document summarization and data extraction
- Unstructured document processing
- Intelligent field mapping
- Confidence scoring

## Mock Data

The prototype uses comprehensive mock data in `src/data/mockData.js` including:
- User profiles
- Installation case details
- Milestones and timeline
- Available benefit plans
- Notifications and tasks
- Validation results
- Document library

## Responsive Design

The UI is fully responsive with breakpoints at:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements

Based on the RFP, future versions could include:
- Integration with actual SUWP Data Hub (SSOT)
- Connection to Vista Rules Engine for real-time validation
- Client Companion workflow orchestration
- FJA Product Builder integration
- FACETS data load automation
- Upstream digital sales and quoting capabilities

## Design Philosophy

This prototype follows a "Turbo Tax-style" user experience:
- **Simple and guided:** Step-by-step workflows with clear instructions
- **Progress visibility:** Always show where users are in the process
- **Error prevention:** Real-time validation to catch issues early
- **Save and resume:** Allow users to complete tasks at their own pace
- **Transparency:** Clear communication about what's happening and why

## Compliance & Security

The UI demonstrates:
- Real-time legislative compliance checking
- State-by-state validation (CA, NY, TX, FL)
- ACA and HIPAA compliance indicators
- Secure data transmission indicators
- Digital signature authorization

## Performance Optimization

- Component-based architecture for code reusability
- CSS variables for efficient theming
- Optimized asset loading
- Minimal external dependencies

## Documentation References

This prototype is based on:
- `reference/Proposal Request_Sales to Setup.docx` - RFP requirements
- `reference/Reference Docs/Ideal State Architecture.jpg` - System architecture
- `reference/Reference Docs/Case Prep and Install.jpg` - Current state process

## Contact

For questions about this prototype or the  Sales-to-Setup initiative:
- Project Lead: TCS

---

**Note:** This is a UI prototype with static data for demonstration purposes. Production implementation would require integration with backend services, security hardening, and full accessibility compliance.
