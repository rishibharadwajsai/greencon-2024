/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutVit from './pages/AboutVit';
import OrganizingCommittee from './pages/OrganizingCommittee';
import CallForPapers from './pages/CallForPapers';
import PaperSubmission from './pages/PaperSubmission';
import Registration from './pages/Registration';
import AdvisoryBoard from './pages/AdvisoryBoard';
import ConferenceSpeakers from './pages/ConferenceSpeakers';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-vit" element={<AboutVit />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/advisory-board" element={<AdvisoryBoard />} />
          <Route path="/conference-speakers" element={<ConferenceSpeakers />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/organizing-committee" element={<OrganizingCommittee />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
