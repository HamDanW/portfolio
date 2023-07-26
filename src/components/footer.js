import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import "./footer-styling.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {

  return (
    <footer>
      <div className="social-icons">
        <a href="http://Linkedin.com/in/ryan-c-wong" target="_blank" rel="noopener noreferrer" className="icon linkedin">
          <span><i className="fab fa-linkedin"></i></span>
        </a>
        <a href="https://github.com/HamDanW" target="_blank" rel="noopener noreferrer" className="icon github">
          <span><i className="fab fa-github"></i></span>
        </a>
      </div>
      <div className="contact-info">
        <p className="phone">Phone: (415)-606-3369</p>
        <p> | </p>
        <p className="email">Email: ryccwong@email.com</p>
      </div>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer
