import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './jobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => {
        const jobs = data.jobs || data;
        const found = jobs.find(j => String(j.id || j._id) === id);
        setJob(found);
      })
      .catch(() => setJob(null));
  }, [id]);

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
