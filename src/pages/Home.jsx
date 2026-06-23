import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, User, Camera, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../components/ui/Icons';

export function Home() {
  const [photoUrl, setPhotoUrl] = useState(() => {
    return localStorage.getItem('portfolio-avatar') || '';
  });
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setPhotoUrl(base64String);
        localStorage.setItem('portfolio-avatar', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = (e) => {
    e.stopPropagation();
    setPhotoUrl('');
    localStorage.removeItem('portfolio-avatar');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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
            <h1>Hi, I'm <span className="highlight">Arvin Catalbas</span></h1>
          </div>
          
          {/* PROFILE PICTURE UPLOADER */}
          <div className="profile-upload-container header-avatar">
            <div className="avatar-wrapper" onClick={handleAvatarClick} title="Click to upload profile photo">
              {photoUrl ? (
                <img src={photoUrl} alt="Profile" className="avatar-img" />
              ) : (
                <div className="avatar-placeholder">
                  <User size={48} className="avatar-placeholder-icon" />
                </div>
              )}
              <div className="upload-overlay">
                <Camera size={22} />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>
            {photoUrl && (
              <button className="btn-reset-avatar" onClick={handleResetAvatar} title="Remove photo">
                <Trash2 size={14} />
              </button>
            )}
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
