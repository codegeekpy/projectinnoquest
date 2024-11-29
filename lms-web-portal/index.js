const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Sample data for demonstration purposes
let loginCount = 0;

const mockData = {
  users: [
    { id: 1, name: "Alice", lastLogin: "2024-11-29T10:00:00Z" },
    { id: 2, name: "Bob", lastLogin: "2024-11-29T12:00:00Z" },
  ],
  courseRatings: [
    { courseId: 101, rating: 4.5 },
    { courseId: 102, rating: 4.0 },
  ],
  engagementMetrics: [
    { courseId: 101, views: 120, completions: 30 },
    { courseId: 102, views: 200, completions: 50 },
  ],
};

// Test route to verify server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/logins', (req, res) => {
  res.json({ loginCount });
});

app.post('/logins', (req, res) => {
  loginCount++;
  res.json({ loginCount });
});

app.get('/api/users', (req, res) => {
  res.json(mockData.users);
});

app.get('/api/course-ratings', (req, res) => {
  res.json(mockData.courseRatings);
});

app.get('/api/engagement-metrics', (req, res) => {
  res.json(mockData.engagementMetrics);
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});


