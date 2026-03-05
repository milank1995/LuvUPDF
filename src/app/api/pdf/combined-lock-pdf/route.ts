import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const password = formData.get('password') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }
    if (!password) {
      return NextResponse.json({ error: 'No password provided' }, { status: 400 });
    }

    // Step 1: Upload to LuvUPDF
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    const uploadRes = await fetch('https://api.luvupdf.com/api/pdf/upload-pdf', {
      method: 'POST',
      body: uploadFormData,
    });

    if (!uploadRes.ok) {
      const errData = await uploadRes.json().catch(() => ({}));
      return NextResponse.json(
        { error: errData.message || `Upload failed: ${uploadRes.statusText}` },
        { status: uploadRes.status }
      );
    }

    const { fileId } = await uploadRes.json();

    // Step 2: Lock the PDF
    const lockRes = await fetch('https://api.luvupdf.com/api/pdf/lock-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileId, password }),
    });

    if (!lockRes.ok) {
      const errData = await lockRes.json().catch(() => ({}));
      return NextResponse.json(
        { error: errData.message || `Lock failed: ${lockRes.statusText}` },
        { status: lockRes.status }
      );
    }

    // Step 3: Download the locked PDF
    const downloadRes = await fetch(`https://api.luvupdf.com/api/pdf/${fileId}`);

    if (!downloadRes.ok) {
      return NextResponse.json(
        { error: `Download failed: ${downloadRes.statusText}` },
        { status: downloadRes.status }
      );
    }

    const pdfBuffer = await downloadRes.arrayBuffer();
    const originalName = file.name.replace(/\.pdf$/i, '');

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="locked_${originalName}.pdf"`,
      },
    });
  } catch (error: any) {
    console.error('API Proxy Error (combined-lock-pdf):', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
