import express from 'express';
import Comment from '../assets/models/Comment';

// routes/comments.js

const router = express.Router();

router.get('/', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});

router.post('/', async (req, res) => {
    const { name, comment } = req.body;
    const newComment = new Comment({ name, comment });
    await newComment.save();
    res.status(201).json(newComment);
});

export default router;
