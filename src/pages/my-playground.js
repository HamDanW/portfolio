import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const samplePageLinks = [
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const MyPlayground = () => (
  <Layout>
    <h1>Hi I am Ryan</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About-Me" />

export default MyPlayground
