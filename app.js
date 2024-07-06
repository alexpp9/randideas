const express = require('express');

// PORT
const port = 5000;

// Initialize app;
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send(`Hey there!`);
});

// Server
app.listen(port, () => {
  console.log(`=============================`);
  console.log(`Server listening on port:${port}`);
  console.log(`=============================`);
});
