// src/coreComponents/CodeOutput.jsx
import React from 'react';
import './CodeOutput.css';

export default function CodeOutput({ output, errors }) {
  return (
    <div className='code-output'>
      <h2>Output</h2>
      <pre>{output}</pre>
      <h2>Errors</h2>
      <pre className='errors'>{errors}</pre>
    </div>
  );
}
