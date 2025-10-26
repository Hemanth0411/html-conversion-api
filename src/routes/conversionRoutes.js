const express = require('express');
const router = express.Router();
const conversionController = require('../controllers/conversionController');

/**
 * @swagger
 * tags:
 *   name: Conversion
 *   description: API endpoints for file conversion
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     HtmlInput:
 *       type: object
 *       required:
 *         - html
 *       properties:
 *         html:
 *           type: string
 *           description: The HTML content to be converted.
 *           example: "<h1>Hello, World!</h1><p>This is a test.</p>"
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A description of the error.
 */

/**
 * @swagger
 * /api/convert/pdf:
 *   post:
 *     summary: Convert HTML to PDF
 *     tags: [Conversion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HtmlInput'
 *     responses:
 *       '200':
 *         description: A PDF file.
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       '400':
 *         description: Bad Request (e.g., missing HTML content).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/pdf', conversionController.convertToPdf);

/**
 * @swagger
 * /api/convert/word:
 *   post:
 *     summary: Convert HTML to Word (.docx)
 *     tags: [Conversion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HtmlInput'
 *     responses:
 *       '200':
 *         description: A DOCX file.
 *         content:
 *           application/vnd.openxmlformats-officedocument.wordprocessingml.document:
 *             schema:
 *               type: string
 *               format: binary
 *       '400':
 *         description: Bad Request (e.g., missing HTML content).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/word', conversionController.convertToDocx);

/**
 * @swagger
 * /api/convert/markdown:
 *   post:
 *     summary: Convert HTML to Markdown
 *     tags: [Conversion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HtmlInput'
 *     responses:
 *       '200':
 *         description: Markdown text.
 *         content:
 *           text/markdown:
 *             schema:
 *               type: string
 *               example: "# Hello, World!"
 *       '400':
 *         description: Bad Request (e.g., missing HTML content).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/markdown', conversionController.convertToMarkdown);

module.exports = router;