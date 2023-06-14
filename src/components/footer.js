import React, { useState } from 'react';
import { Link } from "gatsby"
import "./footer-styling.css"
import "./dark-mode-styling.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
    const [isLightMode, setIsLightMode] = useState(true);
  
    const toggleMode = () => {
      setIsLightMode(!isLightMode);
    };
  
    return (
      <footer className={`wrapper ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
        <div className="candles">
          <div className="light__wave"></div>
          <div className="candle1">
            <div className="candle1__body">
              <div className="candle1__eyes">
                <span className="candle1__eyes-one"></span>
                <span className="candle1__eyes-two"></span>
              </div>
              <div className="candle1__mouth"></div>
            </div>
            <div className="candle1__stick"></div>
          </div>
  
          <div className="candle2">
            <div className="candle2__body">
              <div className="candle2__eyes">
                <div className="candle2__eyes-one"></div>
                <div className="candle2__eyes-two"></div>
              </div>
            </div>
            <div className="candle2__stick"></div>
          </div>
          <div className="candle2__fire"></div>
          <div className="sparkles-one"></div>
          <div className="sparkles-two"></div>
          <div className="candle__smoke-one"></div>
          <div className="candle__smoke-two"></div>
        </div>
        <div className="floor"></div>
  
        <div className="social-icons">
          <a href="http://Linkedin.com/in/ryan-c-wong" target="_blank" className="icon linkedin">
            <span><i className="fab fa-linkedin"></i></span>
          </a>
          <a href="https://github.com/HamDanW" target="_blank" className="icon github">
            <span><i className="fab fa-github"></i></span>
          </a>
        </div>
        <div className="contact-info">
          <p className="phone">Phone: (415)-606-3369</p>
          <p> | </p>
          <p className="email">Email: ryccwong@email.com</p>
        </div>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
  
        <button onClick={toggleMode}>
          {isLightMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </footer>
    );
  };

export default Footer
