// Comment.js
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;