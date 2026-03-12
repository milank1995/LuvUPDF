'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { SITE_URL } from '@/constants/site';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  color?: string;
}

export default function Breadcrumbs({ items, color = '#E8445A' }: BreadcrumbsProps) {
  // Generate Schema.org BreadcrumbList structured data
  const breadcrumbListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />
      <nav className="flex items-center justify-center gap-2 mb-6" aria-label="Breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={item.label}>
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:opacity-80 transition-opacity"
                  style={{
                    color: '#8888A8',
                    fontSize: '13px',
                    fontFamily: 'var(--font-body)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  style={{
                    color: isLast ? color : '#8888A8',
                    fontSize: '13px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: isLast ? 600 : 400,
                  }}
                >
                  {item.label}
                </span>
              )}

              {!isLast && <Icon name="ChevronRightIcon" size={12} />}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
