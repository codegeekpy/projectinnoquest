const express = require('express');
const { check, validationResult } = require('express-validator');
const engagementMetricController = require('../controllers/engagementMetricController');

const router = express.Router();

// Define routes
router.post(
  '/',
  [
    check('courseId').isInt().withMessage('Course ID must be an integer'),
    check('views').isInt().withMessage('Views must be an integer'),
    check('completions').isInt().withMessage('Completions must be an integer')
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  engagementMetricController.addEngagementMetric
);

router.get('/', async (req, res) => {
  try {
    const metrics = await engagementMetricController.getAllMetrics();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch engagement metrics' });
  }
});

module.exports = router;

