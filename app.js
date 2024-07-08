const path = require('path');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
// PORT
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

// Initialize app;
const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware - to send data;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors middleware
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  })
);
// Routes
// Index
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the RandomIdeas API' });
});

// Ideas middleware;
const ideaRouter = require('./routes/ideas');
// All ideas
app.use('/api/ideas', ideaRouter);

// Single idea
app.use('/api/ideas/', ideaRouter);

// Server start
app.listen(port, () => {
  console.log(`=============================`);
  console.log(`Server listening on port:${port}`);
  console.log(`=============================`);
});
