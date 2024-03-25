import mongoose from 'mongoose';

/**
 * Represents a comment schema.
 * @typedef {Object} CommentSchema
 * @property {string} name - The name of the commenter.
 * @property {string} comment - The comment text.
 * @property {Date} date - The date the comment was made.
 */

let CommentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
});


export const Comment = mongoose.model('Comment', CommentSchema);