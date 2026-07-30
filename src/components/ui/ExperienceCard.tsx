import React from 'react';
import { motion } from 'motion/react';
import { Experience } from '../../types';

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 last:pb-0 border-l border-zinc-200 dark:border-zinc-800"
  >
    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{exp.role}</h3>
      <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">{exp.period}</span>
    </div>
    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm mb-4">
      <span className="font-semibold text-zinc-700 dark:text-zinc-300">{exp.company}</span>
      <span>•</span>
      <span>{exp.location}</span>
    </div>
    <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">{exp.description}</p>
  </motion.div>
);
