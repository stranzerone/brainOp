// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { createUser, resetPassword } = require('../controller/userController.js');

router.post('/signup', createUser);
router.post('/reset-password', resetPassword);

module.exports = router;
