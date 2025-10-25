const express = require('express');
const router = express.Router();
const conversionController = require('../controllers/conversionController');

// Define the POST route for PDF conversion
router.post('/pdf', conversionController.convertToPdf);

module.exports = router;