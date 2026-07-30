import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  category: string;
  icon: LucideIcon;
  index: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, category, icon: Icon, index, isSelected, onClick }) => (
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
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }}
    onClick={onClick}
    className={`px-5 py-4 cursor-pointer bg-white dark:bg-zinc-900 border rounded-[24px] flex flex-col items-center justify-center gap-3 group transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 ${
      isSelected 
        ? "border-indigo-600 dark:border-indigo-500 ring-2 ring-indigo-500/20" 
        : "border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/30"
    }`}
  >
    <div className={`p-3 rounded-xl border transition-all duration-300 ${
      isSelected 
        ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20" 
        : "bg-zinc-50 dark:bg-zinc-800/50 border-zinc-100 dark:border-zinc-700/50 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20"
    }`}>
      <Icon className={`w-6 h-6 transition-colors ${
        isSelected ? "text-white" : "text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-500"
      }`} />
    </div>
    <div className="text-center">
      <p className={`font-black text-sm tracking-tight leading-none mb-1 transition-colors ${
        isSelected ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-900 dark:text-white"
      }`}>{name}</p>
      <p className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
        isSelected ? "text-indigo-500/70" : "text-zinc-400 dark:text-zinc-500 opacity-70"
      }`}>{category}</p>
    </div>
  </motion.div>
);
