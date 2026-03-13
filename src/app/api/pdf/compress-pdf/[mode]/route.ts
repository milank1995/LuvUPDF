import { NextRequest, NextResponse } from 'next/server';

const API_BASE = process.env.API_BASE_URL || 'https://api.luvupdf.com';

export async function POST(request: NextRequest, { params }: { params: { mode: string } }) {
  try {
    const { mode } = params;
    const formData = await request.formData();

    // We forwarded the file in formData from the client
    const file = formData.get('file') as File;
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const upstream = new FormData();
    upstream.append('file', file);

    const res = await fetch(`${API_BASE}/api/pdf/compress-pdf/${mode}`, {
      method: 'POST',
      body: upstream,
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || `Compression failed: ${res.statusText}` },
        { status: res.status }
      );
    }

        // Rewrite pdfUrl to use our local proxy if it points to api.luvupdf.com
        // if (data.pdfUrl && data.pdfUrl.includes('api.luvupdf.com')) {
        //     const url = new URL(data.pdfUrl);
        //     data.pdfUrl = url.pathname;
        // }

    // Return the JSON data directly to the client
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('API Proxy Error (compress-pdf):', error);
    return NextResponse.json(
      { message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
