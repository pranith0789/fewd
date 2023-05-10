import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file
const about=()=>{
  return(
      <>
      <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/About" className="nav-link">About</Link>
          <Link to="/Contact" className="nav-link">Contact</Link>
      </nav>
      <h1>about</h1>
      </>
  );
}


export default about;