import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FacebookIcon, GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const validate = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!form.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!form.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API call transmission
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleReset = () => {
    setStatus('idle');
    setErrors({});
  };

  return (
    <motion.div
      className="page-overlay contact-overlay"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlay-card glass panels-container">
        <div className="panel-header">
          <Mail className="panel-icon" size={24} />
          <h2>Get In Touch</h2>
        </div>
        <p className="panel-subtitle">Feel free to drop a message. I will get back to you as soon as possible.</p>

        <div className="items-list scrollable contact-form-scroll">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="contact-success-card"
              >
                <div className="success-icon-wrapper">
                  <CheckCircle2 size={48} className="success-icon" />
                </div>
                <h3>Transmission Complete!</h3>
                <p>Thank you for reaching out! Your message has been sent successfully. I'll get in touch with you soon.</p>
                <button onClick={handleReset} className="btn btn-primary btn-success-reset">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* CONTACT BADGES */}
                <div className="contact-badges-grid">
                  <div className="contact-badge-item glass-inner">
                    <Mail size={16} className="highlight" />
                    <div className="badge-details">
                      <span className="badge-label">Email</span>
                      <a href="mailto:arvin9999990@gmail.com" className="badge-value">arvin9999990@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-badge-item glass-inner">
                    <MapPin size={16} className="highlight" />
                    <div className="badge-details">
                      <span className="badge-label">Location</span>
                      <span className="badge-value">Barcelona, Sorsogon, Philippines</span>
                    </div>
                  </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="contact-form-element">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        disabled={status === 'submitting'}
                        className={errors.name ? 'input-error' : ''}
                      />
                      {errors.name && (
                        <span className="field-error-msg">
                          <AlertCircle size={12} /> {errors.name}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        disabled={status === 'submitting'}
                        className={errors.email ? 'input-error' : ''}
                      />
                      {errors.email && (
                        <span className="field-error-msg">
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Collaboration"
                        disabled={status === 'submitting'}
                        className={errors.subject ? 'input-error' : ''}
                      />
                      {errors.subject && (
                        <span className="field-error-msg">
                          <AlertCircle size={12} /> {errors.subject}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <div className="input-wrapper">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        disabled={status === 'submitting'}
                        className={errors.message ? 'input-error' : ''}
                      />
                      {errors.message && (
                        <span className="field-error-msg">
                          <AlertCircle size={12} /> {errors.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary btn-submit ${status === 'submitting' ? 'submitting' : ''}`}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span className="submitting-text loading-dots">TRANSMITTING</span>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>

                {/* SOCIAL LINKS IN CARD */}
                <div className="contact-card-socials">
                  <span className="socials-title">Or connect via social networks:</span>
                  <div className="social-links contact-socials-list">
                    <a href="https://facebook.com/senemorph" target="_blank" rel="noreferrer" title="Facebook">
                      <FacebookIcon size={18} />
                    </a>
                    <a href="https://github.com/arvincatalbas" target="_blank" rel="noreferrer" title="GitHub">
                      <GithubIcon size={18} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
                      <LinkedinIcon size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
