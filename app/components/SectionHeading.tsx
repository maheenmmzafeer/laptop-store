import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-10 ${alignClass}`}>
      <h2 className="heading-md mb-3">{title}</h2>
      {subtitle && <p className="text-[var(--text-secondary)]">{subtitle}</p>}
    </div>
  );
}
