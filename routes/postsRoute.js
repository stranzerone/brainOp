// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const {getPosts} = require('../controller/postController');
const { authenticate } = require('../middleware/authenticate');
router.get('/posts',authenticate,getPosts);


module.exports = router;
