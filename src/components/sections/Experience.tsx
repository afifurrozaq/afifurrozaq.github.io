import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../../constants';
import { SectionHeading } from '../ui/SectionHeading';
import { ExperienceCard } from '../ui/ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading icon={Briefcase}>Work Experience</SectionHeading>
        <div className="max-w-4xl">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
