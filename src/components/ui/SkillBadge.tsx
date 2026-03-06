import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  category: string;
  icon: LucideIcon;
  index: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, category, icon: Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9, y: 10 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      duration: 0.4, 
      delay: index * 0.05,
      ease: "easeOut"
    }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -4,
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }}
    className="px-4 py-3 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-2 group transition-all hover:border-indigo-500/50 hover:bg-white dark:hover:bg-zinc-900 shadow-sm hover:shadow-md"
  >
    <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-100 dark:border-zinc-700 group-hover:border-indigo-500/30 transition-colors">
      <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-500 transition-colors" />
    </div>
    <div className="text-center">
      <p className="text-zinc-900 dark:text-white font-bold text-xs leading-none mb-1">{name}</p>
      <p className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter font-medium">{category}</p>
    </div>
  </motion.div>
);
