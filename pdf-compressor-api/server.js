const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Directories
const UPLOADS_DIR = path.join(__dirname, 'temp', 'uploads');
const COMPRESSED_DIR = path.join(__dirname, 'temp', 'compressed');

// Ensure directories exist
fs.ensureDirSync(UPLOADS_DIR);
fs.ensureDirSync(COMPRESSED_DIR);

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}_${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
});

/**
 * PDF Compression Level Mapping (Ghostscript presets)
 * /screen  - 72 dpi (lowest size)
 * /ebook   - 150 dpi (balanced)
 * /printer - 300 dpi (high quality)
 */
const GS_LEVELS = {
  screen: '/screen',
  ebook: '/ebook',
  printer: '/printer',
  prepress: '/prepress',
  default: '/default',
};

/**
 * Compression Endpoint
 * POST /compress?level=ebook
 */
app.post('/compress', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const inputPath = req.file.path;
  const outputFileName = `compressed_${req.file.filename}`;
  const outputPath = path.join(COMPRESSED_DIR, outputFileName);

  // Get compression level from query, default to ebook
  const level = GS_LEVELS[req.query.level] || GS_LEVELS.ebook;

  console.log(`Starting compression for ${req.file.originalname} at level ${level}`);

  // Ghostscript command
  // -sDEVICE=pdfwrite: Uses the high-level PDF writing device
  // -dPDFSETTINGS: Sets the compression preset
  // -dCompatibilityLevel=1.4: Maximizes compatibility
  const gsCommand = [
    'gs',
    '-sDEVICE=pdfwrite',
    '-dCompatibilityLevel=1.4',
    `-dPDFSETTINGS=${level}`,
    '-dNOPAUSE',
    '-dQUIET',
    '-dBATCH',
    `-sOutputFile="${outputPath}"`,
    `"${inputPath}"`,
  ].join(' ');

  exec(gsCommand, async (error, stdout, stderr) => {
    if (error) {
      console.error(`GS Error: ${error.message}`);
      await cleanupFiles(inputPath, outputPath);
      return res.status(500).json({
        error: 'Compression failed',
        details: stderr || error.message,
      });
    }

    // Check if output exists and has size
    try {
      if (await fs.exists(outputPath)) {
        const stats = await fs.stat(outputPath);
        console.log(`Compression finished. Output size: ${stats.size} bytes`);

        // Send file back to client
        res.download(outputPath, `compressed_${req.file.originalname}`, async (downloadErr) => {
          if (downloadErr) {
            console.error('Download error:', downloadErr);
          }
          // Cleanup after download
          await cleanupFiles(inputPath, outputPath);
        });
      } else {
        throw new Error('Compressed file not found after processing');
      }
    } catch (err) {
      console.error('Finalization error:', err);
      await cleanupFiles(inputPath, outputPath);
      res.status(500).json({ error: 'Failed to finalize compressed file' });
    }
  });
});

/**
 * Utility to cleanup temporary files
 */
async function cleanupFiles(...paths) {
  for (const p of paths) {
    try {
      if (await fs.exists(p)) {
        await fs.remove(p);
      }
    } catch (err) {
      console.warn(`Cleanup failed for ${p}:`, err);
    }
  }
}

// Start Server
app.listen(port, () => {
  console.log(`PDF Compressor API running at http://localhost:${port}`);
  console.log('Ensure Ghostscript (gs) is installed and in your PATH.');
});
