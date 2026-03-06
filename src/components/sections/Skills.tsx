import React from 'react';
import { Code2 } from 'lucide-react';
import { SKILLS } from '../../constants';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillBadge } from '../ui/SkillBadge';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading icon={Code2}>Technical Expertise</SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillBadge key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
