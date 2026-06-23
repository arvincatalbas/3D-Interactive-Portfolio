import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings as SettingsIcon, Check } from 'lucide-react';
import { THEMES } from '../../config/themes';

export function Settings({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="settings-container" ref={dropdownRef}>
      <button
        className={`settings-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Settings"
        aria-label="Settings"
      >
        <SettingsIcon size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="settings-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="settings-header">
              <SettingsIcon size={18} className="highlight" />
              <span className="settings-title">Settings</span>
            </div>

            <div className="settings-section">
              <h4 className="settings-section-title">Themes</h4>
              <div className="theme-list">
                {THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    className={`theme-option ${currentTheme.id === theme.id ? 'active' : ''}`}
                    onClick={() => onThemeChange(theme.id)}
                  >
                    <div className="theme-info">
                      <div className="theme-preview-dots">
                        <div
                          className="theme-dot"
                          style={{ backgroundColor: theme.primaryColor }}
                        ></div>
                        <div
                          className="theme-dot"
                          style={{ backgroundColor: theme.secondaryColor }}
                        ></div>
                      </div>
                      <span className="theme-name">{theme.name}</span>
                    </div>
                    {currentTheme.id === theme.id && (
                      <Check size={14} className="highlight" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="version-section">
              <h4 className="settings-section-title">Project Info</h4>
              <div className="version-info-row">
                <span>Version</span>
                <span className="version-badge">v1.0.0</span>
              </div>
              <div className="version-info-row">
                <span>React</span>
                <span>v19.2</span>
              </div>
              <div className="version-info-row">
                <span>Three.js</span>
                <span>r184</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
