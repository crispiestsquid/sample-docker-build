// Importing required modules
const express = require('express');

// Creating an instance of the Express application
const app = express();

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on a port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
