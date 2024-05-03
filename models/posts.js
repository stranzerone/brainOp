// models/post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
 id:{
    type:Number,
    required:true,
    unique:true

 },
 title:{
    type:String,
    required:true,
    unique:true

 },
 body:{
    type:String,
    required:true,
 

 },
 tags:{
    type:Array,
    required:true,
  

 },
 reactions:{
    type:Number,
    required:true,
 

 },

 

});

module.exports = mongoose.model('Post', postSchema);
