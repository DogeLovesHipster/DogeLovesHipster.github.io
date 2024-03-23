import express from "express";
import Comment from "../assets/models/Comment.js";

const router = express.Router();

// POST route to create a new comment
router.post('/', async (req, res) => {
  const newComment = req.body;
  const comment = await Comment.create(newComment);
  res.status(200).send(comment);
});

// GET route to retrieve the _id's of all comments
router.get('/', async (req, res) => {
  const comments = await Comment
    .find({},{ _id: 1 }) // find all, but only return the _id's
    .sort({ createdAt: -1 }); // Sort by date desc
  res.send(comments);
});

// GET route to retrieve a specific comment
router.get('/:id', async (req, res) => {
  const commentId = req.params.id;
  const comment = await Comment.findById(commentId);
  res.status(200).send(comment);
});

// PUT route to update an existing comment
router.put('/:id', async (req, res) => {
  const commentId = req.params.id;
  await Comment.findByIdAndUpdate(commentId, req.body);
  res.status(201).send();
});

// DELETE route to delete a comment
router.delete('/:id', async (req, res) => {
  const commentId = req.params.id;
  await Comment.findByIdAndDelete(commentId);
  res.status(201).send();
});

export default router;