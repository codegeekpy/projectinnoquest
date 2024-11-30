const { CourseRating } = require('../models');

exports.addCourseRating = async (req, res) => {
  try {
    const courseRating = await CourseRating.create(req.body);
    res.json(courseRating);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add course rating' });
  }
};
