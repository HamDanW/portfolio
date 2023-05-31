import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SimpleShell = () => (
  <Layout>
    <h1>Simple Shell</h1>
    <hr/>
    <h2>Introduction </h2>
    <p>A shell is a command-line interface, also known as a CLI. Once a command is entered, the shell interprets it and communicates with the operating system to execute the requested actions. It acts as an intermediary between the user and the operating system, facilitating the execution of various tasks and managing system resources. </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Simple-Shell" />

export default SimpleShell
