import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Network, Wrench, Layers, CheckCircle2 } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Skills', icon: Layers },
  { id: 'languages', label: 'Languages', icon: Code2 },
  { id: 'frameworks', label: 'Frameworks / UI', icon: Cpu },
  { id: 'infrastructure', label: 'Networking & IT', icon: Network },
  { id: 'tools', label: 'Tools & Other', icon: Wrench }
];

const skillsData = [
  // Languages
  { name: 'JavaScript', category: 'languages', level: 85, icon: 'JS', color: '#f7df1e' },
  { name: 'TypeScript', category: 'languages', level: 78, icon: 'TS', color: '#3178c6' },
  { name: 'HTML5', category: 'languages', level: 90, icon: 'HTML', color: '#e34f26' },
  { name: 'CSS3', category: 'languages', level: 90, icon: 'CSS', color: '#2965f1' },
  { name: 'PHP', category: 'languages', level: 76, icon: 'PHP', color: '#777bb4' },
  { name: 'SQL', category: 'languages', level: 72, icon: 'SQL', color: '#00758f' },

  // Frameworks
  { name: 'React', category: 'frameworks', level: 84, icon: 'React', color: '#61dafb' },
  { name: 'React Native', category: 'frameworks', level: 80, icon: 'Native', color: '#00d2ff' },
  { name: 'Three.js / R3F', category: 'frameworks', level: 75, icon: '3D', color: '#ff007f' },
  { name: 'Expo', category: 'frameworks', level: 82, icon: 'Expo', color: '#8b5cf6' },
  { name: 'Tailwind', category: 'frameworks', level: 79, icon: 'Tailwind', color: '#38bdf8' },

  // Infrastructure / Networking
  { name: 'TCP/IP & LAN Setup', category: 'infrastructure', level: 92, icon: 'LAN', color: '#0ea5e9' },
  { name: 'Cisco Routing/Switching', category: 'infrastructure', level: 88, icon: 'Cisco', color: '#1ba0d7' },
  { name: 'Electrical Installation', category: 'infrastructure', level: 90, icon: 'EIM', color: '#ffaa00' },
  { name: 'Hardware Diagnostics', category: 'infrastructure', level: 85, icon: 'HW', color: '#64748b' },

  // Tools & Other
  { name: 'Git & GitHub', category: 'tools', level: 82, icon: 'Git', color: '#f05032' },
  { name: 'Excel (IT Costing)', category: 'tools', level: 85, icon: 'XLS', color: '#1f7244' }
];

export function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = skillsData.filter(
    (skill) => activeTab === 'all' || skill.category === activeTab
  );

  return (
    <motion.div
      className="page-overlay skills-overlay"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlay-card glass panels-container skills-layout">
        <div className="panel-header">
          <Code2 className="panel-icon" size={24} />
          <h2>My Skills</h2>
        </div>
        <p className="panel-subtitle">Technical proficiencies, programming languages, and IT infrastructure.</p>

        {/* CATEGORY FILTER TABS */}
        <div className="skills-tabs">
          {categories.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`skill-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={14} />
                <span>{tab.label.split(' ')[0]}</span> {/* Show first word for compact size */}
              </button>
            );
          })}
        </div>

        {/* SKILLS CONTAINER */}
        <div className="items-list scrollable skills-list-container">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="skill-card-item glass-inner"
              >
                <div className="skill-item-header">
                  <div className="skill-title-grp">
                    <span 
                      className="skill-tech-badge" 
                      style={{ 
                        backgroundColor: `${skill.color}15`, 
                        color: skill.color,
                        border: `1px solid ${skill.color}35`
                      }}
                    >
                      {skill.icon}
                    </span>
                    <h4>{skill.name}</h4>
                  </div>
                  <div className="skill-percent-indicator" style={{ color: skill.color }}>
                    {skill.level}%
                  </div>
                </div>

                {/* Progress bar with custom color */}
                <div className="skill-meter-bg">
                  <motion.div
                    className="skill-meter-fill"
                    style={{ 
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}60`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* FOOTER NOTE */}
        <div className="skills-footer-badge">
          <CheckCircle2 size={12} className="highlight" />
          <span>Continually learning and expanding core competencies.</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
