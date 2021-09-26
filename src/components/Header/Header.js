import React from 'react';
import img from '../Header/image/logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={img} alt='' />
        <h3>Game Store</h3>
      </div>
      <div>
        <nav>
          <ul className='nav-iteams'>
            <li>Games List</li>
            <li>Special Offers</li>
            <li>Top 2021</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
