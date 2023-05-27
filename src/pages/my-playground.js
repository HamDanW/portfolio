import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const samplePageLinks = [
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const MyPlayground = () => (
  <Layout>
    <h1>Welcome to my playground</h1>
    <p>This is where I learn more about React</p>
    <b>Example pages:</b>{" "}
    {samplePageLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <Link to={link.url}>{link.text}</Link>
        {i !== samplePageLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export const Head = () => <Seo title="About-Me" />

export default MyPlayground
