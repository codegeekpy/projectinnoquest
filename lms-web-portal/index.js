require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

const userRoutes = require('./routes/userRoutes');
const courseRatingRoutes = require('./routes/courseRatingRoutes');
const engagementMetricRoutes = require('./routes/engagementMetricRoutes');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Synchronize models with the database
db.sequelize.sync();

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/course-ratings', courseRatingRoutes);
app.use('/api/engagement-metrics', engagementMetricRoutes);

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

