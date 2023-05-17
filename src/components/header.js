import * as React from "react"
import { Link } from "gatsby"
import Pdf from '../pages/Resume.pdf'

import "./header-styling.css"
import ProjectURl from '../pages/projects'
import PlaygroundURL from '../pages/my-playground'
import AboutMeURL from '../pages/about-me'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href={ProjectURl}>Projects</a></li>
        <li><a href={PlaygroundURL}>My Playground</a></li>
        <li><a href={AboutMeURL}>About Me</a></li>
        <li><a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
