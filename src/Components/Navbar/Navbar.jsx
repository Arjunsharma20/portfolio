import React from "react";
import './Navbar.css';
import logo from "../../assets/logo.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink href="#hero" className="nav-link">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" className="nav-link">About Me</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#services" className="nav-link">Services</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#work" className="nav-link">My Work</AnchorLink>
        </li>
        <li>
    <AnchorLink href="#certifications" className="nav-link">Certifications</AnchorLink>
  </li>
        <li>
          <AnchorLink href="#contact" className="nav-link">Contact</AnchorLink>
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink href="#contact" className="nav-connect">
        Connect with me
      </AnchorLink></div>
    </div>
  );
};

export default Navbar;
