import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './img/logo.png';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo}/>
      </Link>
      <div className="navbar-title">TaskManager</div>
    </nav>
  );
}

export default Navbar;
