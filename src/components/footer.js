import React, { useState } from 'react';
import { Link } from "gatsby"
import "./footer-styling.css"
import "./dark-mode-styling.css"
//import "./dark-mode-test.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <footer>
      <div className="wrapper">
        <div className={`candles ${isPlaying ? 'playing' : ''}`}>
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
        <button onClick={toggleAnimation}>
          {isPlaying ? 'Pause Animation' : 'Play Animation'}
        </button>
      </div>
    </footer>
  );
};

export default Footer
