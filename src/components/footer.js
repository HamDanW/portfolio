import * as React from "react"
import { Link } from "gatsby"
import "./footer-styling.css"
import "dark-mode-styling.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => (
    <footer>
        <div class="wrapper">
            <div class="candles">
                <div class="light__wave"></div>
                <div class="candle1">
                    <div class="candle1__body">
                        <div class="candle1__eyes">
                            <span class="candle1__eyes-one"></span>
                            <span class="candle1__eyes-two"></span>
                        </div>
                        <div class="candle1__mouth"></div>
                    </div>
                    <div class="candle1__stick"></div>
                </div>

                <div class="candle2">
                    <div class="candle2__body">
                        <div class="candle2__eyes">
                            <div class="candle2__eyes-one"></div>
                            <div class="candle2__eyes-two"></div>
                        </div>
                    </div>
                    <div class="candle2__stick"></div>
                </div>
                <div class="candle2__fire"></div>
                <div class="sparkles-one"></div>
                <div class="sparkles-two"></div>
                <div class="candle__smoke-one">

                </div>
                <div class="candle__smoke-two">

                </div>

            </div>
            <div class="floor">
            </div>


        </div>
        <div class="social-icons">
            <a href="http://Linkedin.com/in/ryan-c-wong" target="_blank" class="icon linkedin">
                <span><i class="fab fa-linkedin"></i></span>
            </a>
            <a href="https://github.com/HamDanW" target="_blank" class="icon github">
                <span><i class="fab fa-github"></i></span>
            </a>
        </div>
        <div class="contact-info">
            <p class="phone">Phone: (415)-606-3369</p>
            <p> | </p>
            <p class="email">Email: ryccwong@email.com</p>
        </div>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </footer>
)

export default Footer
