import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Code } from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';

const projects = [
  {
    id: 1,
    title: 'Enterprise LAN & CCTV Infrastructure',
    description: 'Designed and deployed local area network configurations, network cabling, device configurations, and CCTV setups during enterprise-level OJT.',
    tech: ['TCP/IP', 'Network Cabling', 'Cisco Packet Tracer', 'Router Config'],
    github: 'https://github.com/arvincatalbas',
    live: 'https://github.com/arvincatalbas'
  },
  {
    id: 2,
    title: 'Structural IT Costing System',
    description: 'Created a hardware procurement costing, bidding documents, and inventory sorting utility built to automate IT budgeting and client brochures.',
    tech: ['React Native', 'JavaScript', 'HTML5/CSS3', 'SQL basics'],
    github: 'https://github.com/arvincatalbas',
    live: 'https://github.com/arvincatalbas'
  },
  {
    id: 3,
    title: 'Network Diagnostic & Scan Utility',
    description: 'A custom python scripting utility that runs scans on local subnet IP ranges, checks port statuses, and troubleshoots common network errors.',
    tech: ['Python', 'Linux CLI', 'TCP/IP Protocols', 'Git/GitHub'],
    github: 'https://github.com/arvincatalbas',
    live: 'https://github.com/arvincatalbas'
  }
];

export function Projects() {
  return (
    <motion.div
      className="page-overlay projects-overlay"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlay-card glass panels-container">
        <div className="panel-header">
          <Monitor className="panel-icon" size={24} />
          <h2>My Projects</h2>
        </div>
        <p className="panel-subtitle">Here are some of my featured technical and creative works.</p>

        <div className="items-list scrollable">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="project-card-header">
                <h4>{project.title}</h4>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" title="Source Code">
                    <GithubIcon size={16} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              <div className="tag-container">
                {project.tech.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default Projects;
