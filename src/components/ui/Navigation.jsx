import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Award, FileText, Code2, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';

export function Navigation() {
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/certificates', label: 'Certificates', icon: Award },
    { path: '/skills', label: 'Skills', icon: Code2 },
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/github', label: 'GitHub', icon: GithubIcon },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="floating-nav">
      <div className="nav-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              title={item.label}
            >
              <Icon className="nav-icon" size={20} />
              <span className="nav-label">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
