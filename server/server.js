import express from 'express';
import commentsRouter from '../src/routes/comment.js';

// server.js or app.js

const app = express();

app.use(express.json());
app.use('/api/comments', commentsRouter);

app.listen(5173, () => {
    console.log('Server is running on port 5173');
});
