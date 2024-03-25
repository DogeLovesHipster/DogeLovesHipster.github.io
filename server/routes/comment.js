import express from "express";
import { Comment } from "../models/Comment.js";

/**
 * Fetches comments from the database and sorts them by createdAt in descending order.
 * @type {Array} An array of comments.
 */

const router = express.Router();

// POST route to create a new comment
router.post('/', async (req, res) => {
  console.log('POST request received at:', req.originalUrl);
  console.log('Request body:', req.body);
  try {
    const newComment = req.body;
    console.log('Creating comment:', newComment);
    const comment = await Comment.create(newComment);
    console.log('Comment created:', comment);
    res.status(200).send(comment);
  } catch (error) {
    console.error('Error:', error);
    // This error is being thrown when you submit a comment because the fetch fails when trying to post a comment
    res.status(500).send('An error occurred while creating the comment');
  }
});

// GET route to retrieve all comments
router.get('/', async (req, res) => {
  console.log('GET request received at:', req.originalUrl);
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    console.log('Retrieved comments:', comments);
    res.send(comments);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while retrieving the comments');
  }
});

export default router;