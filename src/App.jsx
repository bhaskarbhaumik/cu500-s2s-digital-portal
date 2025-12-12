import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Shared/Header';
import Dashboard from './components/Dashboard/Dashboard';
import DataCollection from './components/GuidedDataCollection/DataCollection';
import AccountSetup from './components/GuidedDataCollection/AccountSetup';
import EligibilityUpload from './components/GuidedDataCollection/EligibilityUpload';
import PlanSelection from './components/PlanSelection/PlanSelection';
import StatusTracker from './components/StatusTracker/StatusTracker';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/data-collection" element={<DataCollection />} />
            <Route path="/data-collection/account-setup" element={<AccountSetup />} />
            <Route path="/data-collection/eligibility" element={<EligibilityUpload />} />
            <Route path="/plan-selection" element={<PlanSelection />} />
            <Route path="/status-tracker" element={<StatusTracker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
