// src/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// A simple test route
app.get('/', (req, res) => {
  res.send('HTML Conversion API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});