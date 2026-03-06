import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  children: React.ReactNode;
  icon: LucideIcon;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-indigo-500/10 rounded-lg">
      <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
    </div>
    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight uppercase">{children}</h2>
  </div>
);
