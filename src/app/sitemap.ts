import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luvupdf.com';

  const today = new Date('2026-03-03');

  const tools = [
    'merge-pdf',
    'remove-pages',
    'split-pdf',
    'compress-pdf',
    'unlock-pdf',
    'lock-pdf',
    'rotate-pdf',
    'organize-pdf',
  ];

  const legal = [
    'privacy-policy',
    'terms-and-conditions',
    'cookie-policy',
    'disclaimer',
    'dmca-policy',
  ];

  const marketing = ['about', 'contact'];

  const toolRoutes = tools.map((tool) => ({
    url: `${baseUrl}/${tool}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const legalRoutes = legal.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  const marketingRoutes = marketing.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...toolRoutes,
    ...legalRoutes,
    ...marketingRoutes,
  ];
}
