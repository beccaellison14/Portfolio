import React from 'react';
import type { SkillCategory } from '../types';
import Section from './Section';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className="text-lg font-semibold text-light-text-header dark:text-dark-lightest-slate mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center bg-light-card dark:bg-dark-light-navy rounded-full px-4 py-2 text-sm text-light-accent dark:text-dark-accent border border-light-border dark:border-transparent">
                  <span className="mr-2">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;