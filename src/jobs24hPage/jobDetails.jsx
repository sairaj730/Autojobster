import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './jobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchJob = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/jobs/${id}`);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({})); // Try to get error message from backend
          throw new Error(errorData.error || `Job not found (status: ${response.status})`);
        }
        const data = await response.json();
        setJob(data);
      } catch (e) {
        setError(e.message);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <div className="job-details-container">Loading...</div>;
  if (error) return <div className="job-details-container error">Error: {error}</div>;
  if (!job) return <div className="job-details-container">Job not found.</div>;

  return (
    <div className="job-details-container">
      <h2>{job.company || job.company_name} - {job.role || job.title}</h2>
      <p><strong>Skills:</strong> {Array.isArray(job.skills) ? job.skills.join(', ') : job.skills || job.required_skills}</p>
      <p><strong>Eligibility:</strong> {job.eligibility || job.qualification || job.description}</p>
      <p><strong>Description:</strong> {job.description}</p>
      {job.applyUrl ? (
        <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
          <button className="apply-btn">Apply Now</button>
        </a>
      ) : null}
    </div>
  );
};

export default JobDetails;
