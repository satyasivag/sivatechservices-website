import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Siva Tech Services" className="logo-icon" />
          <div className="logo-text">
            <div className="logo-top-line">
              <span className="logo-siva">SIVA</span>
              <span className="logo-tech">TECH</span>
            </div>
            <span className="logo-services">SERVICES</span>
          </div>
        </Link>

        <div className="mobile-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleMenu}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
