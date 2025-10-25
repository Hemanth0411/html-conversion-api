const express = require('express');
const conversionRoutes = require('./routes/conversionRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json({ limit: '10mb' })); // Increased limit for larger HTML content

// Use the conversion routes for any path starting with /api/convert
app.use('/api/convert', conversionRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});