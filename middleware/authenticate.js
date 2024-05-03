// middlewares/authenticate.js

const jwt = require('jsonwebtoken');
const User = require('../models/users.js');

const authenticate = async (req, res, next) => {
 
    const token = req.cookies.token;
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, "hello", (err) => {
      if (err) return res.sendStatus(403);
    
      next();
    });

};





module.exports = authenticate;
