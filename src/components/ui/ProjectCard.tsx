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
    className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-indigo-500/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
  >
    <div className="flex gap-5">
      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0 border border-zinc-100 dark:border-zinc-800 transition-transform group-hover:scale-105">
        <img 
          src={project.image || `https://picsum.photos/seed/${project.title}/100/100`} 
          alt={project.title} 
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <div className="flex justify-between items-start mb-1.5 gap-2">
            <h5 className="text-zinc-900 dark:text-white font-black text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight truncate">
              {project.title}
            </h5>
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-500/10 transition-all flex-shrink-0 shadow-sm"
                title="View Project"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-lg flex-shrink-0">
                Private
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 leading-relaxed line-clamp-2 font-medium">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="text-[9px] font-bold bg-indigo-500/5 dark:bg-indigo-400/5 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-lg border border-indigo-500/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);
