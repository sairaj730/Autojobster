import React from 'react';
import './applied.css';

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'Google',
    platform: 'LinkedIn',
    appliedDate: '2025-08-01',
    status: 'Under Review',
  },
  {
    title: 'Backend Engineer',
    company: 'Amazon',
    platform: 'Naukri',
    appliedDate: '2025-07-28',
    status: 'Interview Scheduled',
  },
  // Add more jobs as needed
];

const Applied = () => {
  return (
    <div className="applied-container">
      <h2>Applied Jobs</h2>
      <div className="jobs-list">
        {jobs.length === 0 ? (
          <p>No jobs applied yet.</p>
        ) : (
          jobs.map((job, idx) => (
            <div className="job-card" key={idx}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Platform:</strong> {job.platform}</p>
              <p><strong>Date Applied:</strong> {job.appliedDate}</p>
              <p><strong>Status:</strong> {job.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Applied;
