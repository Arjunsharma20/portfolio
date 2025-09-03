import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-name">Arjun Sharma</h2>
        <p className="footer-text">Connecting ideas, building solutions, and sharing knowledge.</p>
        <p className="footer-copy">© {new Date().getFullYear()} Arjun Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
