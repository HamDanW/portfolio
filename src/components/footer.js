import * as React from "react"
import { Link } from "gatsby"
import "./footer-styling.css"

const Footer = () => (
    <footer>
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
