/** Lightweight check: scan PDF bytes for the /Encrypt dictionary */
export const isEncryptedPDF = async (file: File): Promise<boolean> => {
  const chunkSize = Math.min(file.size, 65536);
  const tailBuffer = await file.slice(file.size - chunkSize).arrayBuffer();
  const tail = new Uint8Array(tailBuffer);

  const headBuffer = await file.slice(0, Math.min(file.size, 2048)).arrayBuffer();
  const head = new Uint8Array(headBuffer);

  const searchBytes = (buf: Uint8Array, pattern: Uint8Array): boolean => {
    outer: for (let i = 0; i <= buf.length - pattern.length; i++) {
      for (let j = 0; j < pattern.length; j++) {
        if (buf[i + j] !== pattern[j]) continue outer;
      }
      return true;
    }
    return false;
  };

  const encryptPattern = new TextEncoder().encode('/Encrypt');
  return searchBytes(tail, encryptPattern) || searchBytes(head, encryptPattern);
};
