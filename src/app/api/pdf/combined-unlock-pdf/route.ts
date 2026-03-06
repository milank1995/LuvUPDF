import { NextRequest, NextResponse } from 'next/server';

const API_BASE = process.env.API_BASE_URL || 'https://api.luvupdf.com';

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

    // Forward to external API
    const upstream = new FormData();
    upstream.append('file', file);
    upstream.append('password', password);

    const res = await fetch(`${API_BASE}/api/pdf/combined-unlock-pdf`, {
      method: 'POST',
      body: upstream,
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const message = errData.error || errData.message || `Unlock failed: ${res.statusText}`;
      return NextResponse.json({ error: message }, { status: res.status });
    }

    const pdfBuffer = await res.arrayBuffer();
    const originalName = file.name.replace(/\.pdf$/i, '');

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="unlocked_${originalName}.pdf"`,
      },
    });
  } catch (error: any) {
    console.error('API Proxy Error (combined-unlock-pdf):', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
