import React from 'react';
import type { ExperienceItem, EducationItem } from '../types';
import Section from './Section';

const TimelineItem: React.FC<{
  title: string;
  subtitle: string;
  dates: string;
  details: string[];
}> = ({ title, subtitle, dates, details }) => (
  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-card lg:dark:group-hover:bg-dark-lightest-navy/10 lg:group-hover:shadow-lg lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-light-text-subtle dark:text-dark-slate sm:col-span-2" aria-label={dates}>{dates}</header>
      <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-light-text-header dark:text-white">
              <div>
                  <span className="inline-block font-medium text-light-text-header dark:text-white group-hover:text-light-accent dark:group-hover:text-dark-accent">{title} · {subtitle}</span>
              </div>
          </h3>
          <ul className="mt-2 list-disc list-inside text-sm text-light-text-main dark:text-dark-light-slate space-y-2">
            {details.map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
          </ul>
      </div>
  </div>
);


const Experience: React.FC<{ experiences: ExperienceItem[], education: EducationItem[] }> = ({ experiences, education }) => {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="flex flex-col gap-y-12">
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={index}
            title={exp.role}
            subtitle={exp.company}
            dates={exp.dates}
            details={exp.achievements}
          />
        ))}
        {education.map((edu, index) => (
          <TimelineItem 
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            dates={edu.dates}
            details={edu.details}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;