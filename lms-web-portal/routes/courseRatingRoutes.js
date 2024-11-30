const express = require('express');
const { check, validationResult } = require('express-validator');
const courseRatingController = require('../controllers/courseRatingController');

const router = express.Router();

// Define routes
router.post(
  '/',
  [
    check('courseId').isInt().withMessage('Course ID must be an integer'),
    check('rating').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5')
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  courseRatingController.addCourseRating
);

router.get('/', async (req, res) => {
  try {
    const ratings = await courseRatingController.getAllRatings();
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course ratings' });
  }
});

module.exports = router;

