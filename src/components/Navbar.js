import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/catlogo.png'; // import your logo image file

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <img src={logo} alt="MailBud logo" />
        MailBud
      </NavLink>
      <div className="nav-links">
        <NavLink to="/mail" className={(navData) => (navData.isActive ? "active-tab" : 'none')}>Mail</NavLink>
        <NavLink to="/packages" className={(navData) => (navData.isActive ? "active-tab" : 'none')}>Packages</NavLink>
        <NavLink to="/profiles" className={(navData) => (navData.isActive ? "active-tab" : 'none')}>Profiles</NavLink>
        <NavLink to="/history" className={(navData) => (navData.isActive ? "active-tab" : 'none')}>History</NavLink>
        <NavLink to="/profile" className={(navData) => (navData.isActive ? "active-tab" : 'none')}>Profile</NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
