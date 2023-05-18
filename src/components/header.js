import * as React from "react"
import { Link } from "gatsby"
import Pdf from '../pages/Resume.pdf'

import "./header-styling.css"

const links=[
  {
    text: "Home",
    url: "/"
  },
  {
    text: "Projects",
    url: "../pages/projects"
  },
  {
    text: "About Me",
    url: "../pages/about-me"
  },
  {
    text: "My Playground",
    url: "../pages/my-playground"
  }
]

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        {links.map(link =>(
          <li>
            <Link
              key = {link.url}
              to={link.url}
              className="links"
            >
              {link.text}
            </Link>
          </li>
        ))}
        <li><a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
