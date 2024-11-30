const express = require('express');
const { check, validationResult } = require('express-validator');
const engagementMetricController = require('../controllers/engagementMetricController');

const router = express.Router();

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

module.exports = router;
