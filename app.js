const express = require('express');

// PORT
const port = 5000;

// DEV
const ideas = [
  {
    id: 1,
    text: 'Improve website UI for better user experience',
    tag: 'UI/UX',
    username: 'designerJoe',
    date: '2024-07-06',
  },
  {
    id: 2,
    text: 'Implement a new caching strategy for faster load times',
    tag: 'performance',
    username: 'devJane',
    date: '2024-07-06',
  },
  {
    id: 3,
    text: 'Add dark mode feature to the mobile app',
    tag: 'feature request',
    username: 'user123',
    date: '2024-07-06',
  },
  {
    id: 4,
    text: 'Create a chatbot for customer support',
    tag: 'AI',
    username: 'aiGuru',
    date: '2024-07-06',
  },
  {
    id: 5,
    text: 'Redesign the marketing landing page',
    tag: 'marketing',
    username: 'marketerMike',
    date: '2024-07-06',
  },
];

// Initialize app;
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the RandomIdeas API' });
});
// Get all ideas
app.get('/api/ideas', (req, res) => {
  res.send({ success: true, data: ideas });
});
// Get a single idea
app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: idea });
});

// Server
app.listen(port, () => {
  console.log(`=============================`);
  console.log(`Server listening on port:${port}`);
  console.log(`=============================`);
});
