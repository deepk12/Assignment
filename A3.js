// set-cookies

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse cookies
app.use(cookieParser());

// Route to set multiple cookies
app.get('/set-cookies', (req, res) => {
  // Set multiple cookies
  res.cookie('username', 'john', { maxAge: 900000, httpOnly: true });
  res.cookie('email', 'john@example.com', { maxAge: 900000, httpOnly: true });
  res.cookie('language', 'en', { maxAge: 900000, httpOnly: true });

  // Send a response
  res.send('Cookies set successfully');
});

// Route to read cookies
app.get('/get-cookies', (req, res) => {
  // Read cookies
  const username = req.cookies.username;
  const email = req.cookies.email;
  const language = req.cookies.language;

  // Send a response with cookie values
  res.send(`Username: ${username}, Email: ${email}, Language: ${language}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
