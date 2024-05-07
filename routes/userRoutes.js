// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { createUser, resetPassword } = require('../controller/userController.js');
const authenticate = require('../middleware/authenticate.js');

router.post('/signup', createUser,authenticate.createCookie); // Call createCookie middleware after createUser
router.post('/reset-password',authenticate.authenticate, resetPassword);
router.get('/getCookie',authenticate.createCookie ); // This route to get cookie might be for testing purposes

module.exports = router;
