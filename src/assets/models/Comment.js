// models/Comment.js
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);