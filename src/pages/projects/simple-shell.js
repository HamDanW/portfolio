import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SimpleShell = () => (
  <Layout>
    <h1>Simple Shell</h1>
    <h2>Introduction </h2>
    <hr></hr>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Simple-Shell" />

export default SimpleShell
