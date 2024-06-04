import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

export default function Products() {
  return (
    <div className='products-container'>
      <h1 className='main-header-for-products'><i>Welcome</i></h1>
      <div className='cards-container'>
        <div className='card'>
          <Link to="/code-editor" className='card-link'>
            <h2>Code Editor</h2>
          </Link>
          <p>This is where you can write and edit your code.</p>
        </div>
        <div className='card'>
          <Link to="/dashboard" className='card-link'>
            <h2>Dashboard</h2>
          </Link>
          <p>This is your dashboard to monitor and manage your activities.</p>
        </div>
      </div>
    </div>
  );
}
