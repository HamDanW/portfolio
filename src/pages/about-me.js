import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMe = () => (
  <Layout>
    <h1>A Little About Me</h1>

    <p>
      Hello, I am Ryan and I am a recent graduate from University of California, Davis with a bachelor's degree in computer science.
    </p>
    <p>I enjoy other </p>
  </Layout>
)

export const Head = () => <Seo title="About-Me" />

export default AboutMe
