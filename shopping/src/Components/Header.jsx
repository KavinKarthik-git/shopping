import React from 'react'
import './Header.css'
import {  Link } from 'react-router-dom'; // Correct import syntax

export const Header = () => {
  return (
    <div className='navbar'>
      <p className='title'>
        Kavin's food court
      </p>
<ul>
        <li>
          <Link to="/welcome">  {/* Use Link correctly */}
            Welcome
          </Link>
        </li>
        <li>
          <Link to="/cart">  {/* Use Link correctly */}
            Cart
          </Link>
        </li>
      </ul>
    </div>
      
  );
};
