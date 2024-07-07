const express = require('express');
const router = express.Router();

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

// Get all ideas
router.get('/', (req, res) => {
  res.send({ success: true, data: ideas });
});
// Get a single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: idea });
});

// Add an idea
router.post('/', (req, res) => {
  res.send('Post success');
});

module.exports = router;
