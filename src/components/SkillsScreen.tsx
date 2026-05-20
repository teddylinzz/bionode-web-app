import React from 'react';
import type { AppCopy, Skill } from '../types';

interface SkillsScreenProps {
  skills: Skill[];
  copy: AppCopy;
  onSkillClick: (skillName: string) => void;
}

export const SkillsScreen: React.FC<SkillsScreenProps> = ({ skills, copy, onSkillClick }) => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Top 6 skills for analytics
  const topSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 6);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h1>{copy.skillsTitle}</h1>
      <p className="body-large">{copy.skillsDescription}</p>

      <div className="section-divider">
        <div className="section-divider-title">{copy.skillAnalyticsTitle}</div>
        <div className="divider-line" />
      </div>

      <div className="analytics-container">
        {topSkills.map((skill, index) => (
          <div key={index} className="skill-bar-row">
            <div className="skill-bar-info">
              <span className="skill-bar-name">{skill.name}</span>
              <span className="skill-bar-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar-track">
              <div 
                className="skill-bar-fill" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider">
        <div className="section-divider-title">{copy.technicalStackSection}</div>
        <div className="divider-line" />
      </div>

      <div className="skills-categories">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--secondary)' }}>
              {category.toUpperCase()}
            </h3>
            <div className="skills-grid">
              {categorySkills.map((skill, index) => (
                <div 
                  className="skill-tag" 
                  key={index}
                  onClick={() => onSkillClick(skill.name)}
                  style={{ cursor: 'pointer' }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
