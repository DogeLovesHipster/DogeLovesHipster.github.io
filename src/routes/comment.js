import express from "express";
import { Comment } from "../assets/models/Comment.js";

const router = express.Router();

// POST route to create a new comment
router.post('/', async (req, res) => {
  console.log('POST request received at:', req.originalUrl);
  try {
    const newComment = req.body;
    console.log('Creating comment:', newComment);
    const comment = await Comment.create(newComment);
    console.log('Comment created:', comment);
    res.status(200).send(comment);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while creating the comment');
  }
});

// GET route to retrieve all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.send(comments);
  } catch (error) {
    console.error('An error occurred while retrieving the comments:', error);
    res.status(500).send('An error occurred while retrieving the comments');
  }
});

export default router;
