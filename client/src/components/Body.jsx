import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../index.css';
import logo from '../images/logo_img.png';
const Body = () => {
  console.log('Body component rendered');
  return (
    <div>
      <nav className="navbar">
      <img src={logo}className='navbar-img'/>
        <ul className="navbar-links">
          <li><a href="/body/home">Home</a></li>
          <li><a href="/body/explore">Explore</a></li>
          <li><a href="/body/cart">Cart</a></li>
          <li><a href="/body/post">Post</a></li>
          <li><a href="/body/profile"><AccountCircleIcon /></a></li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
