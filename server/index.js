import express from 'express';
import userRoutes from './routes/user.js';
import jobsRoutes from './routes/jobs.js';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', jobsRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
