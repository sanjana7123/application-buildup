const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegister, validateLogin, handleValidationErrors } = require('../middlewares/validateUser');
const { auth } = require('../middlewares/auth');

router.post('/register', 
  validateRegister, 
  handleValidationErrors,
  authController.register
);

router.post('/login',
  validateLogin,
  handleValidationErrors, 
  authController.login
);

router.get('/me', 
  auth, 
  authController.getMe
);

module.exports = router;