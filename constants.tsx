import React from 'react';
import type { SkillCategory, Project, ExperienceItem, EducationItem, SocialLink, ProjectExample } from './types';

// SVG Icons (simple examples)
const LinkedInIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 114.75 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.91 0-1.38.61-1.38 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.28.93 3.28 4.3v4.8z" /></svg>
);

const GitHubIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const PROFILE_DATA = {
  name: "Rebecca Ellison",
  title: "Developer Engineer",
  tagline: "I build AI-powered websites, dashboards and digital tools that improve workflows and user experiences.",
  about: "A creative Software Engineering graduate with first-class honours, passionate about building digital solutions. I specialise in website development, automation, and UX improvements, leveraging AI tools to enhance workflows and create positive client experiences.",
  email: "rgellison@live.com",
  location: "Manchester, UK",
  educationSummary: "BSc Software Engineering (First Class)",
  currently: "Currently at Add People — Onboarding Executive (Say Hello AI)",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rebecca-ellison-407318170/", icon: <LinkedInIcon /> },
    { name: "GitHub", url: "https://github.com/rebecca-ellison/portfolio-app", icon: <GitHubIcon /> },
  ] as SocialLink[],

  skills: [
    {
      category: "Web & Frontend",
      skills: [
        { name: "HTML", icon: <span>🎨</span> },
        { name: "CSS", icon: <span>🎨</span> },
        { name: "JavaScript", icon: <span>🚀</span> },
        { name: "React", icon: <span>⚛️</span> },
        { name: "WordPress", icon: <span>🌐</span> },
        { name: "10Web AI Builder", icon: <span>🤖</span> },
        { name: "Bootstrap", icon: <span>🅱️</span> },
        { name: "jQuery", icon: <span>💲</span> },
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "MVC (C#)", icon: <span>⚙️</span> },
        { name: "CSHTML", icon: <span>⚙️</span> },
        { name: "MySQL", icon: <span>🗄️</span> },
        { name: "REST APIs", icon: <span>🔄</span> },
      ],
    },
    {
      category: "AI & Automation",
      skills: [
        { name: "Google AI Studio", icon: <span>✨</span> },
        { name: "ChatGPT Prompt Engineering", icon: <span>✍️</span> },
        { name: "AI QA Systems", icon: <span>✔️</span> },
        { name: "Dashboard Automation", icon: <span>📊</span> },
      ],
    },
    {
      category: "Other",
      skills: [
        { name: "Figma", icon: <span>🖌️</span> },
        { name: "Adobe XD", icon: <span>🖌️</span> },
        { name: "UX/UI Design", icon: <span>🎨</span> },
        { name: "Agile (ClickUp)", icon: <span>📋</span> },
        { name: "Documentation (TBAP)", icon: <span>📄</span> },
      ],
    },
  ] as SkillCategory[],
  
  projects: [
    {
      title: "Say Hello Internal Dashboard",
      description: "Developed a comprehensive internal dashboard to streamline client onboarding and technical setup, featuring a CSS template builder, report generator, interactive checklists, and an AI-powered help chatbot.",
      technologies: ["React", "CSS", "AI Integration", "Dashboard Automation"],
      imageUrl: "https://placehold.co/200x112/112240/64ffda?text=Dashboard",
    },
    {
      title: "AI Website Quality Checker",
      description: "Created a custom GPT to audit websites against client requirements and built a visual Google AI Studio app for generating 'done vs. to-do' checklists and exporting reports.",
      technologies: ["Custom GPT", "Google AI Studio", "AI QA"],
      imageUrl: "https://placehold.co/200x112/112240/64ffda?text=AI+Checker",
    },
    {
      title: "30+ AI-Generated WordPress Websites",
      description: "Designed and launched over 30 websites for diverse industries (construction, finance, e-commerce) using 10Web AI and WordPress, focusing on rapid deployment and branding consistency. A few examples include:",
      technologies: ["WordPress", "10Web AI", "UX/UI Design"],
      imageUrl: "https://placehold.co/200x112/112240/64ffda?text=AI+Sites",
      examples: [
        { name: "Letterbox Property", url: "https://letterboxpropertyinvestments.co.uk/" },
        { name: "EPC Hub", url: "https://epc-hub.co.uk/" },
        { name: "LS Garden Construction", url: "https://lsgardenconstruction.co.uk/" },
        { name: "Jetwash Innovations", url: "https://jetwashinnovations.com/" },
        { name: "Vital Accounts", url: "https://vital-accounts.co.uk/" },
        { name: "Grandimorsi", url: "https://grandimorsi.co.uk/" },
        { name: "Totem Gym", url: "https://totemgym.co.uk/" },
        { name: "First Central Heating", url: "https://firstcentralheatinguk.co.uk/" },
      ] as ProjectExample[],
    },
    {
      title: "GPT Prompt Generator for 10Web",
      description: "Built a custom GPT that writes optimised prompts to improve the accuracy and branding of AI-generated websites on the 10Web platform.",
      technologies: ["ChatGPT", "Prompt Engineering"],
      imageUrl: "https://placehold.co/200x112/112240/64ffda?text=GPT+Prompt",
    },
    {
        title: "Health & Safety Training Platform",
        description: "Created an e-learning system with animations, deployed as a mobile app for accessible health and safety training.",
        technologies: ["MVC (C#)", "CSHTML", "JavaScript", "Vyond"],
        imageUrl: "https://placehold.co/200x112/112240/64ffda?text=E-Learning",
    }
  ] as Project[],

  experience: [
    {
      role: "Onboarding Executive",
      company: "Add People (Say Hello)",
      dates: "Nov 2024 – Present",
      achievements: [
        "Onboard clients onto the Say Hello AI assistant platform, optimising assistant personalities with AI prompt engineering.",
        "Set up technical integrations for clients, including HTML and CSS form generation.",
        "Designed and built the internal Say Hello Support Dashboard, featuring a CSS form builder, TBAP generator, and help guides to streamline employee support.",
        "As part of the Smartsite team, performed QA on AI-generated websites to ensure they meet client requirements and high UI/UX standards.",
        "Created a custom Google AI Studio QA tool to automate website auditing against a 'Met / Not Met' checklist.",
        "Built and contributed to complex client websites, leveraging strong UX/UI skills.",
        "Currently designing the official Altrincham & Sale Chamber of Commerce website, featuring a private members' section.",
        "Conducted second-stage interviews for hiring website team members.",
        "Delivered training to new starters on website tools, standards, and best practices.",
      ],
    },
    {
      role: "Developer Engineer",
      company: "iBos Ltd",
      dates: "Aug 2022 – Oct 2024",
      achievements: [
        "Designed and built the company website using HTML, CSS, jQuery, and Bootstrap.",
        "Improved the UI/UX for the internal software application 'Celloplus'.",
        "Conducted thorough testing of colleagues' work, led stand-up meetings, and provided client support.",
      ],
    },
    {
      role: "Customer & Marketing Executive",
      company: "Kaizen Professional Ltd",
      dates: "Sept 2018 – April 2025",
      achievements: [
        "Handled client onboarding and provided frontline technical support.",
        "Built and currently maintain the company's official website.",
        "Contributed to UX improvements, design, administration, and payroll documentation.",
      ],
    },
  ] as ExperienceItem[],
  
  education: [
      {
          degree: "Bachelor of Science: Software Engineering",
          institution: "Liverpool John Moores University",
          dates: "2018 - 2022",
          details: ["Graduated with First-Class Honours.", "Focused on full-stack development, UX design, and agile methodologies."]
      }
  ] as EducationItem[]
};