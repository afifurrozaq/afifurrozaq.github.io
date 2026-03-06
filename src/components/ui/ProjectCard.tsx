import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="p-4 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500/30 transition-all group"
  >
    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex-shrink-0 border border-zinc-200 dark:border-zinc-700">
        <img 
          src={project.image || `https://picsum.photos/seed/${project.title}/100/100`} 
          alt={project.title} 
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1 gap-2">
          <h5 className="text-zinc-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight truncate">{project.title}</h5>
          {project.link ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-500/10 transition-all flex-shrink-0"
              title="View Project"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-600 bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded flex-shrink-0">
              Private
            </span>
          )}
        </div>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-500 mb-2 leading-tight line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.map(t => (
            <span key={t} className="text-[8px] font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-1 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);
