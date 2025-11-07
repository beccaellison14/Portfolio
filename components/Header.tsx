import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  tagline: string;
  location: string;
  educationSummary: string;
  email: string;
  currently: string;
}

const MapPinIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-light-text-subtle dark:text-dark-slate flex-shrink-0">
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.223.615-.379 1.085-.764 2.248-1.977 3.234-3.574C17.27 11.59 18 9.582 18 7.5a8 8 0 10-16 0c0 2.082.73 4.09 2.542 5.856C5.53 15.003 6.693 16.216 7.778 16.98c.216.156.43.279.615.379.097.054.195.101.282.14l.018.008.006.003zM10 11.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
    </svg>
);

const AcademicCapIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-light-text-subtle dark:text-dark-slate flex-shrink-0">
        <path d="M3.105 6.137a.75.75 0 01.44-.658l6-3a.75.75 0 01.666 0l6 3a.75.75 0 01.44.658v3.428a.75.75 0 01-.132.428l-1.32 2.31a.75.75 0 01-1.214-.698l.608-1.064-4.94-2.47a.75.75 0 00-.666 0l-4.94 2.47.608 1.064a.75.75 0 01-1.214.698l-1.32-2.31A.75.75 0 013.105 9.565V6.137z" />
        <path d="M15.485 11.332a.75.75 0 01.328 1.125l-4.75 3.333a.75.75 0 01-.826 0l-4.75-3.333a.75.75 0 11.656-1.25l4.515 3.16 4.515-3.16a.75.75 0 011.125-.328z" />
    </svg>
);

const EnvelopeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-light-text-subtle dark:text-dark-slate flex-shrink-0">
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ name, title, tagline, location, educationSummary, email, currently }) => {
  return (
    <div className="text-left">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-light-text-header dark:text-white">{name}</h1>
      <h2 className="mt-3 text-lg sm:text-xl font-medium tracking-tight text-light-text-main dark:text-dark-lightest-slate">{title}</h2>
      
      <p className="mt-4 max-w-md leading-normal text-light-text-subtle dark:text-dark-slate">
        {tagline}
      </p>

      <div className="mt-8 space-y-3 text-sm text-light-text-main dark:text-dark-light-slate">
        <div className="flex items-center">
          <MapPinIcon />
          <span className="ml-3">{location}</span>
        </div>
        <div className="flex items-center">
          <AcademicCapIcon />
          <span className="ml-3">{educationSummary}</span>
        </div>
        <div className="flex items-center">
          <EnvelopeIcon />
          <a href={`mailto:${email}`} className="ml-3 hover:text-light-accent dark:hover:text-dark-accent transition-colors">{email}</a>
        </div>
      </div>
      
      <div className="mt-8 text-sm">
          <p className="text-light-text-main dark:text-dark-slate">{currently}</p>
      </div>
    </div>
  );
};

export default Header;