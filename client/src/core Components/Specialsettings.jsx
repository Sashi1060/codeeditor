import React from 'react';
import './SpecialSettings.css';

const settings = {
  javascript: {
    description: 'JavaScript is a versatile language commonly used for web development.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Linting',
      'Debugging support'
    ],
  },
  typescript: {
    description: 'TypeScript is a strongly typed superset of JavaScript.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Type checking',
      'Refactoring tools'
    ],
  },
  python: {
    description: 'Python is a high-level, interpreted programming language.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Linting',
      'Debugging support',
      'Auto indentation'
    ],
  },
  c: {
    description: 'C is a general-purpose, procedural programming language.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Linting',
      'Debugging support'
    ],
  },
  cpp: {
    description: 'C++ is an extension of the C programming language.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Linting',
      'Debugging support'
    ],
  },
  csharp: {
    description: 'C# is a modern, object-oriented programming language developed by Microsoft.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Linting',
      'Debugging support'
    ],
  },
  java: {
    description: 'Java is a high-level, class-based, object-oriented programming language.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Linting',
      'Debugging support'
    ],
  },
  html: {
    description: 'HTML is the standard markup language for creating web pages.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Tag auto-closing',
      'Emmet support'
    ],
  },
  css: {
    description: 'CSS is a style sheet language used for describing the presentation of a document written in HTML.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Linting',
      'Emmet support'
    ],
  },
  sql: {
    description: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.',
    features: [
      'Syntax highlighting',
      'Code completion',
      'Query linting',
      'Database integration'
    ],
  },
};

const themes = [
  'vs-dark',
  'vs-light',
  'abyss',
  'hc-black',
  'kimbie-dark',
  'monokai',
  'solarized-dark',
  'solarized-light'
];

export default function SpecialSettings() {
  return (
    <div className='special-settings'>
      <h2>Special Settings and Features</h2>
      {Object.keys(settings).map((language) => (
        <div key={language} className='language-settings'>
          <h3>{language.toUpperCase()}</h3>
          <p>{settings[language].description}</p>
          <ul>
            {settings[language].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Available Themes</h2>
      <ul>
        {themes.map((theme, index) => (
          <li key={index}>{theme}</li>
        ))}
      </ul>
    </div>
  );
}
