import { PDFDocument } from 'pdf-lib';

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
};
