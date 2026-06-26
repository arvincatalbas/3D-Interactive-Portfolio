import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Server, Layout, Database, Layers, CheckCircle2, List, Grid, LayoutGrid } from 'lucide-react';
import { SkillLogo } from '../components/ui/SkillLogo';

const categories = [
  { id: 'all', label: 'All Skills', icon: Layers },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'database', label: 'Databases', icon: Database },
  { id: 'framework', label: 'Framework', icon: Cpu },
];

const skillsData = [
  // Frontend
  { name: 'JavaScript', category: ['frontend', 'backend'], level: 85, icon: 'JS', color: '#f7df1e', logo: 'javascript' },
  { name: 'TypeScript', category: 'frontend', level: 78, icon: 'TS', color: '#3178c6', logo: 'typescript' },
  { name: 'HTML5', category: 'frontend', level: 90, icon: 'HTML', color: '#e34f26', logo: 'html5' },
  { name: 'CSS3', category: 'frontend', level: 90, icon: 'CSS', color: '#1572b6', logo: 'css3' },
  // Backend
  { name: 'PHP', category: 'backend', level: 76, icon: 'PHP', color: '#777bb4', logo: 'php' },
  { name: 'Node.js', category: 'backend', level: 85, icon: 'Node.js', color: '#04f244ff', logo: 'NodeJS' },

  // Databases
  { name: 'SQL', category: 'database', level: 72, icon: 'SQL', color: '#00758f', logo: 'mysql' },
  { name: 'PostgreSQL', category: 'database', level: 78, icon: 'PG', color: '#336791', logo: 'postgresql' },

  // Frameworks
  { name: 'React', category: 'framework', level: 84, icon: 'React', color: '#61dafb', logo: 'react' },
  { name: 'React Native', category: 'framework', level: 80, icon: 'Native', color: '#00d2ff', logo: 'react' },
  { name: 'Three.js / R3F', category: 'framework', level: 75, icon: '3D', color: '#ff007f', logo: 'threejs' },
  { name: 'Expo', category: 'framework', level: 82, icon: 'Expo', color: '#ffffff', logo: 'expo' },
  { name: 'Tailwind', category: 'framework', level: 79, icon: 'Tailwind', color: '#38bdf8', logo: 'tailwindcss' },
];

export function Tools() {
  const [activeTab, setActiveTab] = useState('all');
  const [viewStyle, setViewStyle] = useState('list'); // 'list' | 'tile' | 'large-tile'

  const filteredSkills = skillsData.filter(
    (skill) => activeTab === 'all' || 
      (Array.isArray(skill.category) ? skill.category.includes(activeTab) : skill.category === activeTab)
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
          <h2>My Tools</h2>
        </div>
        <p className="panel-subtitle">Technical proficiencies, databases, programming languages, and framework.</p>

        {/* CONTROL ROW: CATEGORY FILTER TABS & VIEW STYLE TOGGLE */}
        <div className="skills-header-controls">
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
                  <span>{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="view-style-toggle">
            <button 
              className={`view-btn ${viewStyle === 'list' ? 'active' : ''}`} 
              onClick={() => setViewStyle('list')}
              title="List View"
            >
              <List size={14} />
            </button>
            <button 
              className={`view-btn ${viewStyle === 'tile' ? 'active' : ''}`} 
              onClick={() => setViewStyle('tile')}
              title="Tile View"
            >
              <Grid size={14} />
            </button>
            <button 
              className={`view-btn ${viewStyle === 'large-tile' ? 'active' : ''}`} 
              onClick={() => setViewStyle('large-tile')}
              title="Large Tile View"
            >
              <LayoutGrid size={14} />
            </button>
          </div>
        </div>

        {/* SKILLS CONTAINER */}
        <div className={`items-list scrollable skills-list-container ${viewStyle}`}>
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
                    <SkillLogo 
                      name={skill.name} 
                      logoSlug={skill.logo} 
                      fallbackText={skill.icon} 
                      color={skill.color} 
                      size={viewStyle === 'large-tile' ? 44 : viewStyle === 'tile' ? 30 : 36}
                    />
                    <h4>{skill.name}</h4>
                  </div>
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

export default Tools;
