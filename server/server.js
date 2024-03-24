import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import Comment from '../src/routes/comment.js';

const app = express();
const port = 5173; // Use the same port as in your React component

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wikipediaClone', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// API endpoints
app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        console.error('Error fetching comments:', err);
        res.status(500).json({ error: 'An error occurred while fetching comments' });
    }
});

app.post('/comments', async (req, res) => {
    const { name, comment } = req.body;

    try {
        const newComment = new Comment({ name, comment });
        await newComment.save();
        res.json(newComment);
    } catch (err) {
        console.error('Error creating comment:', err);
        res.status(500).json({ error: 'An error occurred while creating the comment' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
