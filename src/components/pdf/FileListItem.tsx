'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FileListItemProps {
  id: string;
  name: string;
  size: string;
  index: number;
  totalFiles: number;
  isMerging: boolean;
  onRemove: (id: string) => void;
  onMove: (index: number, direction: 'up' | 'down') => void;
}

export default function FileListItem({
  id,
  name,
  size,
  index,
  totalFiles,
  isMerging,
  onRemove,
  onMove,
}: FileListItemProps) {
  return (
    <div className="file-item flex items-center gap-3 p-3">
      {/* PDF Icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: '#FFF0F2' }}
      >
        <Icon
          name="DocumentIcon"
          size={18}
          variant="solid"
          style={{ color: '#E8445A' } as React.CSSProperties}
        />
      </div>

      {/* Name + Size */}
      <div className="flex-1 min-w-0">
        <p
          className="truncate"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '13.5px',
            color: '#1A1A2E',
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: '#8888A8',
          }}
        >
          {size}
        </p>
      </div>

      {/* Order controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onMove(index, 'up')}
          disabled={index === 0 || isMerging}
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
          style={{
            background: '#F8F8FC',
            color: '#4A4A6A',
            border: '1px solid #EEEEF5',
            cursor: index === 0 ? 'not-allowed' : 'pointer',
          }}
          aria-label="Move up"
        >
          <Icon name="ChevronUpIcon" size={13} />
        </button>

        <button
          onClick={() => onMove(index, 'down')}
          disabled={index === totalFiles - 1 || isMerging}
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
          style={{
            background: '#F8F8FC',
            color: '#4A4A6A',
            border: '1px solid #EEEEF5',
            cursor: index === totalFiles - 1 ? 'not-allowed' : 'pointer',
          }}
          aria-label="Move down"
        >
          <Icon name="ChevronDownIcon" size={13} />
        </button>

        <button
          onClick={() => onRemove(id)}
          disabled={isMerging}
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all ml-1 disabled:opacity-50"
          style={{
            background: '#FFF0F2',
            color: '#E8445A',
            border: '1px solid #FFD6DB',
            cursor: 'pointer',
          }}
          aria-label="Remove file"
        >
          <Icon name="XMarkIcon" size={13} />
        </button>
      </div>
    </div>
  );
}
