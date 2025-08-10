import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  resumeUrl: String,
  skills: [String],
  location: String,
  preferences: {
    jobTitles: [String],
    companies: [String],
    jobPlatforms: [String], // e.g., ["LinkedIn", "Naukri"]
  },
  questions: {
    salaryExpectation: String,
    noticePeriod: String,
    otherAnswers: [String],
  }
});

export default mongoose.model('User', userSchema);
