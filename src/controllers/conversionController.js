// src/controllers/conversionController.js
const puppeteer = require('puppeteer');

const convertToPdf = async (req, res) => {
  const { html } = req.body;

  if (!html) {
    return res.status(400).json({ error: 'HTML content is required.' });
  }

  let browser;
  try {
    // Launch a headless browser
    browser = await puppeteer.launch({
      headless: true,
      // Required for running in Docker
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage();
    
    // Set the HTML content of the page
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Generate the PDF
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

    // Set response headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.pdf');
    
    // Send the PDF buffer as the response
    res.send(pdfBuffer);

  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF.' });
  } finally {
    // Ensure the browser is closed
    if (browser) {
      await browser.close();
    }
  }
};

module.exports = {
  convertToPdf,
};