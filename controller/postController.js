// controllers/postController.js
const Post = require('../models/posts.js');


const getPosts = async (req, res) => {
try {
        const posts = await Post.find({});
      if(posts){
        res.status(200).json(posts)
      }
    
}catch(error){
  console.error(error)
  res.status(500).json({message:'error while receiveing data from server'})
}

}




module.exports = {getPosts};
