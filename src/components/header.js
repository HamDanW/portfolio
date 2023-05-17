import * as React from "react"
import { Link } from "gatsby"
import Pdf from '../pages/Resume.pdf'

import "./header-styling.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="../pages/projects">Projects</Link></li>
        <li><Link to="../pages/my-playground">My Playground</Link></li>
        <li><Link to="../pages/about-me">About Me</Link></li>
        <li><a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
