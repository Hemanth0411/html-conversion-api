const express = require('express');
const conversionRoutes = require('./routes/conversionRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 8080;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HTML Conversion API',
      version: '1.0.0',
      description: 'A simple REST API to convert HTML to PDF, Word, and Markdown formats.',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
  },
  // Path to the API docs files
  apis: ['./src/routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);


// Middleware to parse JSON bodies
app.use(express.json({ limit: '10mb' })); // Increased limit for larger HTML content

// Use the conversion routes for any path starting with /api/convert
app.use('/api/convert', conversionRoutes);

// Serve Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`API docs available at http://localhost:${PORT}/api-docs`);
});