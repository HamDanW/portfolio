import React, { useEffect, useState } from "react";
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SimpleShell = () => {
  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    const fetchMdContent = async () => {
      try {
        const response = await fetch("simple-shell.md");
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content.");
        }
        const text = await response.text();
        setMdContent(text);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMdContent();
  }, []);

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
