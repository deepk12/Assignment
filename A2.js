// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a route to handle GET requests
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});
app.get('/hell', (req, res) => {
    res.send('Hello, deep');
  });

// Define a route to handle POST requests
app.post('/user', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: 'User created', name, age });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
