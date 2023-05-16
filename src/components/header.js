import * as React from "react"
import { Link } from "gatsby"
import Pdf from '../pages/Resume.pdf'

import "./header-styling.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="../pages/projects">Projects</a></li>
        <li><a href="../pages/my-playground">My Playground</a></li>
        <li><a href="../pages/about-me">About Me</a></li>
        <li><a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
