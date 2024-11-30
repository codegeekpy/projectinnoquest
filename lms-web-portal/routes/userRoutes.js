const express = require('express');
const { check, validationResult } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

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

module.exports = router;
