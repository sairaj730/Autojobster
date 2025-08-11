import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './jobs24h.css';

const Jobs24h = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        // This relative URL will be proxied by Vite to http://localhost:3000/api/jobs
        const response = await fetch('http://localhost:3000/api/jobs');
        console.log("front end fetch called...")
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // The API may return data in a `results` or `jobs` property, or as a root array.
        // || data.jobs || (Array.isArray(data) ? data : [])
        setJobs(data.hits);
        console.log("hell: ",data.hits);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobsData();
  }, []);

  console.log("this is the jobs data for front end: ",jobs);

  if (loading) return <div className="jobs-container">Loading jobs...</div>;
  if (error) return <div className="jobs-container error">Error fetching jobs: {error}</div>;
  if (jobs.length === 0) return <div className="jobs-container">No jobs found.</div>;

  return (
    <div className="jobs-container">
      <h1>Latest Jobs</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id || job._id} className="job-card">
            <Link to={`/jobs/${job.id || job._id}`}>
              <h3>{job.title}</h3>
            </Link>
            <p className="company-name">{job.company_name}</p>
            <p className="job-location">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs24h;