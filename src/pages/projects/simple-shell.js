import * as React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import mdContent from "simple-shell.md"

const SimpleShell = () => {
  return (
    <Layout>
      {/* Display the converted markdown content as HTML */}
      <ReactMarkdown children={mdContent} />

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Simple-Shell" />

export default SimpleShell
