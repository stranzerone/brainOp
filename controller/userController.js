const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users.js');
require("dotenv").config({ path: ".env" });
const createUser = async (req, res) => {
  try {
    // Extract user input from request body
    const { name, profilePhoto, username, email, password } = req.body;
console.log(email,password,username)
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({
      name,
      profilePhoto,
      username,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

 
 

    // Respond with success message and user data
res.status(200).json({message:"user added successfully"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const resetPassword = async (req, res) => {
  // Controller logic for password reset
};

module.exports = { createUser, resetPassword };
