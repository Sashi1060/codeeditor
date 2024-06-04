import React from 'react';
import './LanguageDropdown.css';

export default function LanguageDropdown({ onLanguageChange }) {
  const languages = ['javascript', 'typescript', 'python', 'c', 'cpp', 'csharp', 'java'];

  return (
    <div className='language-dropdown'>
      <label htmlFor='language-select'>Choose Language:</label>
      <select id='language-select' onChange={(e) => onLanguageChange(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
