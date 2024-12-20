require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Add this line to require the path module
const db = require('./models');

const userRoutes = require('./routes/userRoutes');
const courseRatingRoutes = require('./routes/courseRatingRoutes');
const engagementMetricRoutes = require('./routes/engagementMetricRoutes');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Synchronize models with the database
db.sequelize.sync();

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/course-ratings', courseRatingRoutes);
app.use('/api/engagement-metrics', engagementMetricRoutes);

app.get('/logins', async (req, res) => { try { const userCount = await db.User.count(); res.json({ loginCount: userCount }); } catch (error) { res.status(500).json({ error: 'Failed to fetch login count' }); } });

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});



