import * as React from "react"
import { Link } from "gatsby"
import Pdf from '../pages/Resume.pdf'

import "./header-styling.css"

const links=[
  {
    text: "Projects",
    url: "projects"
  },
  {
    text: "About Me",
    url: "about-me"
  },
  {
    text: "My Playground",
    url: "my-playground"
  }
]

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        {links.map(link =>(
          <Link
            key = {link.url}
            to={link.url}
            className="links"
          >
            {link.text}
          </Link>
        ))}
        <li><a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
