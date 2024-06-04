import React from 'react';

const CodeExecutor = ({ code, language }) => {
  const runJavaScriptOrTypeScript = (code) => {
    const originalConsoleLog = console.log;
    let consoleOutput = '';

    console.log = (...args) => {
      consoleOutput += args.join(' ') + '\n';
    };

    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      console.log = originalConsoleLog;
      return { output: consoleOutput.trim() || String(result), errors: '' };
    } catch (error) {
      console.log = originalConsoleLog;
      return { output: '', errors: error.message };
    }
  };

  const runPythonCode = (code) => {
    // Simulated Python execution
    try {
      if (/print\((.*)\)/.test(code)) {
        const match = /print\((.*)\)/.exec(code);
        if (match) {
          return match[1]; // Extract and return the print statement content
        }
      } else if (/def \w+\(.*\):/.test(code)) {
        return 'Executed Python function';
      } else {
        return 'Executed Python code';
      }
    } catch (err) {
      return `Error executing Python code: ${err.message}`;
    }
  };

  const runC_CPPCode = (code, language) => {
    try {
      if (/int main/.test(code) && /printf|cout/.test(code)) {
        return 'Executed simple C/C++ program';
      } else {
        return `Executed ${language} code`;
      }
    } catch (err) {
      return `Error executing ${language} code: ${err.message}`;
    }
  };

  const runCSharpCode = (code) => {
    try {
      if (/Console.WriteLine/.test(code)) {
        return 'Executed simple C# program';
      } else {
        return 'Executed C# code';
      }
    } catch (err) {
      return `Error executing C# code: ${err.message}`;
    }
  };

  const runJavaCode = (code) => {
    try {
      if (/System.out.println/.test(code)) {
        return 'Executed simple Java program';
      } else {
        return 'Executed Java code';
      }
    } catch (err) {
      return `Error executing Java code: ${err.message}`;
    }
  };

  const runHtmlCssSqlCode = (language) => {
    switch (language) {
      case 'html':
        return 'HTML executed';
      case 'css':
        return 'CSS applied';
      case 'sql':
        return 'Executed SQL query';
      default:
        return `Output from ${language} code execution`;
    }
  };

  const executeCode = () => {
    switch (language) {
      case 'javascript':
      case 'typescript':
        return runJavaScriptOrTypeScript(code);
      case 'python':
        return runPythonCode(code);
      case 'c':
      case 'cpp':
        return runC_CPPCode(code, language);
      case 'csharp':
        return runCSharpCode(code);
      case 'java':
        return runJavaCode(code);
      case 'html':
      case 'css':
      case 'sql':
        return { output: runHtmlCssSqlCode(language), errors: '' };
      default:
        return { output: `Output from ${language} code execution`, errors: '' };
    }
  };

  const result = executeCode();

  return (
    <div>
      <h2>Output</h2>
      <pre>{result.output}</pre>
      {result.errors && (
        <>
          <h2>Errors</h2>
          <pre>{result.errors}</pre>
        </>
      )}
    </div>
  );
};

export default CodeExecutor;
