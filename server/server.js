import express from 'express';
// import cors from 'cors';
import mongoose from 'mongoose';
import commentsRouter from '../src/routes/comment.js';

// Constants
const PORT = process.env.PORT || 5174;
const ENV = process.env.NODE_ENV || 'production';
const DB_CONNECT = process.env.DB_CONNECT || 'mongodb://localhost:27017/wikipediaClone'; 

// Initialize Express
const app = express();

// Middleware
// app.use(cors());
app.use(express.json());

// Initialize DB
mongoose.Promise = global.Promise;
mongoose
  .connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 360000,
  })
  .then(() => {
    console.info(`MongoDB connected`);
  })
  .catch((err) => {
    console.error('Mongo Connection Error', err);
  });

// Routes
app.use('/api/comments', commentsRouter);

// Start server
const server = app.listen(PORT, () => {
  console.info(`Server running on port ${PORT} in ${ENV} environment`);
});

export { app as default, server };