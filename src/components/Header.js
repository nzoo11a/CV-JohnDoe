import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link className="logo" to="/">John Doe</Link>
        <nav className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/services" activeClassName="active">Services</NavLink>
          <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          <NavLink to="/legal-notice" activeClassName="active">Legal Notice</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
