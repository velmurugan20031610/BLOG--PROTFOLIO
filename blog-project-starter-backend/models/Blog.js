const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  newTitle: {
    type: String,
    required: true,
  },
  newContent: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  date: String,
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
