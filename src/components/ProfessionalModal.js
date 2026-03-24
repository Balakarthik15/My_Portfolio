import React, { useEffect, useCallback, useState } from "react"
import "./../css/modal.scss"

export default function ProfessionalModal({ item, closeModal }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  }, [closeModal]);

  // Keyboard: Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return (
    <>
      <div
        className={`modalBackground ${isClosing ? 'closing' : ''}`}
        onClick={handleClose}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClose(); }}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      ></div>
      <div className={`modalContainer professional-modal ${isClosing ? 'closing' : ''}`}>
        <div className="titleCloseBtn">
          <button onClick={handleClose}>
            <h3>&#215;</h3>
          </button>
        </div>

        <div className="professional-modal-content">
          <h1 className="prof-title">{item.title}</h1>

          <div className="prof-meta-grid">
            <div className="prof-meta-item">
              <span className="prof-label">Industry</span>
              <span className="prof-value">{item.industry}</span>
            </div>
            <div className="prof-meta-item">
              <span className="prof-label">Role</span>
              <span className="prof-value">{item.role}</span>
            </div>
            <div className="prof-meta-item prof-meta-full">
              <span className="prof-label">Tech Stack</span>
              <span className="prof-value">{item.techStack}</span>
            </div>
          </div>

          <div className="prof-section">
            <h3 className="prof-section-title">Description</h3>
            <p className="prof-text">{item.description}</p>
          </div>

          <div className="prof-section">
            <h3 className="prof-section-title">Result</h3>
            <p className="prof-text">{item.outcome}</p>
          </div>

          {item.demoLinks && item.demoLinks.length > 0 && (
            <div className="prof-section prof-demo-section">
              <h3 className="prof-section-title">Demo</h3>
              <div className="prof-demo-buttons">
                {item.demoLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prof-demo-btn"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              {item.demoCredit && (
                <p className="prof-demo-credit">{item.demoCredit}</p>
              )}
            </div>
          )}

          {item.ndaNote && (
            <div className="prof-nda">
              <p>{item.ndaNote}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
