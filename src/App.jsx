import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homePage/homepage';
import Contact from './contactPage/contact';
import Applied from './appliedPage/applied';
import Jobs24h from './jobsPage/jobs';
import JobDetails from './jobsPage/jobDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/applied" element={<Applied />} />
        <Route path="/jobs" element={<Jobs24h />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App
