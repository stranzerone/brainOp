// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const { getPosts } = require('../controller/postController.js');
const authenticate = require('../middleware/authenticate.js');

router.get('/posts', getPosts);


module.exports = router;
