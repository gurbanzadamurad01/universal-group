import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface TagProps {
  text: string;
  icon: LucideIcon;
  className?: string;
}

const TagComponent: React.FC<TagProps> = ({ text, icon: Icon, className = '' }) => {
  return (
    <span 
      className={`inline-flex items-center px-4 py-2 rounded-full font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-primary/50 backdrop-blur-3xl bg-[#ffe500]/20 text-sm justify-center gap-2 ${className}`}
    >
      <Icon className="h-5 w-5" />
      {text}
    </span>
  );
};

export default TagComponent;