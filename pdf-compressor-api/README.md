# PDF Compressor API

This is a standalone Node.js API that uses **Ghostscript** to provide high-level PDF compression (including image resampling and downscaling).

## 🚀 Setup Instructions

### 1. Install Ghostscript
You must have Ghostscript installed on your machine and available in your system's PATH.
- **Windows**: [Download here](https://ghostscript.com/releases/gsdnld.html) (Install the 64-bit version and ensure `gs` is in PATH).
- **macOS**: `brew install ghostscript`
- **Linux**: `sudo apt install ghostscript`

### 2. Install Dependencies
Navigate to the `pdf-compressor-api` folder and run:
```bash
npm install
```

### 3. Start the API
```bash
npm start
```
The server will start at `http://localhost:3001`.

## 📡 API Usage

### Compress PDF
**Endpoint**: `POST /compress`
**Query Param**: `level` (optional)
- `screen`: 72 DPI (Maximum compression)
- `ebook`: 150 DPI (Balanced - Default)
- `printer`: 300 DPI (High quality)

**Example with `curl`**:
```bash
curl -X POST -F "file=@yourfile.pdf" "http://localhost:3001/compress?level=screen" --output compressed_file.pdf
```

## 🛠️ How it works
The API uses Ghostscript's `pdfwrite` device with optimized presets. It performs structural pruning, font embedding optimization, and image downscaling—tasks that cannot be performed by client-side browser libraries.
