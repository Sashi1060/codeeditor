// import React, { useState, useEffect } from 'react';
// import Editor from '@monaco-editor/react';
// import EditorNavbar from './EditorNavbar';
// import OutputModal from './OutputModal';
// import './CodeEditor.css';

// const initialCode = {
//   javascript: '// Start coding in JavaScript...',
//   typescript: '// Start coding in TypeScript...',
//   python: '# Start coding in Python...',
//   c: '// Start coding in C...\n#include <stdio.h>\nint main() {\n    int a = 100, b = 50;\n    printf("%d\\n", a + b);\n    return 0;\n}',
//   cpp: '// Start coding in C++...\n#include <iostream>\nusing namespace std;\nint main() {\n    int a = 100, b = 50;\n    cout << a + b << endl;\n    return 0;\n}',
//   csharp: '// Start coding in C#...\nusing System;\nclass Program {\n    static void Main() {\n        int a = 100, b = 50;\n        Console.WriteLine(a + b);\n    }\n}',
//   java: '// Start coding in Java...\npublic class Main {\n    public static void main(String[] args) {\n        int a = 100, b = 50;\n        System.out.println(a + b);\n    }\n}',
//   html: '<!-- Start coding in HTML -->\n<!DOCTYPE html>\n<html>\n<body>\n<p id="demo"></p>\n<script>\ndocument.getElementById("demo").innerHTML = 100 + 50;\n</script>\n</body>\n</html>',
//   css: '/* Start coding in CSS */\nbody {\n    background-color: lightblue;\n}\n#demo {\n    color: white;\n}',
//   sql: '-- Start coding in SQL\nSELECT 100 + 50 AS result;',
// };

// export default function CodeEditor() {
//   const [theme, setTheme] = useState('vs-dark');
//   const [language, setLanguage] = useState('javascript');
//   const [code, setCode] = useState(initialCode);
//   const [output, setOutput] = useState('');
//   const [errors, setErrors] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     setOutput('');
//     setErrors('');
//   }, [language]);

//   const handleRunCode = async () => {
//     try {
//       const response = await runCode(code[language], language);
//       setOutput(response.output);
//       setErrors(response.errors);
//     } catch (error) {
//       setOutput('');
//       setErrors(error.message);
//     }
//     setShowModal(true);
//   };

//   const runCode = async (code, language) => {
//     if (language === 'javascript' || language === 'typescript') {
//       return runJavaScriptOrTypeScript(code);
//     } else {
//       return mockRunCode(code, language);
//     }
//   };

//   const runJavaScriptOrTypeScript = (code) => {
//     const originalConsoleLog = console.log;
//     let consoleOutput = '';

//     console.log = (...args) => {
//       consoleOutput += args.join(' ') + '\n';
//     };

//     try {
//       // eslint-disable-next-line no-eval
//       const result = eval(code);
//       console.log = originalConsoleLog;
//       return { output: consoleOutput.trim() || String(result), errors: '' };
//     } catch (error) {
//       console.log = originalConsoleLog;
//       return { output: '', errors: error.message };
//     }
//   };

//   const mockRunCode = async (code, language) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         let output = '';
//         let errors = '';
//         try {
//           output = simulateCodeExecution(code, language);
//         } catch (err) {
//           errors = err.message;
//         }
//         resolve({ output: String(output), errors });
//       }, 1000);
//     });
//   };

//   const simulateCodeExecution = (code, language) => {
//     switch (language) {
//       case 'python':
//         return runPythonCode(code);
//       case 'c':
//       case 'cpp':
//         return runC_CPPCode(code, language);
//       case 'csharp':
//         return runCSharpCode(code);
//       case 'java':
//         return runJavaCode(code);
//       case 'html':
//         return 'HTML executed';
//       case 'css':
//         return 'CSS applied';
//       case 'sql':
//         return '150'; // Simulate output for SQL query
//       default:
//         return `Output from ${language} code execution`;
//     }
//   };

//   const runPythonCode = (code) => {
//     try {
//       if (/print\((.*)\)/.test(code)) {
//         const match = /print\((.*)\)/.exec(code);
//         if (match) {
//           return eval(match[1]);  // Evaluate the expression inside print()
//         }
//       } else if (/def add/.test(code) && /add\(\d+, \d+\)/.test(code)) {
//         return '5'; // Simulated output for the given Python function
//       } else {
//         return 'Executed Python code';
//       }
//     } catch (err) {
//       return 'Error executing Python code';
//     }
//   };

//   const runC_CPPCode = (code, language) => {
//     try {
//       if (/int main/.test(code) && /printf|cout/.test(code)) {
//         return '150'; // Simulate output for simple C/C++ code
//       } else {
//         return `Executed ${language} code`;
//       }
//     } catch (err) {
//       return `Error executing ${language} code`;
//     }
//   };

