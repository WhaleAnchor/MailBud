import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/catlogo.png'; // import your logo image file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="MailBud logo" />
        MailBud
      </Link>
      <div className="nav-links">
        <Link to="/mail">Mail</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/profiles">User Profiles</Link>
        <Link to="/history">History</Link>
        <Link to="/profile">Profile</Link> {/* This can be replaced with user's profile picture if available */}
      </div>
    </nav>
  );
};

export default Navbar;
