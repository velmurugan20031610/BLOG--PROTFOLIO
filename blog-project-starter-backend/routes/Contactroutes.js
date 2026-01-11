const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST contact message
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ message: "Message stored successfully" });
});

// GET all messages (admin)
router.get("/", async (req, res) => {
  const messages = await Contact.find();
  res.json(messages);
});

module.exports = router;
