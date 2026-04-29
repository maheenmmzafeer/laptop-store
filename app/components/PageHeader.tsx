import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export default function PageHeader({ title, subtitle, badge, align = 'left' }: PageHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const flexClass = align === 'center' ? 'items-center' : 'items-start';

  return (
    <div className={`flex flex-col ${flexClass} ${alignClass} mb-12 animate-fade-up`}>
      {badge && (
        <span className="badge badge-blue mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          {badge}
        </span>
      )}
      <h1 className="heading-lg mb-4">{title}</h1>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
