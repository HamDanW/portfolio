import * as React from "react"
import { Link } from "gatsby"

import "./header-styling.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="../pages/projects">Portfolio</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
