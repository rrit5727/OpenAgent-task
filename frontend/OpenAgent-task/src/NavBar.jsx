import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/submitted-data">View Submitted Data</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;