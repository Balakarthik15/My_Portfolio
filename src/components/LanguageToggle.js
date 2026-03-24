import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/languageToggle.scss';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      type="button"
      aria-label={`Switch to ${language === 'de' ? 'English' : 'German'}`}
    >
      <span className="active-lang">
        {language === 'de' ? 'EN' : 'DE'}
      </span>
      <span className="inactive-lang">
        {language === 'de' ? 'DE' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;