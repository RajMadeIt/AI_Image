import mongoose from 'mongoose';

//creating the schema

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});


//creating the model for posting  
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;