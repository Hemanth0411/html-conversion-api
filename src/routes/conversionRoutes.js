const express = require('express');
const router = express.Router();
const conversionController = require('../controllers/conversionController');

// Define the POST route for PDF conversion
router.post('/pdf', conversionController.convertToPdf);
router.post('/word', conversionController.convertToDocx);

module.exports = router;