import express from 'express';
import { fetchJobs } from '../api/fetchJobs.js';

const router = express.Router();

router.get('/jobs', async (req, res) => {
  try {
    console.log("backend fetch called...")
    const jobs = await fetchJobs({
      title: req.query.title || '',
      location: req.query.location || '',
      size: req.query.size ? Number(req.query.size) : 50,
    });
    console.log('Jobs data:', jobs);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/jobs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // The external API doesn't support fetching by ID, so we fetch all and filter.
    // This is not ideal for performance but is a constraint of the external API.
    const allJobsData = await fetchJobs({});
    const jobs = allJobsData.results || allJobsData.jobs || allJobsData;
    const job = jobs.find(j => String(j.id || j._id) === id);

    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
