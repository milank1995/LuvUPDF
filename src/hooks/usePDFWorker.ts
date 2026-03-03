'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface WorkerError {
  fileName: string;
  message: string;
  isEncrypted: boolean;
}

export function usePDFWorker() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Initialize worker
    workerRef.current = new Worker(new URL('../workers/pdfWorker.ts', import.meta.url));

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const processPDFs = useCallback((type: string, files: { blob: Blob; name: string }[]) => {
    return new Promise<{ blob: Blob | null; errors: WorkerError[] }>((resolve, reject) => {
      if (!workerRef.current) {
        reject(new Error('Worker not initialized'));
        return;
      }

      setIsProcessing(true);
      setProgress(0);

      workerRef.current.onmessage = (e) => {
        const { type: responseType, progress: p, result, errors, message } = e.data;

        switch (responseType) {
          case 'PROGRESS':
            setProgress(p);
            break;
          case 'SUCCESS':
            setIsProcessing(false);
            resolve({
              blob: new Blob([result], { type: 'application/pdf' }),
              errors: errors || [],
            });
            break;
          case 'ERROR':
            setIsProcessing(false);
            if (message) {
              reject(new Error(message));
            } else {
              resolve({ blob: null, errors: errors || [] });
            }
            break;
        }
      };

      workerRef.current.postMessage({ type, files });
    });
  }, []);

  return { processPDFs, isProcessing, progress };
}