//   const runCSharpCode = (code) => {
//     try {
//       if (/Console.WriteLine/.test(code)) {
//         return '150'; // Simulate output for simple C# code
//       } else {
//         return 'Executed C# code';
//       }
//     } catch (err) {
//       return 'Error executing C# code';
//     }
//   };

//   const runJavaCode = (code) => {
//     try {
//       if (/System.out.println/.test(code)) {
//         return '150'; // Simulate output for simple Java code
//       } else {
//         return 'Executed Java code';
//       }
//     } catch (err) {
//       return 'Error executing Java code';
//     }
//   };

//   const handleEditorChange = (value) => {
//     setCode((prevCode) => ({
//       ...prevCode,
//       [language]: value,
//     }));
//   };

//   const handleSaveCode = () => {
//     const blob = new Blob([code[language]], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `${language}-code.txt`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className='editor-container'>
//       <header className='editor-header'>
//         <h1>Code Editor</h1>
//         <EditorNavbar onThemeChange={setTheme} onLanguageChange={setLanguage} />
//         <button onClick={handleRunCode}>Run Code</button>
//         <button onClick={handleSaveCode}>Save Code</button>
//       </header>
//       <div className='editor-content'>
//         <Editor
//           height="100%"
//           width="100%"
//           language={language}
//           value={code[language]}
//           theme={theme}
//           onChange={handleEditorChange}
//           options={{
//             selectOnLineNumbers: true,
//             automaticLayout: true,
//             autoIndent: 'full',
//           }}
//         />
//       </div>
//       <OutputModal show={showModal} onClose={() => setShowModal(false)} output={output} errors={errors} />
//     </div>
//   );
// }

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import EditorNavbar from './EditorNavbar';
import OutputModal from './OutputModal';
import CodeExecutor from './CodeExecutor';
import './CodeEditor.css';

const initialCode = {
  javascript: '// Start coding in JavaScript...',
  typescript: '// Start coding in TypeScript...',
  python: `# Start coding in Python...\nprint("Hello, World!")\nclass Test:\n  def __init__(self):\n    self.message = "Hello, from class"\n  def display(self):\n    print(self.message)\nt = Test()\nt.display()`,
  c: '// Start coding in C...\n#include <stdio.h>\nint main() {\n    int a = 100, b = 50;\n    printf("%d\\n", a + b);\n    return 0;\n}',
  cpp: '// Start coding in C++...\n#include <iostream>\nusing namespace std;\nint main() {\n    int a = 100, b = 50;\n    cout << a + b << endl;\n    return 0;\n}',
  csharp: '// Start coding in C#...\nusing System;\nclass Program {\n    static void Main() {\n        int a = 100, b = 50;\n        Console.WriteLine(a + b);\n    }\n}',
  java: `// Start coding in Java...\npublic class Main {\n  public static void main(String[] args) {\n    int a = 100, b = 50;\n    System.out.println(a + b);\n  }\n}`,
  html: '<!-- Start coding in HTML -->\n<!DOCTYPE html>\n<html>\n<body>\n<p id="demo"></p>\n<script>\ndocument.getElementById("demo").innerHTML = 100 + 50;\n</script>\n</body>\n</html>',
  css: '/* Start coding in CSS */\nbody {\n    background-color: lightblue;\n}\n#demo {\n    color: white;\n}',
  sql: '-- Start coding in SQL\nSELECT 100 + 50 AS result;',
};

export default function CodeEditor() {
  const [theme, setTheme] = useState('vs-dark');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(initialCode);
  const [showModal, setShowModal] = useState(false);

  const handleRunCode = () => {
    setShowModal(true);
  };

  const handleEditorChange = (value) => {
    setCode((prevCode) => ({
      ...prevCode,
      [language]: value,
    }));
  };

  const handleSaveCode = () => {
    const blob = new Blob([code[language]], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${language}-code.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='editor-container'>
      <header className='editor-header'>
        <h1>Code Editor</h1>
        <EditorNavbar onThemeChange={setTheme} onLanguageChange={setLanguage} />
        <button onClick={handleRunCode}>Run Code</button>
        <button onClick={handleSaveCode}>Save Code</button>
      </header>
      <div className='editor-content'>
        <Editor
          height="100%"
          width="100%"
          language={language}
          value={code[language]}
          theme={theme}
          onChange={handleEditorChange}
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            autoIndent: 'full',
          }}
        />
      </div>
      {showModal && (
        <OutputModal show={showModal} onClose={() => setShowModal(false)}>
          <CodeExecutor code={code[language]} language={language} />
        </OutputModal>
      )}
    </div>
  );
}
