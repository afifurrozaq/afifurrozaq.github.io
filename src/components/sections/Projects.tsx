import React, { useMemo } from 'react';
import { Layers, X } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  selectedTech: string | null;
  onTechSelect: (tech: string | null) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ selectedTech, onTechSelect }) => {
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return PROJECTS;
    return PROJECTS.filter(project => 
      project.tech.some(t => t.toLowerCase() === selectedTech.toLowerCase())
    );
  }, [selectedTech]);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionHeading icon={Layers}>Featured Projects</SectionHeading>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl">
              A collection of mobile and web applications I've built, ranging from digital insurance platforms to IoT solutions.
            </p>
          </div>

          <AnimatePresence>
            {selectedTech && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={() => onTechSelect(null)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200/50 dark:border-indigo-500/20 text-sm font-black hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors group"
              >
                <span>Filtering by: <span className="text-indigo-700 dark:text-indigo-300 underline underline-offset-4">{selectedTech}</span></span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-500 dark:text-zinc-400 font-medium italic">No projects found for this technology.</p>
          </div>
        )}
      </div>
    </section>
  );
};
