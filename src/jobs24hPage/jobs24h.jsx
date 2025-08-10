import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './jobs24h.css';

const Jobs24h = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => {
        console.log('Jobs API response:', data);
        setJobs(data.jobs || data.results || data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch jobs');
        setLoading(false);
      });
  }, []);

  return (
    <div className="jobs24h-container">
      <h2>Jobs Posted in Last 24 Hours</h2>
      {loading && <div>Loading jobs...</div>}
      {error && <div style={{color: 'red'}}>{error}</div>}
      <div className="jobs-list">
        {!loading && !error && jobs.length === 0 && (
          <div>No jobs found.</div>
        )}
        {jobs.map(job => (
          <div
            className="job-card"
            key={job.id || job._id}
            onClick={() => navigate(`/jobs24h/${job.id || job._id}`)}
          >
            <h3>{job.company || job.company_name}</h3>
            <p><strong>Role:</strong> {job.role || job.title}</p>
            <p><strong>Skills:</strong> {Array.isArray(job.skills) ? job.skills.join(', ') : job.skills || job.required_skills}</p>
            <p><strong>Eligibility:</strong> {job.eligibility || job.qualification || job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs24h;
