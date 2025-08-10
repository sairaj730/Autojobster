import express from 'express';
import { fetchJobs } from '../api/fetchJobs.js';

const router = express.Router();

router.get('/jobs', async (req, res) => {
  try {
    const jobs = await fetchJobs({
      title: req.query.title || '',
      location: req.query.location || '',
      limit: req.query.limit ? Number(req.query.limit) : 10,
      offset: req.query.offset ? Number(req.query.offset) : 0,
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
