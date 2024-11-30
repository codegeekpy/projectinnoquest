const express = require('express');
const { check, validationResult } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

// Define routes
router.post(
  '/',
  [
    check('name').notEmpty().withMessage('Name is required'),
    check('lastLogin').isISO8601().withMessage('Last login must be a valid date')
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userController.addUser
);

router.get('/', async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;

