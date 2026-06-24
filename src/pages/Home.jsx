import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../components/ui/Icons';
import { ScrambleText } from '../components/ui/ScrambleText';

export function Home() {
  return (
    <motion.div
      className="page-overlay home-overlay"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="overlay-card glass">
        <div className="home-header">
          <div className="home-header-text">
            <span className="badge">Available for Projects & Roles</span>
            <h1>Hi, I'm <span className="highlight"><ScrambleText text="Arvin Catalbas" /></span></h1>
          </div>

        </div>

        <h3>I'm a Freshgraduate from Sorsogon State University - Bulan Campus</h3>
        
        <p className="bio">
          Driven and detail-oriented Information Technology graduate specializing in network infrastructure, device configuration, and software development. Certified in Electrical Installation & Maintenance (EIM NCII).
        </p>

        <div className="instruction-box">
          <p>
            🖱️ <strong>How to navigate:</strong> Click on objects in the room (like the computer, certificate frames, or clipboard) or use the navbar to inspect them closely.
          </p>
        </div>

        <div className="button-group">
          <Link to="/projects" className="btn btn-primary">
            Explore My Work <ArrowRight size={16} />
          </Link>
          <Link to="/resume" className="btn btn-secondary">
            View Resume
          </Link>
        </div>

        <div className="social-links">
          <a href="https://facebook.com/senemorph" target="_blank" rel="noreferrer" title="Facebook">
            <FacebookIcon size={20} />
          </a>
          <a href="https://github.com/arvincatalbas" target="_blank" rel="noreferrer" title="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:arvin9999990@gmail.com" title="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
