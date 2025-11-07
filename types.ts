
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ProjectExample {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  examples?: ProjectExample[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  dates: string;
  details: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}