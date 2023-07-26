import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import "./footer-styling.css"
import "./dark-mode-styling.css"
//import "./dark-mode-test.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  let white = Boolean(true);
  let init = Boolean(true);

  function toggleAnimation() {
    const [centisecond, setCentisecond] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCentisecond((prevCentisecond) => prevCentisecond + 1);
      }, 10);

      return () => clearInterval(timer);
    }, []);

    console.log(centisecond);

    if (white) {
      //turn dark mode
      var playtime = 235
      if (init = true) {
        init != init;
        document.body.classList.add("body-animate");
      } else {
        document.body.classList.remove("paused");
      }
      if (centisecond >= playtime) {
        document.body.classList.add("paused");
      }
    } else {
      //turn light mode
      var playtime = 65;
      document.body.classList.remove("paused");
      if (centisecond >= playtime) {
        document.body.classList.add("paused");
      }
    }
  }

  function pauseAnimation() {

  }

  return (
    <footer>
      <div className='wrapper'>
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
        <button className='Dark-Mode-Button' onClick={toggleAnimation}>Toggle</button>
      </div>
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
