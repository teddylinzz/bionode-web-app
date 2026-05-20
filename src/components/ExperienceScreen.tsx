import React, { useState } from 'react';
import type { ResumeProfileData, AppCopy } from '../types';

interface ExperienceScreenProps {
  profile: ResumeProfileData;
  copy: AppCopy;
  selectedSkill?: string | null;
  onClearSkillFilter?: () => void;
}

export const ExperienceScreen: React.FC<ExperienceScreenProps> = ({
  profile,
  copy,
  selectedSkill = null,
  onClearSkillFilter
}) => {
  const [filterYear, setFilterYear] = useState<number | null>(null);

  // Filter experiences by year
  const filteredExperiences = profile.experience.filter(exp => {
    if (filterYear === null) return true;
    return exp.startYear >= filterYear;
  });

  // Career Timeline Data
  const sortedExperiences = [...profile.experience].sort((a, b) => a.startYear - b.startYear);

  const checkMatchesSkill = (exp: typeof profile.experience[0]) => {
    if (!selectedSkill) return false;
    const skillLower = selectedSkill.toLowerCase();
    return (
      exp.role.toLowerCase().includes(skillLower) ||
      exp.company.toLowerCase().includes(skillLower) ||
      exp.highlights.some(h => h.toLowerCase().includes(skillLower))
    );
  };

  const highlightText = (text: string, search: string | null) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <mark key={i} className="highlighted-text-match">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>{copy.professionalExperienceTitle}</h2>
      <p className="body-large" style={{ marginBottom: '8px' }}>
        {profile.summary}
      </p>

      {/* Career Timeline Overview */}
      <div className="section-divider">
        <div className="section-divider-title">{copy.timelineViewTitle}</div>
        <div className="divider-line" />
      </div>
      
      <div className="timeline-overview-container">
        <div className="timeline-overview-scroll">
          {sortedExperiences.map((exp, index) => (
            <div key={index} className="timeline-overview-item">
              <div className="timeline-overview-dot" />
              <div className="timeline-overview-year">{exp.startYear}</div>
              <div className="timeline-overview-company">{exp.company}</div>
              {index < sortedExperiences.length - 1 && <div className="timeline-overview-line" />}
            </div>
          ))}
        </div>
      </div>

      {/* Year Filter Chips */}
      <div className="filter-chips-row">
        <button
          className={`filter-chip ${filterYear === null ? 'active' : ''}`}
          onClick={() => setFilterYear(null)}
        >
          {copy.filterAllYears}
        </button>
        <button
          className={`filter-chip ${filterYear === 2024 ? 'active' : ''}`}
          onClick={() => setFilterYear(2024)}
        >
          {copy.filterSince2024}
        </button>
        <button
          className={`filter-chip ${filterYear === 2022 ? 'active' : ''}`}
          onClick={() => setFilterYear(2022)}
        >
          {copy.filterSince2022}
        </button>
        <button
          className={`filter-chip ${filterYear === 2020 ? 'active' : ''}`}
          onClick={() => setFilterYear(2020)}
        >
          {copy.filterSince2020}
        </button>
      </div>

      {/* Selected Skill Banner */}
      {selectedSkill && (
        <div className="selected-skill-banner">
          <span className="banner-text">
            {copy.selectedSkillLabel}<strong>{selectedSkill}</strong>
          </span>
          <button className="clear-filter-btn" onClick={onClearSkillFilter}>
            {copy.clearFilter} ×
          </button>
        </div>
      )}

      <div className="section-divider">
        <div className="section-divider-title">{copy.experienceSection}</div>
        <div className="divider-line" />
      </div>

      <div className="experience-list">
        {filteredExperiences.map((exp, index) => {
          const isLast = index === filteredExperiences.length - 1;
          const isHighlighted = selectedSkill ? checkMatchesSkill(exp) : false;

          return (
            <div
              className={`experience-row ${isHighlighted ? 'highlighted-experience' : ''}`}
              key={index}
            >
              <div className="experience-timeline">
                <div className={`timeline-dot ${isHighlighted ? 'highlighted-dot' : ''}`} />
                {!isLast && <div className="timeline-line" />}
              </div>
              <div className="experience-content">
                <div className="experience-period">{exp.period}</div>
                <div className="experience-role">{highlightText(exp.role, selectedSkill)}</div>
                <div className="experience-company">
                  {highlightText(exp.company, selectedSkill)} • {highlightText(exp.location, selectedSkill)}
                </div>
                <div style={{ marginTop: '8px' }}>
                  {exp.highlights.map((highlight, hIndex) => {
                    const hasMatch = selectedSkill && highlight.toLowerCase().includes(selectedSkill.toLowerCase());
                    return (
                      <div
                        className={`highlight-row ${hasMatch ? 'highlighted-bullet-row' : ''}`}
                        key={hIndex}
                      >
                        <span className="bullet">•</span>
                        <span className="highlight-text">
                          {highlightText(highlight, selectedSkill)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-divider">
        <div className="section-divider-title">{copy.educationSection}</div>
        <div className="divider-line" />
      </div>

      <div className="education-card">
        <div className="education-period">{profile.education.period}</div>
        <div className="education-school">{profile.education.school}</div>
        <div className="education-degree">{profile.education.degree}</div>
      </div>
    </div>
  );
};
