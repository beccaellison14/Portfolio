import React from 'react';
import type { SocialLink } from '../types';
import { PROFILE_DATA } from '../constants';
import ThemeToggle from './ThemeToggle';

const generateCV = () => {
  const { jsPDF } = (window as any).jspdf;
  if (!jsPDF) {
      alert('PDF generation library not loaded. Please try again.');
      return;
  }
  const doc = new jsPDF('p', 'pt', 'a4');

  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();
  const leftMargin = 40;
  const rightMargin = 40;
  const contentWidth = pageWidth - leftMargin - rightMargin;
  let y = 60;

  const checkPageBreak = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - 40) { // 40 is bottom margin
      doc.addPage();
      y = 60;
    }
  };

  // --- Header ---
  doc.setFontSize(24).setFont('helvetica', 'bold');
  doc.text(PROFILE_DATA.name, leftMargin, y);
  y += 30;
  doc.setFontSize(14).setFont('helvetica', 'normal');
  doc.text(PROFILE_DATA.title, leftMargin, y);
  y += 20;
  doc.setFontSize(10);
  doc.text(`${PROFILE_DATA.location} | ${PROFILE_DATA.email}`, leftMargin, y);
  y += 40;

  // --- About Me ---
  doc.setFontSize(16).setFont('helvetica', 'bold');
  doc.text('About Me', leftMargin, y);
  y += 20;
  doc.setFontSize(11).setFont('helvetica', 'normal');
  const aboutLines = doc.splitTextToSize(PROFILE_DATA.about, contentWidth);
  checkPageBreak(aboutLines.length * 12);
  doc.text(aboutLines, leftMargin, y);
  y += aboutLines.length * 12 + 20;

  // --- Skills ---
  doc.setFontSize(16).setFont('helvetica', 'bold');
  doc.text('Skills', leftMargin, y);
  y += 20;
  
  PROFILE_DATA.skills.forEach(category => {
    checkPageBreak(30);
    doc.setFontSize(12).setFont('helvetica', 'bold');
    doc.text(category.category, leftMargin, y);
    y += 15;
    
    doc.setFontSize(11).setFont('helvetica', 'normal');
    const skillsText = category.skills.map(skill => skill.name).join(', ');
    const skillLines = doc.splitTextToSize(skillsText, contentWidth);
    checkPageBreak(skillLines.length * 12);
    doc.text(skillLines, leftMargin, y);
    y += skillLines.length * 12 + 10;
  });
  y += 10;

  // --- Experience ---
  checkPageBreak(40);
  doc.setFontSize(16).setFont('helvetica', 'bold');
  doc.text('Experience', leftMargin, y);
  y += 20;

  PROFILE_DATA.experience.forEach(exp => {
    const blockHeight = 35 + exp.achievements.length * 12;
    checkPageBreak(blockHeight);
    
    doc.setFontSize(12).setFont('helvetica', 'bold');
    doc.text(`${exp.role} · ${exp.company}`, leftMargin, y);
    
    doc.setFontSize(10).setFont('helvetica', 'italic');
    const dateTextWidth = doc.getTextWidth(exp.dates);
    doc.text(exp.dates, pageWidth - rightMargin - dateTextWidth, y);
    y += 20;

    doc.setFontSize(11).setFont('helvetica', 'normal');
    exp.achievements.forEach(achievement => {
      const achievementLines = doc.splitTextToSize(`• ${achievement}`, contentWidth - 10);
      checkPageBreak(achievementLines.length * 12);
      doc.text(achievementLines, leftMargin + 10, y);
      y += achievementLines.length * 12;
    });
    y += 20;
  });

  // --- Education ---
  checkPageBreak(40);
  doc.setFontSize(16).setFont('helvetica', 'bold');
  doc.text('Education', leftMargin, y);
  y += 20;

  PROFILE_DATA.education.forEach(edu => {
    const blockHeight = 35 + edu.details.length * 12;
    checkPageBreak(blockHeight);
    
    doc.setFontSize(12).setFont('helvetica', 'bold');
    doc.text(`${edu.degree} · ${edu.institution}`, leftMargin, y);
    
    doc.setFontSize(10).setFont('helvetica', 'italic');
    const dateTextWidth = doc.getTextWidth(edu.dates);
    doc.text(edu.dates, pageWidth - rightMargin - dateTextWidth, y);
    y += 20;
    
    doc.setFontSize(11).setFont('helvetica', 'normal');
    edu.details.forEach(detail => {
      const detailLines = doc.splitTextToSize(`• ${detail}`, contentWidth - 10);
      checkPageBreak(detailLines.length * 12);
      doc.text(detailLines, leftMargin + 10, y);
      y += detailLines.length * 12;
    });
    y += 20;
  });

  // --- Projects ---
  checkPageBreak(40);
  doc.setFontSize(16).setFont('helvetica', 'bold');
  doc.text('Projects', leftMargin, y);
  y += 20;

  PROFILE_DATA.projects.forEach(project => {
    doc.setFontSize(12).setFont('helvetica', 'bold');
    const titleLines = doc.splitTextToSize(project.title, contentWidth);
    const descriptionLines = doc.splitTextToSize(project.description, contentWidth);
    const blockHeight = (titleLines.length + descriptionLines.length) * 12 + 15;
    checkPageBreak(blockHeight);

    doc.text(titleLines, leftMargin, y);
    y += titleLines.length * 12 + 5;
    
    doc.setFontSize(11).setFont('helvetica', 'normal');
    doc.text(descriptionLines, leftMargin, y);
    y += descriptionLines.length * 12 + 20;
  });

  doc.save('Rebecca_Ellison_CV.pdf');
};


interface FooterProps {
  socialLinks: SocialLink[];
  email: string;
  theme: string;
  toggleTheme: () => void;
}

const Footer: React.FC<FooterProps> = ({ socialLinks, email, theme, toggleTheme }) => {
  return (
    <footer className="mt-8">
      <div className="flex items-center space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-light-text-subtle dark:text-dark-slate hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
          >
            {link.icon}
          </a>
        ))}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="mt-8 flex flex-col space-y-4">
         <a href={`mailto:${email}`} className="text-sm text-light-text-subtle dark:text-dark-slate hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300">
           {email}
         </a>
         <button 
            onClick={generateCV}
            className="w-fit text-center text-sm font-medium text-light-accent dark:text-dark-accent border border-light-accent dark:border-dark-accent rounded-md px-4 py-2 hover:bg-light-accent-bg dark:hover:bg-dark-accent/10 transition-colors duration-300"
        >
            Download CV
        </button>
      </div>
    </footer>
  );
};

export default Footer;