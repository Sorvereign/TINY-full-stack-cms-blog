const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  author: { type: String, unique: true},
  title: { type: String},
  short: { type: String},
  body: { type: String},
  likes: { type: Number}, 
    }, {
    collection: 'posts'
  }
);


module.exports = mongoose.model("Post", PostSchema);
