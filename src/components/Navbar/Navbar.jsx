import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="topnav">
      <div className="topnav-logo">
        <a href="./">
          <img className="img-logo" />
          Medical Darpan
        </a>
      </div>
      <div className="topnav-centered">
        <a href="#home">Home</a>
        <a href="#about">Products</a>
        <a href="#distributors">Distributors</a>
        <a href="#manufacturers">Manufacturers</a>
        <a href="#about">About us</a>
        <a href="#blog">Blog</a>
      </div>
      <div className="topnav-right">
        <a href="#login">Login</a>
        <a href="#user">
          <i class="fa fa-user-circle" style={{ fontSize: '22px' }}></i>
        </a>
      </div>
    </div>
  );
}
