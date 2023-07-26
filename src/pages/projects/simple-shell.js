import * as React from "react"
import { Link } from "gatsby"
import marked from "marked";

import Layout from "../../components/layout"
import Seo from "../../components/seo"


const SimpleShell = () => {
  const [markdownContent, setMarkdownContent] = React.useState("");

  React.useEffect(() => {
    // Fetch the markdown file
    fetch("simple-shell.md")
      .then((response) => response.text())
      .then((data) => {
        // Convert the markdown content to HTML using marked
        const htmlContent = marked(data);
        setMarkdownContent(htmlContent);
      })
      .catch((error) => {
        console.error("Error fetching or converting markdown:", error);
      });
  }, []);

  return(  
    <Layout>
      <div>markdown file here</div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Simple-Shell" />

export default SimpleShell
