import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, X, Eye, List, Grid, LayoutGrid } from 'lucide-react';
import confetti from 'canvas-confetti';

const certificates = [
  {
    id: 1,
    title: 'Electrical Installation & Maintenance NCII',
    issuer: 'TESDA (National Certificate)',
    date: 'Certified',
    credentialId: '17056202009445',
    color: '#ffaa00',
    pdfUrl: '/EIM NCll.pdf'
  },
  {
    id: 2,
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Course Certified',
    credentialId: 'CISCO-JS-ESS1',
    color: '#00e5ff',
    pdfUrl: '/JavaScript_Essentials_1_certificate_arvin9999990-gmail-com_925cbfb1-7b89-4611-94a7-4a9246ac0080.pdf'
  },
  {
    id: 3,
    title: 'Claude Code in Action',
    issuer: 'Antrophic',
    date: 'Certified',
    credentialId: 'CLAUDE-ACTION-101',
    color: '#ff007f',
    pdfUrl: '/certificate-eqyf6r2yd873-1775453081.pdf'
  },
  {
    id: 4,
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: 'Course Certified',
    credentialId: 'CISCO-PKT-TRACER',
    color: '#a855f7',
    pdfUrl: '/Getting_Started_with_Cisco_Packet_Tracer_certificate_arvin9999990-gmail-com_e0559a8c-4f7f-4dc0-b058-05610f19ede9.pdf'
  },
  {
    id: 5,
    title: 'Apply AI: Update your Resume',
    issuer: 'Cisco Networking Academy',
    date: 'Course certified',
    credentialId: 'CISCO-APPLY-AI',
    color: '#00ff736e',
    pdfUrl: '/Apply_AI-_Update_Your_Resume_certificate_arvin9999990-gmail-com_1701a7a9-f551-4890-a8e1-7601b9e6a0d4.pdf'
  },
  {
    id: 6,
    title: 'OJT Certificate',
    issuer: 'Quanby Solutions Inc.',
    date: 'Course Certified',
    credentialId: '##',
    color: '#3476a6',
    pdfUrl: '/c92695f9-f595-4f50-a78a-236cee432dd8.jpg'
  },
  {
    id: 7,
    title: 'Claude 101',
    issuer: 'Antrophic',
    date: 'Course Certified',
    credentialId: 'Claude-101',
    color: '#04f8e8b9',
    pdfUrl: '/certificate-aq4wbrdpreua-1776493635.pdf'
  },
  {
    id: 8,
    title: 'Network Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Course Certified',
    credentialId: 'CISCO-NET-BASICS',
    color: '#ec0dc3c3',
    pdfUrl: '/Networking_Basics_certificate_arvin9999990-gmail-com_4399dd47-a990-4af2-81fd-1a8f5129959d.pdf'
  },
  {
    id: 9,
    title: 'Work Immersion Certificate',
    issuer: 'Sorrco II',
    date: 'Course Certified',
    credentialId: 'Work-immersion-EIM',
    color: '#f6fbfbff',
    pdfUrl: '/ad0fdf18-9ec1-4a83-9d39-1a43ba0c241b.jpg'
  },
  {
    id: 10,
    title: 'Degree Holder',
    issuer: 'Sorsogon State University',
    date: 'Course Certified',
    credentialId: '8908185',
    color: '#e27e0457',
    pdfUrl: '/IMG_20260618_142810.jpg'
  }
];

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [viewStyle, setViewStyle] = useState('list'); // 'list' | 'tile' 

  const handleOpenCert = (cert) => {
    setSelectedCert(cert);
    // Burst confetti from the bottom edges
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <motion.div
      className="page-overlay certificates-overlay"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlay-card glass panels-container certificates-layout">
        <div className="panel-header">
          <Award className="panel-icon" size={24} />
          <h2>Certifications</h2>
        </div>
        <p className="panel-subtitle">My verified credentials and training courses.</p>

        {/* VIEW STYLE TOGGLE */}
        <div className="cert-header-controls">
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
          </div>
        </div>

        <div className={`items-list scrollable certs-list-container ${viewStyle}`}>
          {certificates.map((cert) => {
            const isLarge = viewStyle === 'large';
            return (
              <motion.div
                key={cert.id}
                className="cert-card"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleOpenCert(cert)}
              >
                {isLarge ? (
                  <>
                    {/* Background Seal/Watermark */}
                    <div className="cert-badge-watermark">
                      <Award size={100} color={cert.color} />
                    </div>
                    
                    <span className="cert-header-mini">Certificate of Completion</span>
                    <span className="cert-recipient">This is proudly presented to</span>
                    <span className="cert-recipient-name">ARVIN CATALBAS</span>
                    
                    <h4 style={{ color: cert.color }}>{cert.title}</h4>
                    
                    <div className="cert-footer-mini">
                      <div className="cert-meta-item">
                        <span className="cert-meta-label">ISSUED BY</span>
                        <span className="cert-meta-val">{cert.issuer}</span>
                      </div>
                      
                      <div className="cert-signature-area">
                        <span className="cert-signature-text" style={{ color: cert.color }}>
                          {cert.issuer.split(' ')[0]}
                        </span>
                        <div className="cert-signature-line" />
                        <span className="cert-meta-label">SIGNATURE</span>
                      </div>
                      
                      <div className="cert-actions" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="cert-action-btn"
                          title="Open Certificate PDF"
                        >
                          <Eye size={16} />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="cert-status">
                      <ShieldCheck color={cert.color} size={20} />
                    </div>
                    <div className="cert-info">
                      <h4>{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer} • <span className="date">{cert.date}</span></p>
                      <code className="cert-id">ID: {cert.credentialId}</code>
                    </div>
                    <div className="cert-actions" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-action-btn"
                        title="Open Certificate PDF"
                      >
                        <Eye size={16} />
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal glass"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedCert(null)}>
                <X size={20} />
              </button>
              
              <div className="modal-badge-holder">
                <Award size={48} color={selectedCert.color} />
              </div>
              
              <h3>Certificate of Completion</h3>
              <p className="modal-cert-to">This is proudly presented to</p>
              <h2>ARVIN CATALBAS</h2>
              <p className="modal-cert-for">for successfully completing the course program</p>
              <h1 style={{ color: selectedCert.color }}>{selectedCert.title}</h1>
              
              <div className="modal-cert-footer">
                <div>
                  <p className="meta-label">ISSUED BY</p>
                  <p className="meta-val">{selectedCert.issuer}</p>
                </div>
                <div>
                  <p className="meta-label">DATE</p>
                  <p className="meta-val">{selectedCert.date}</p>
                </div>
                <div>
                  <p className="meta-label">CREDENTIAL ID</p>
                  <p className="meta-val">{selectedCert.credentialId}</p>
                </div>
              </div>
              
              <div className="security-ribbon" style={{ borderColor: selectedCert.color }}>
                SECURED & VERIFIED
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default Certificates;
