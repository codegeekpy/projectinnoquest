const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Sample data for demonstration purposes
let loginCount = 0;

// Mock data for LMS
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

// Endpoint to get the number of logins
app.get('/logins', (req, res) => {
  res.json({ loginCount });
});

// Endpoint to increment the login count
app.post('/logins', (req, res) => {
  loginCount++;
  res.json({ loginCount });
});

// Function to fetch LMS data
async function fetchLmsData(endpoint, accessToken) {
  try {
    const response = await axios.get(`https://your-lms-api-url.com${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching LMS data:', error);
    throw error;
  }
}

// Endpoint to get LMS data
app.get('/lms-data', async (req, res) => {
  const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with actual access token
  try {
    const data = await fetchLmsData('/api/v1/data-endpoint', accessToken);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch LMS data' });
  }
});

// Mock data endpoints
app.get('/api/users', (req, res) => {
  res.json(mockData.users);
});

app.get('/api/course-ratings', (req, res) => {
  res.json(mockData.courseRatings);
});

app.get('/api/engagement-metrics', (req, res) => {
  res.json(mockData.engagementMetrics);
});

// Start the server
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

