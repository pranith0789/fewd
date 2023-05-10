import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

const Home = () => {
  return (
    <>
      <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/About" className="nav-link">About</Link>
          <Link to="/Contact" className="nav-link">Contact</Link>
      </nav>
      <h1>Home</h1>
    </>
  );
};

export default Home;