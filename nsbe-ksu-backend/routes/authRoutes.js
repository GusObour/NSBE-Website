const express = require('express');
const { check } = require('express-validator');
const AuthController = require('../controllers/AuthController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
  '/register',
  [
    check('username').not().isEmpty(),
    check('password').isLength({ min: 6 }),
    check('isLeader').optional().isBoolean(),
  ],
  AuthController.register
);

router.post(
  '/login',
  [
    check('username').not().isEmpty(),
    check('password').not().isEmpty(),
  ],
  AuthController.login
);

router.put(
  '/updateProfile',
  authMiddleware.authenticate,
  [
    check('username').not().isEmpty(),
    check('phoneNumber').not().isEmpty(),
  ],
  AuthController.updateProfile
);

router.put(
  '/changePassword',
  authMiddleware.authenticate,
  [
    check('currentPassword').not().isEmpty(),
    check('newPassword').isLength({ min: 6 }),
  ],
  AuthController.changePassword
);

router.post('/logout', AuthController.logout);

router.get('/session', AuthController.getSession);

module.exports = router;
