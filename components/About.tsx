import React from 'react';
import Section from './Section';

interface AboutProps {
  content: string;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <Section id="about" title="About Me">
      <p className="text-light-text-main dark:text-dark-light-slate">{content}</p>
    </Section>
  );
};

export default About;