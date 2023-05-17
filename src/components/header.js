import * as React from "react"
import { Link } from "gatsby"
import Pdf from '../pages/Resume.pdf'

import "./header-styling.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="../pages/projects">Projects</Link>
        <Link to="../pages/my-playground">My Playground</Link>
        <Link to="../pages/about-me">About Me</Link>
        <li><a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
