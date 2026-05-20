import React from 'react';
import type { ResumeProfileData, AppCopy } from '../types';

interface ContactScreenProps {
  profile: ResumeProfileData;
  copy: AppCopy;
  onExportResume: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  profile,
  copy,
  onExportResume
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(n => n.length > 0)
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const handleLinkedInClick = () => {
    const target = profile.linkedInUrl.startsWith('http')
      ? profile.linkedInUrl
      : `https://${profile.linkedInUrl}`;
    window.open(target, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${profile.email}`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="header-box">
        <div className="avatar-initials">{getInitials(profile.name)}</div>
        <div className="header-name">{profile.name}</div>
        <div className="header-title">{profile.title}</div>
        <div className="header-location">{profile.location}</div>
        <div className="header-linkedin" onClick={handleLinkedInClick}>
          {profile.linkedInUrl}
        </div>
      </div>

      <div className="section-divider">
        <div className="section-divider-title">{copy.contactInfoSection}</div>
        <div className="divider-line" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div className="contact-item" onClick={handleEmailClick}>
          <svg
            className="contact-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="contact-text">{profile.email}</span>
        </div>

        <div className="contact-item" onClick={handleLinkedInClick}>
          <svg
            className="contact-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="contact-text">{profile.linkedInUrl}</span>
        </div>
      </div>

      <div className="section-divider">
        <div className="section-divider-title">{copy.qrCodeShareTitle}</div>
        <div className="divider-line" />
      </div>

      <div className="qr-container">
        <div className="qr-card">
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${profile.linkedInUrl}`} 
            alt="LinkedIn QR Code"
            className="qr-code-img"
          />
          <span className="qr-hint">SCAN TO CONNECT</span>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button
          className="action-btn"
          onClick={onExportResume}
          style={{ padding: '16px', fontSize: '14px' }}
        >
          {copy.downloadResume}
        </button>
      </div>
    </div>
  );
};
