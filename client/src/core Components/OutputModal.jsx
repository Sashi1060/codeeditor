// import React from 'react';
// import './OutputModal.css';

// export default function OutputModal({ show, onClose, output, errors }) {
//   if (!show) return null;

//   return (
//     <div className='modal' onClick={onClose}>
//       <div className='modal-content' onClick={(e) => e.stopPropagation()}>
//         <span className='close' onClick={onClose}>&times;</span>
//         <h2>Output</h2>
//         <pre>{output}</pre>
//         <h2>Errors</h2>
//         <pre className='errors'>{errors}</pre>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import './OutputModal.css';

const OutputModal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default OutputModal;

