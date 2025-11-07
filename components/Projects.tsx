import React from 'react';
import type { Project } from '../types';
import Section from './Section';

interface ProjectsProps {
  projects: Project[];
}

const ExternalLinkIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1"><path d="M12.5 8.25a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zM12.5 12a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zM4 6.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 014 6.75zM4 10.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM4 14.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM15.78 3.22a.75.75 0 00-1.06 0L9.22 8.72a.75.75 0 001.06 1.06l5.5-5.5a.75.75 0 000-1.06z" /></svg>
);


const GitHubIconSmall: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M9.421 2.235a.75.75 0 011.158 0l6.75 6.75a.75.75 0 010 1.158l-6.75 6.75a.75.75 0 01-1.158-1.158L15.423 10l-6.001-6.002a.75.75 0 01-.001-1.763z" clipRule="evenodd" /></svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-card lg:dark:group-hover:bg-dark-lightest-navy/10 lg:group-hover:shadow-lg lg:group-hover:drop-shadow-lg"></div>
      <img alt={project.title} loading="lazy" width="200" height="48" className="rounded border-2 border-light-border dark:border-dark-slate/10 transition group-hover:border-light-border dark:group-hover:border-dark-slate/30 sm:col-span-2" style={{color:'transparent'}} src={project.imageUrl} />
      <div className="z-10 sm:col-span-6">
          <h3>
              <a href={project.liveUrl || project.repoUrl || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium leading-tight text-light-text-header dark:text-white hover:text-light-accent dark:hover:text-dark-accent focus-visible:text-light-accent dark:focus-visible:text-dark-accent text-base">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>{project.title}</span>
              </a>
          </h3>
          <p className="mt-2 text-sm leading-normal text-light-text-main dark:text-dark-slate">{project.description}</p>
           {project.examples && (
            <ul className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" aria-label="Project examples">
            {project.examples.map((example) => (
                <li key={example.url}>
                <a href={example.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-light-text-main dark:text-dark-slate hover:text-light-accent dark:hover:text-dark-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.665l3-3z" />
                        <path d="M8.603 17.397a2.5 2.5 0 01-3.535-3.536l1.225-1.224a.75.75 0 00-1.06-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 00-.225-5.865.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.665l-3 3z" />
                    </svg>
                    {example.name}
                </a>
                </li>
            ))}
            </ul>
          )}
          <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                  <span key={tech} className="text-xs bg-light-accent-bg text-light-accent dark:bg-dark-accent/10 dark:text-dark-accent font-medium px-3 py-1 rounded-full">{tech}</span>
              ))}
          </div>
           <div className="mt-4 flex items-center space-x-4 text-light-text-main dark:text-dark-slate">
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300">
                        <GitHubIconSmall />
                        <span className="ml-1 text-sm">Code</span>
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300">
                        <ExternalLinkIcon />
                        <span className="ml-1 text-sm">Live Demo</span>
                    </a>
                )}
            </div>
      </div>
  </div>
);

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-y-12 group/list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;