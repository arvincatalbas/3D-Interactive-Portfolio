import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, X, ZoomIn } from 'lucide-react';
import confetti from 'canvas-confetti';

const certificates = [
  {
    id: 1,
    title: 'Electrical Installation & Maintenance NCII',
    issuer: 'TESDA (National Certificate)',
    date: 'Certified',
    credentialId: 'EIM-NCII-TESDA-NC',
    color: '#ffaa00'
  },
  {
    id: 2,
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Course Certified',
    credentialId: 'CISCO-JS-ESS1',
    color: '#00e5ff'
  },
  {
    id: 3,
    title: 'Claude Code in Action',
    issuer: 'Apply AI Platform',
    date: 'Certified',
    credentialId: 'CLAUDE-ACTION-101',
    color: '#ff007f'
  },
  {
    id: 4,
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: 'Course Certified',
    credentialId: 'CISCO-PKT-TRACER',
    color: '#a855f7'
  }
];

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

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
      <div className="overlay-card glass panels-container">
        <div className="panel-header">
          <Award className="panel-icon" size={24} />
          <h2>Certifications</h2>
        </div>
        <p className="panel-subtitle">My verified credentials and training courses.</p>

        <div className="items-list scrollable">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleOpenCert(cert)}
            >
              <div className="cert-status">
                <ShieldCheck color={cert.color} size={20} />
              </div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer} • <span className="date">{cert.date}</span></p>
                <code className="cert-id">ID: {cert.credentialId}</code>
              </div>
              <div className="cert-zoom">
                <ZoomIn size={16} />
              </div>
            </motion.div>
          ))}
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
              <h2>ARVIN</h2>
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
