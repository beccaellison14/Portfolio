import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { PROFILE_DATA } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      // Fallback to 'about' if no section is matched (e.g., at the top)
      setActiveSection(currentSection || 'about');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience'];

  return (
    <div className="bg-light-bg dark:bg-dark-navy text-light-text-main dark:text-dark-slate font-sans leading-relaxed transition-colors duration-300">
      <div className="flex flex-col lg:flex-row min-h-screen max-w-7xl mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Left Side: Header & Nav */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between py-12 lg:py-24">
          <div>
            <Header 
              name={PROFILE_DATA.name} 
              title={PROFILE_DATA.title}
              tagline={PROFILE_DATA.tagline}
              location={PROFILE_DATA.location}
              educationSummary={PROFILE_DATA.educationSummary}
              email={PROFILE_DATA.email}
              currently={PROFILE_DATA.currently}
            />
            <nav className="hidden lg:block mt-12">
              <ul className="flex flex-col space-y-4">
                {navItems.map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className={`group flex items-center py-2 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'text-light-text-header dark:text-white' : 'text-light-text-main dark:text-dark-slate hover:text-light-text-header dark:hover:text-white'}`}>
                      <span className={`nav-indicator mr-4 h-px transition-all duration-300 group-hover:w-16 ${activeSection === item.toLowerCase() ? 'w-16 bg-light-text-header dark:bg-white' : 'w-8 bg-light-text-main dark:bg-dark-slate group-hover:bg-light-text-header dark:group-hover:bg-white'}`}></span>
                      <span className={`text-xs font-bold uppercase tracking-widest ${activeSection === item.toLowerCase() ? 'text-light-text-header dark:text-white' : 'text-light-text-main dark:text-dark-slate group-hover:text-light-text-header dark:group-hover:text-white'}`}>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Footer 
            socialLinks={PROFILE_DATA.socialLinks} 
            email={PROFILE_DATA.email} 
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </header>

        {/* Right Side: Main Content */}
        <main className="lg:w-1/2 lg:py-24">
          <About content={PROFILE_DATA.about} />
          <Skills skills={PROFILE_DATA.skills} />
          <Projects projects={PROFILE_DATA.projects} />
          <Experience experiences={PROFILE_DATA.experience} education={PROFILE_DATA.education} />
        </main>
      </div>
    </div>
  );
};

export default App;