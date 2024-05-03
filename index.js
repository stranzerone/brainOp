// index.js

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes.js');
const postRoutes = require('./routes/postsRoute.js');
const {connect}  = require('./database/database.js')
const bodyParser = require('body-parser')
require("dotenv").config({ path: ".env" });
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND,
  credentials: true,
  secure:true
}));

// Connect to MongoDB

connect()

// Use routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
const Port = process.env.PORT
app.listen(Port, () => {
  console.log('Server is running on port ');
});
