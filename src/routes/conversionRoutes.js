const express = require('express');
const router = express.Router();
const conversionController = require('../controllers/conversionController');

router.post('/pdf', conversionController.convertToPdf);
router.post('/word', conversionController.convertToDocx);
router.post('/markdown', conversionController.convertToMarkdown);

module.exports = router;