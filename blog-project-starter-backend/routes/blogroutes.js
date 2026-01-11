const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// GET all projects
router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// ADD project
router.post("/", async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).json(blog);
});

//  LIKE project
router.patch("/like/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog.likes += 1;
  await blog.save();
  res.json(blog);
});

module.exports = router;
