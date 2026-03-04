import { PDFDocument, PDFName } from 'pdf-lib';

/**
 * Web Worker for handling PDF operations to keep the UI thread responsive.
 */

self.onmessage = async (e: MessageEvent) => {
  const { type, files } = e.data;

  if (type === 'MERGE_PDFS') {
    try {
      const mergedPdf = await PDFDocument.create();
      let mergedPageCount = 0;
      const errors: { fileName: string; message: string; isEncrypted: boolean }[] = [];

      for (let i = 0; i < files.length; i++) {
        const { blob, name } = files[i];
        try {
          const arrayBuffer = await blob.arrayBuffer();
          const pdf = await PDFDocument.load(arrayBuffer);
          const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
          copiedPages.forEach((page) => mergedPdf.addPage(page));
          mergedPageCount += copiedPages.length;
        } catch (error: any) {
          const errorMessage = error?.message || String(error) || '';
          const isEncrypted = /encrypted|password|security|locked/i.test(errorMessage);

          errors.push({
            fileName: name,
            message: errorMessage,
            isEncrypted,
          });
        }

        // Report progress
        self.postMessage({
          type: 'PROGRESS',
          progress: Math.round(((i + 1) / files.length) * 100),
        });
      }

      if (mergedPageCount === 0) {
        self.postMessage({ type: 'ERROR', errors });
        return;
      }

      const mergedBytes = await mergedPdf.save();
      // Transfer the buffer for performance
      (self as any).postMessage(
        {
          type: 'SUCCESS',
          result: mergedBytes,
          errors,
        },
        [mergedBytes.buffer]
      );
    } catch (err: any) {
      self.postMessage({ type: 'ERROR', message: err.message || 'Unknown error during merge' });
    }
  }

  if (type === 'COMPRESS_PDF') {
    try {
      const results = [];
      const errors = [];

      for (let i = 0; i < files.length; i++) {
        const { blob, name, level } = files[i];
        try {
          const arrayBuffer = await blob.arrayBuffer();
          const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

          // Create a fresh document to strip all historical incremental updates and unused objects
          const newPdfDoc = await PDFDocument.create();
          const copiedPages = await newPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());
          copiedPages.forEach((page) => newPdfDoc.addPage(page));

          // Aggressive Structural Cleanup
          // Use dictionary access to avoid TypeScript errors and ensure deep deletion of bloat
          const catalogDict = (newPdfDoc.catalog as any).dict;

          if (catalogDict) {
            try {
              // Catalog level cleanup
              catalogDict.delete(PDFName.of('StructTreeRoot'));
              catalogDict.delete(PDFName.of('MarkInfo'));
              catalogDict.delete(PDFName.of('PieceInfo'));
              catalogDict.delete(PDFName.of('Metadata'));
              catalogDict.delete(PDFName.of('OCProperties'));
              catalogDict.delete(PDFName.of('OutputIntents'));
              catalogDict.delete(PDFName.of('Names'));
              catalogDict.delete(PDFName.of('ViewerPreferences'));
              catalogDict.delete(PDFName.of('AF')); // Associated Files
              catalogDict.delete(PDFName.of('Dests')); // Named Destinations
            } catch (cleanupErr) {
              console.warn('Catalog cleanup failed:', cleanupErr);
            }
          }

          // Strip the Info dictionary (contains Creator, Producer, etc.)
          const infoDict = (newPdfDoc as any).getInfoDict();
          if (infoDict) {
            infoDict.keys().forEach((key: any) => infoDict.delete(key));
          }

          // Page level cleanup (Thumbnails, PieceInfo)
          try {
            const pages = newPdfDoc.getPages();
            pages.forEach((page) => {
              const pageDict = (page as any).node?.dict;
              if (pageDict) {
                pageDict.delete(PDFName.of('Thumb'));
                pageDict.delete(PDFName.of('PieceInfo'));
              }
            });
          } catch (pageErr) {
            console.warn('Page-level pruned failed:', pageErr);
          }

          // Strip metadata tags manually if needed
          if (level === 'extreme') {
            newPdfDoc.setProducer('LuvUPDF');
            newPdfDoc.setCreator('LuvUPDF');
          }

          // Optimized save options
          const compressedBytes = await newPdfDoc.save({
            useObjectStreams: true,
            updateFieldAppearances: false,
          });

          results.push({
            name,
            originalSize: blob.size,
            compressedSize: compressedBytes.length,
            bytes: compressedBytes,
          });
        } catch (error: any) {
          errors.push({
            fileName: name,
            message: error?.message || String(error),
            isEncrypted: /encrypted|password|security|locked/i.test(error?.message || ''),
          });
        }

        // Report progress
        self.postMessage({
          type: 'PROGRESS',
          progress: Math.round(((i + 1) / files.length) * 100),
        });
      }

      if (results.length === 0) {
        self.postMessage({ type: 'ERROR', errors });
        return;
      }

      // Transfer buffers for performance
      const buffers = results.map((r) => r.bytes.buffer);
      (self as any).postMessage(
        {
          type: 'SUCCESS',
          results,
          errors,
        },
        buffers
      );
    } catch (err: any) {
      self.postMessage({
        type: 'ERROR',
        message: err.message || 'Unknown error during compression',
      });
    }
  }
};
