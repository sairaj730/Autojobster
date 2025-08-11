import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './jobs.css';
import { useNavigate } from 'react-router-dom';
const Jobs24h = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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
  // if (error) return <div className="jobs-container error">Error fetching jobs: {error}</div>;
  // if (jobs.length === 0) return <div className="jobs-container">No jobs found.</div>;

  return (
    <div className="jobs-container">
      <h1>Latest Jobs</h1>
      <div className="job-list">
        {/* {jobs.map((job) => (
          <div key={job.id || job._id} className="job-card">
            <Link to={`/jobs/${job.id || job._id}`}>
              <h3>{job.title}</h3>
            </Link>
            <p className="company-name">{job.company_name}</p>
            <p className="job-location">{job.location}</p>
            <div className="job-actions">
              <button
                onClick={() => navigate(`/jobs/${job.id || job._id}`)}
                className="btn more-details"
              >
                More Details
              </button>

              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn apply-now"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))} */}
        {
          [1,2,3,4,5,6,7,8,8,9,5,5,4,4,3,1,8,7,3].map((job)=>(
            <div key={job} className="job-card">
              <Link to={`/jobs/${job}`}>
                <h3>Job Title {job}</h3>
              </Link>
              <p className="company-name">Company Name {job}</p>
              <p className="job-location">Location {job}</p>
              <div className="job-actions">
                <button
                  onClick={() => navigate(`/jobs/${job}`)}
                  className="btn more-details"
                >
                  More Details
                </button>

                <a
                  href={`http://localhost:3000/api/jobs/${job}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn apply-now"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))

        }
      </div>
    </div>
  );
};

export default Jobs24h;