// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './Cards.css'; // Make sure the styles are imported

// // const Cards = () => {
// //   return (
// //     <div className='Main-Cards-Container'>
// //       <h1>Welcome!</h1>
// //       <p>Please choose which category you belong to:</p>
// //       <div className='cards-wrapper'>
// //         <div className='card-container employee-container'>
// //           {/* Link to the registration form for employees */}
// //           <Link to="/register/employee" className='card-title'>Employee</Link>
// //         </div>
// //         <div className='vertical-line'></div>  {/* Vertical line between cards */}
// //         <div className='card-container parent-card-container'>
// //           {/* Link to the registration form for parents */}
// //           <Link to="/register/parent" className='card-title'>Parent</Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cards;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Cards.css'; // Make sure the styles are imported

// const Cards = () => {
//   return (
//     <div className='Main-Cards-Container'>
//       <h1>Welcome!</h1>
//       <p>Please choose which category you belong to:</p>
//       <div className='cards-wrapper'>
//         {/* Entire card as a link to the registration form for employees */}
//         <Link to="/register/employee" className='card-container employee-container'>
//           <div className='card-title'>Employee</div>
//         </Link>
//         <div className='vertical-line'></div>  {/* Vertical line between cards */}
//         {/* Entire card as a link to the registration form for parents */}
//         <Link to="/register/parent" className='card-container parent-card-container'>
//           <div className='card-title'>Parent</div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'; // Make sure the styles are imported

const Cards = () => {
  return (
    <div className='Main-Cards-Container'>
      <h1>Welcome!</h1>
      <p>Please choose which category you belong to:</p>
      <div className='cards-wrapper'>
        <Link to="/register/employee" className='card-container employee-container' aria-label="Register as employee">
          <h2 className='card-title'>Employee</h2>
        </Link>
        <div className='vertical-line'></div> {/* Vertical line between cards */}
        <Link to="/register/parent" className='card-container parent-card-container' aria-label="Register as parent">
          <h2 className='card-title'>Parent</h2>
        </Link>
      </div>
    </div>
  );
};

export default Cards;

