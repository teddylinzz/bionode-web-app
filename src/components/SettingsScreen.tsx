import React from 'react';
import type { ResumeProfileData, AppCopy } from '../types';

interface SettingsScreenProps {
  profile: ResumeProfileData;
  isDarkMode: boolean;
  onDarkModeChange: (dark: boolean) => void;
  selectedLanguage: 'en' | 'zh';
  onLanguageChange: (lang: 'en' | 'zh') => void;
  isRTL: boolean;
  onRTLChange: (rtl: boolean) => void;
  pdfShowSummary: boolean;
  onPdfShowSummaryChange: (show: boolean) => void;
  pdfShowEducation: boolean;
  onPdfShowEducationChange: (show: boolean) => void;
  pdfShowSkills: boolean;
  onPdfShowSkillsChange: (show: boolean) => void;
  onExportResume: () => void;
  copy: AppCopy;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  profile,
  isDarkMode,
  onDarkModeChange,
  selectedLanguage,
  onLanguageChange,
  isRTL,
  onRTLChange,
  pdfShowSummary,
  onPdfShowSummaryChange,
  pdfShowEducation,
  onPdfShowEducationChange,
  pdfShowSkills,
  onPdfShowSkillsChange,
  onExportResume,
  copy
}) => {
  const handleClearCache = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        });
      }
      alert(copy.clearCacheSuccess);
    } catch {
      alert(copy.clearCacheFailure);
    }
  };

  const handleOpenLink = (url: string) => {
    const target = url.startsWith('http') ? url : `https://${url}`;
    window.open(target, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* General Settings */}
      <div>
        <div className="settings-section-title">{copy.generalSection}</div>
        
        <div className="settings-box">
          {/* Language Selection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="settings-row-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m-4-3.5a3.375 3.375 0 00-6.75 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{copy.languageLabel}</span>
            </div>
            
            <div className="language-btn-group">
              <button
                className={`language-select-btn ${selectedLanguage === 'en' ? 'active' : ''}`}
                onClick={() => onLanguageChange('en')}
              >
                {selectedLanguage === 'en' && (
                  <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {copy.englishLanguage}
              </button>
              <button
                className={`language-select-btn ${selectedLanguage === 'zh' ? 'active' : ''}`}
                onClick={() => onLanguageChange('zh')}
              >
                {selectedLanguage === 'zh' && (
                  <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {copy.traditionalChineseLanguage}
              </button>
            </div>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="settings-box" style={{ padding: '12px 16px' }}>
          <div className="settings-row">
            <div className="settings-row-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span>{copy.interfaceThemeLabel}</span>
            </div>
            
            <div className="theme-switch-group">
              <button
                className={`theme-btn ${!isDarkMode ? 'active' : ''}`}
                onClick={() => onDarkModeChange(false)}
              >
                {copy.lightTheme}
              </button>
              <button
                className={`theme-btn ${isDarkMode ? 'active' : ''}`}
                onClick={() => onDarkModeChange(true)}
              >
                {copy.darkTheme}
              </button>
            </div>
          </div>
        </div>

        {/* RTL Switch Settings */}
        <div className="settings-box" style={{ padding: '12px 16px' }}>
          <div className="settings-row">
            <div className="settings-row-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <span>{copy.textDirectionLabel}</span>
            </div>
            
            <div className="theme-switch-group">
              <button
                className={`theme-btn ${!isRTL ? 'active' : ''}`}
                onClick={() => onRTLChange(false)}
              >
                {copy.ltrLayout}
              </button>
              <button
                className={`theme-btn ${isRTL ? 'active' : ''}`}
                onClick={() => onRTLChange(true)}
              >
                {copy.rtlLayout}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Export Options */}
      <div>
        <div className="settings-section-title">{copy.pdfCustomizationTitle}</div>
        
        <div className="settings-box" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Toggle Summary */}
          <div className="settings-row">
            <div className="settings-row-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <span>{copy.pdfShowSummaryLabel}</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={pdfShowSummary}
                onChange={(e) => onPdfShowSummaryChange(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="menu-divider" />

          {/* Toggle Education */}
          <div className="settings-row">
            <div className="settings-row-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <span>{copy.pdfShowEducationLabel}</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={pdfShowEducation}
                onChange={(e) => onPdfShowEducationChange(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="menu-divider" />

          {/* Toggle Skills */}
          <div className="settings-row">
            <div className="settings-row-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>{copy.pdfShowSkillsLabel}</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={pdfShowSkills}
                onChange={(e) => onPdfShowSkillsChange(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>

      {/* Advanced Settings */}
      <div>
        <div className="settings-section-title">{copy.advancedSection}</div>
        
        <div className="advanced-menu">
          <button className="advanced-item" onClick={onExportResume}>
            <div className="advanced-item-left">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>{copy.exportResumePdf}</span>
            </div>
            <svg className="advanced-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="menu-divider" />

          <button className="advanced-item" onClick={handleClearCache}>
            <div className="advanced-item-left">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>{copy.clearApplicationCache}</span>
            </div>
            <svg className="advanced-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Settings Footer */}
      <div className="settings-footer">
        <div className="divider-line" style={{ height: '2px' }} />
        <div className="settings-footer-top">
          <span className="version-badge">v1.2.0</span>
          <div className="footer-links">
            <span className="footer-link" onClick={() => handleOpenLink(profile.githubUrl)}>GitHub</span>
            <span className="footer-link" onClick={() => handleOpenLink(profile.linkedInUrl)}>LinkedIn</span>
          </div>
        </div>
        <div className="footer-copyright">
          © 2026 TEDDY LIN • {copy.footerRole}
        </div>
      </div>
    </div>
  );
};
