import { useState, useEffect } from 'react';
import { BottomNavBar } from './components/BottomNavBar';
import type { ScreenType } from './components/BottomNavBar';
import { ExperienceScreen } from './components/ExperienceScreen';
import { SkillsScreen } from './components/SkillsScreen';
import { StudyScreen } from './components/StudyScreen';
import { ContactScreen } from './components/ContactScreen';
import { SettingsScreen } from './components/SettingsScreen';

import {
  ResumeProfileEn,
  ResumeProfileZh,
  EnglishCopy,
  TraditionalChineseCopy,
  StudyResourcesEn,
  StudyResourcesZh
} from './data';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('experience');
  const [language, setLanguage] = useState<'en' | 'zh'>(() => {
    const saved = localStorage.getItem('selected_language');
    return saved === 'zh' ? 'zh' : 'en';
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [isRTL, setIsRTL] = useState<boolean>(() => {
    const saved = localStorage.getItem('rtl');
    return saved === 'true';
  });

  // Selected skill tag filter
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // PDF print toggles
  const [pdfShowSummary, setPdfShowSummary] = useState<boolean>(() => {
    const saved = localStorage.getItem('pdf_show_summary');
    return saved !== 'false';
  });
  const [pdfShowEducation, setPdfShowEducation] = useState<boolean>(() => {
    const saved = localStorage.getItem('pdf_show_education');
    return saved !== 'false';
  });
  const [pdfShowSkills, setPdfShowSkills] = useState<boolean>(() => {
    const saved = localStorage.getItem('pdf_show_skills');
    return saved !== 'false';
  });

  // Apply Theme effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Apply RTL direction effect
  useEffect(() => {
    if (isRTL) {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('rtl', 'true');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      localStorage.setItem('rtl', 'false');
    }
  }, [isRTL]);

  // Apply Language effect
  useEffect(() => {
    localStorage.setItem('selected_language', language);
  }, [language]);

  // Save PDF options
  useEffect(() => {
    localStorage.setItem('pdf_show_summary', String(pdfShowSummary));
  }, [pdfShowSummary]);

  useEffect(() => {
    localStorage.setItem('pdf_show_education', String(pdfShowEducation));
  }, [pdfShowEducation]);

  useEffect(() => {
    localStorage.setItem('pdf_show_skills', String(pdfShowSkills));
  }, [pdfShowSkills]);

  const profile = language === 'zh' ? ResumeProfileZh : ResumeProfileEn;
  const copy = language === 'zh' ? TraditionalChineseCopy : EnglishCopy;
  const studyResources = language === 'zh' ? StudyResourcesZh : StudyResourcesEn;

  const handleExportResume = () => {
    const safeName = profile.name
      .trim()
      .replace(/[^A-Za-z0-9\u4E00-\u9FFF]+/g, '_')
      .replace(/^_+|_+$/g, '');
    const originalTitle = document.title;
    document.title = `${safeName || 'Resume'}_Resume`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'experience':
        return (
          <ExperienceScreen
            profile={profile}
            copy={copy}
            selectedSkill={selectedSkill}
            onClearSkillFilter={() => setSelectedSkill(null)}
          />
        );
      case 'skills':
        return (
          <SkillsScreen
            skills={profile.skills}
            copy={copy}
            onSkillClick={(skill) => {
              setSelectedSkill(skill);
              setCurrentScreen('experience');
            }}
          />
        );
      case 'study':
        return <StudyScreen resources={studyResources} copy={copy} projects={profile.projects} />;
      case 'contact':
        return (
          <ContactScreen
            profile={profile}
            copy={copy}
            onExportResume={handleExportResume}
          />
        );
      case 'settings':
        return (
          <SettingsScreen
            profile={profile}
            isDarkMode={isDarkMode}
            onDarkModeChange={setIsDarkMode}
            selectedLanguage={language}
            onLanguageChange={setLanguage}
            isRTL={isRTL}
            onRTLChange={setIsRTL}
            pdfShowSummary={pdfShowSummary}
            onPdfShowSummaryChange={setPdfShowSummary}
            pdfShowEducation={pdfShowEducation}
            onPdfShowEducationChange={setPdfShowEducation}
            pdfShowSkills={pdfShowSkills}
            onPdfShowSkillsChange={setPdfShowSkills}
            onExportResume={handleExportResume}
            copy={copy}
          />
        );
      default:
        return (
          <ExperienceScreen
            profile={profile}
            copy={copy}
            selectedSkill={selectedSkill}
            onClearSkillFilter={() => setSelectedSkill(null)}
          />
        );
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(n => n.length > 0)
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <>
      {/* Screen Display Container */}
      <div className="app-container screen-only">
        <main className="content-area">
          {renderActiveScreen()}
        </main>
        <BottomNavBar
          currentScreen={currentScreen}
          onScreenChange={setCurrentScreen}
          copy={copy}
        />
      </div>

      {/* Print PDF Document Format */}
      <div className="print-resume-sheet">
        <div className="header-box">
          <div className="avatar-initials">{getInitials(profile.name)}</div>
          <div className="header-name">{profile.name}</div>
          <div className="header-title">{profile.title}</div>
          <div className="header-location">
            {profile.location} | {profile.email}
          </div>
          <div className="header-linkedin">{profile.linkedInUrl}</div>
        </div>

        {pdfShowSummary && (
          <>
            <div className="section-divider">
              <div className="section-divider-title">{copy.professionalExperienceTitle}</div>
              <div className="divider-line" />
            </div>
            <p className="body-large" style={{ marginTop: '8px', marginBottom: '16px' }}>
              {profile.summary}
            </p>
          </>
        )}

        <div className="section-divider">
          <div className="section-divider-title">{copy.experienceSection}</div>
          <div className="divider-line" />
        </div>
        <div className="experience-list">
          {profile.experience.map((exp, index) => (
            <div className="experience-row" key={index} style={{ marginBottom: '16px' }}>
              <div className="experience-content">
                <div className="experience-period">{exp.period}</div>
                <div className="experience-role" style={{ fontWeight: 'bold' }}>{exp.role}</div>
                <div className="experience-company">
                  {exp.company} | {exp.location}
                </div>
                <div style={{ marginTop: '4px' }}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <div className="highlight-row" key={hIndex}>
                      <span className="bullet">•</span>
                      <span className="highlight-text">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {pdfShowEducation && (
          <>
            <div className="section-divider">
              <div className="section-divider-title">{copy.educationSection}</div>
              <div className="divider-line" />
            </div>
            <div className="education-card">
              <div className="education-school">{profile.education.school}</div>
              <div className="education-degree">{profile.education.degree}</div>
              <div className="education-period">{profile.education.period}</div>
            </div>
          </>
        )}

        {pdfShowSkills && (
          <>
            <div className="section-divider">
              <div className="section-divider-title">{copy.technicalStackSection}</div>
              <div className="divider-line" />
            </div>
            <div className="skills-grid">
              {profile.skills.map((skill, index) => (
                <div className="skill-tag" key={index}>
                  {skill.name}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="section-divider">
          <div className="section-divider-title">{copy.contactInfoSection}</div>
          <div className="divider-line" />
        </div>
        <div className="contact-list-print">
          <div className="contact-item-print">Email: {profile.email}</div>
          <div className="contact-item-print">LinkedIn: {profile.linkedInUrl}</div>
          <div className="contact-item-print">GitHub: {profile.githubUrl}</div>
        </div>
      </div>
    </>
  );
}

export default App;
