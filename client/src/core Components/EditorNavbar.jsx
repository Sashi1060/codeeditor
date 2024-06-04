import React from 'react';
import './EditorNavbar.css';

export default function EditorNavbar({ onThemeChange, onLanguageChange }) {
  const themes = ['vs-dark', 'vs-light', 'abyss'];
  const languages = [
    'javascript',
    'typescript',
    'python',
    'c',
    'cpp',
    'csharp',
    'java',
    'html',
    'css',
    'sql',
  ];

  const handleThemeChange = (event) => {
    onThemeChange(event.target.value);
  };

  const handleLanguageChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <nav className='editor-navbar'>
      <div className='dropdown-container'>
        <div className='dropdown'>
          <label htmlFor='theme-select'>Choose Theme:</label>
          <select id='theme-select' onChange={handleThemeChange}>
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
        <div className='dropdown'>
          <label htmlFor='language-select'>Choose Language:</label>
          <select id='language-select' onChange={handleLanguageChange}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
