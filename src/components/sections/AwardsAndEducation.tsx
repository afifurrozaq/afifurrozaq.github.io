import React from 'react';
import { Trophy, GraduationCap, Star } from 'lucide-react';
import { AWARDS, EDUCATION } from '../../constants';
import { SectionHeading } from '../ui/SectionHeading';

export const AwardsAndEducation: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Awards */}
          <div>
            <SectionHeading icon={Trophy}>Awards & Recognition</SectionHeading>
            <div className="space-y-6">
              {AWARDS.map((award, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="p-3 bg-amber-500/10 rounded-xl h-fit">
                    <Star className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{award.title}</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold mb-2">{award.organization} • {award.year}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionHeading icon={GraduationCap}>Education</SectionHeading>
            <div className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <GraduationCap className="w-32 h-32 text-indigo-500" />
              </div>
              <div className="relative z-10">
                <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4 inline-block">{EDUCATION.period}</span>
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{EDUCATION.school}</h4>
                <p className="text-lg font-bold text-zinc-700 dark:text-zinc-300 mb-4">{EDUCATION.degree}</p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-bold text-zinc-500 dark:text-zinc-500">GPA:</span>
                  <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{EDUCATION.gpa}</span>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">"{EDUCATION.details}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
