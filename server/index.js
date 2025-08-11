import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import mongoose from 'mongoose';
// import userRoutes from './routes/user.js';
import jobsRoutes from './routes/jobs.js';

dotenv.config({ path: './server/.env' });

// Connect to MongoDB
// mongoose.connect(process.env.DATABASE_URL)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors());
app.use(express.json());
// app.use('/api', userRoutes);
app.use('/api', jobsRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
