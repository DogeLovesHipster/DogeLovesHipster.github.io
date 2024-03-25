import mongoose from 'mongoose';

let CommentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
});


export const Comment = mongoose.model('Comment', CommentSchema);