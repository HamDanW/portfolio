import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"



export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query {
markdownRemark {
    rawMarkdownBody
    excerpt
    frontmatter {
      title
    }
  }
}
`