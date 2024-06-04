import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='brand-container'>
                <Link to='/'>SB</Link>
            </div>
            <div className='links-container'>
                <Link to='/about'>About</Link>
                <Link to='/cards'>Products</Link>
                <Link to='/services'>Services</Link>
                <Link to='/login'>Login</Link> || <Link to='/register'>Register</Link>
            </div>
        </div>
    );
}
