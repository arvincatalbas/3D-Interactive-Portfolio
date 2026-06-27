import { useState } from 'react';

const LOGO_MAPPING = {
  'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'html5': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'threejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg',
  'expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg',
  'tailwindcss': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
};

export function SkillLogo({ name, logoSlug, fallbackText, color, size = 36 }) {
  const [hasError, setHasError] = useState(false);
  const logoUrl = LOGO_MAPPING[logoSlug] || LOGO_MAPPING[logoSlug?.toLowerCase()];

  return (
    <span 
      className="skill-tech-badge" 
      style={{ 
        backgroundColor: `${color}15`, 
        color: color,
        border: `1px solid ${color}35`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${size}px`,
        height: `${size}px`,
        minWidth: 'unset',
        padding: '6px',
        borderRadius: '8px',
        transition: 'transform 0.2s ease-in-out',
        flexShrink: 0
      }}
    >
      {(!logoUrl || hasError) ? (
        <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>
          {fallbackText}
        </span>
      ) : (
        <img 
          src={logoUrl} 
          alt={`${name} logo`}
          onError={() => setHasError(true)}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain'
          }} 
        />
      )}
    </span>
  );
}

export default SkillLogo;
