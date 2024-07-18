// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';  // Assuming you have styles for the navbar

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Navigate back to login page on logout
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhyKGHzZwu8RbaWUphjIr0C8s-2M2MY7bmw&s" alt="Logo" className="homelogo" />
      <h2 className='companyname'>ROOM TO READ</h2>
      <ul className="nav-links">
        <li className="nav-item" onClick={() => handleNavigate('/student')}>Student</li>
        <li className="nav-item" onClick={() => handleNavigate('/books')}>Books</li>
        <li className="nav-item" onClick={() => handleNavigate('/report-issue')}>Report an Issue</li>
        <li className="nav-item" onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
