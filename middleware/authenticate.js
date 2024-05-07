// middlewares/authenticate.js

const jwt = require('jsonwebtoken');
require("dotenv").config({ path: ".env" });
const authenticate = async (req, res, next) => {
    const token =await req.cookies.token;
  console.log("hello",token)
    if (token == null) return res.sendStatus(401);
  
  const verification =   jwt.verify(token, process.env.SECRET );
  if(verification){
    next()
  }else{
    console.log("user not autenticated")
    res.status(401).json({message:"user not autherized"})
  }
};

const createCookie = async (req, res) => {
    try {
        const token = jwt.sign({ userId: "sahil" }, process.env.SECRET, { expiresIn: '1d' });
         res.cookie('token', token, {
            maxAge: 9000000,
            httpOnly: true,
            sameSite: 'Strict',
            secure: true,
            path: '/' // Specify the desired path here
        });
        
        res.status(200).json({ message: "user created successfully" });
    } catch (error) {
        console.error(error);
        res.status(400).json({message:"errorr"})
    }
};

// Exporting modules
module.exports = {createCookie,authenticate};
