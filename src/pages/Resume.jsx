import { motion } from 'framer-motion';
import { FileText, Download, Briefcase, GraduationCap, Code2 } from 'lucide-react';

const experience = [
  {
    id: 1,
    role: 'Network/IT Product Associate (OJT)',
    company: 'Quanby Solutions Inc.',
    period: 'OJT Intern',
    details: 'Proven hands-on capability in deploying Local Area Networks (LAN), CCTV configurations, device setups, and structural IT costing systems. Managed IT procurement tracking, product inventory sorting, and generated technical client brochures.'
  },
  {
    id: 2,
    role: 'EIM Work Immersion',
    company: 'SORECO II',
    period: 'Immersion Intern',
    details: 'Conducted electrical wiring installation, circuit maintenance, hardware assembly/disassembly, and preventive hardware/software maintenance.'
  }
];

const education = [
  {
    id: 1,
    degree: 'B.S. in Information Technology',
    school: 'Sorsogon State University – Bulan Campus',
    period: 'Graduated'
  },
  {
    id: 2,
    degree: 'Technical Vocational Livelihood (EIM)',
    school: 'Barcelona National Comprehensive High School',
    period: 'Secondary'
  }
];

const skills = [
  { name: 'Networking & Infrastructure (TCP/IP, Cisco, Cabling)', level: 92 },
  { name: 'Operating Systems (Windows, Linux CLI, Admin)', level: 88 },
  { name: 'Programming (JS/React Native, Python, SQL)', level: 78 },
  { name: 'Electrical Installation & Maintenance (NCII Certified)', level: 90 }
];

export function Resume() {
  return (
    <motion.div
      className="page-overlay resume-overlay"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlay-card glass panels-container resume-layout scrollable">
        <div className="resume-header">
          <div className="header-info">
            <FileText className="panel-icon" size={24} />
            <h2>Interactive Resume</h2>
          </div>
          <a href="/RESUME v.3.1.docx.pdf" target="_blank" rel="noreferrer" className="btn btn-download btn-secondary">
            <FileText size={16} /> View Resume
          </a>
        </div>

        <div className="resume-grid">
          {/* LEFT SIDE: EXPERIENCE & EDUCATION */}
          <div className="resume-left">
            <section className="resume-section">
              <div className="section-title">
                <Briefcase size={18} className="sec-icon" />
                <h3>Experience</h3>
              </div>
              <div className="timeline">
                {experience.map((exp) => (
                  <div key={exp.id} className="timeline-item">
                    <span className="timeline-date">{exp.period}</span>
                    <h4>{exp.role}</h4>
                    <h5>{exp.company}</h5>
                    <p>{exp.details}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <div className="section-title">
                <GraduationCap size={18} className="sec-icon" />
                <h3>Education</h3>
              </div>
              <div className="timeline">
                {education.map((edu) => (
                  <div key={edu.id} className="timeline-item">
                    <span className="timeline-date">{edu.period}</span>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.school}</h5>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: SKILLS & CERTIFICATE SUMMARIES */}
          <div className="resume-right">
            <section className="resume-section">
              <div className="section-title">
                <Code2 size={18} className="sec-icon" />
                <h3>Technical Skills</h3>
              </div>
              <div className="skills-container">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="resume-summary-box glass">
              <h4>Recruiter Note</h4>
              <p>
                Looking for a creative developer who can bridge the gap between stunning visual design and robust software engineering? Let's connect!
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Resume;
