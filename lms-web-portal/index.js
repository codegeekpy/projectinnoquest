const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Synchronize models with the database
db.sequelize.sync();

// Endpoint to add users
app.post('/api/users', async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add user' });
  }
});

// Endpoint to add course ratings
app.post('/api/course-ratings', async (req, res) => {
  try {
    const courseRating = await db.CourseRating.create(req.body);
    res.json(courseRating);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add course rating' });
  }
});

// Endpoint to add engagement metrics
app.post('/api/engagement-metrics', async (req, res) => {
  try {
    const engagementMetric = await db.EngagementMetric.create(req.body);
    res.json(engagementMetric);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add engagement metric' });
  }
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
