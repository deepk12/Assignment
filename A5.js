const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = 'your_secret_key'; // Replace with your secret key

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Sample user data (replace with your actual user database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Route to generate JWT token upon login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username and password (replace with actual authentication logic)
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
};

// Route accessible only with valid token
app.get('/profile', verifyToken, (req, res) => {
  // Fetch user profile data based on userId
  const user = users.find(u => u.id === req.userId);
  res.json({ user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
