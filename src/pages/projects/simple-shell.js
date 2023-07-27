import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  if (!markdownRemark) {
    return (
      <Layout>
        <div>
          <h1>Post Not Found</h1>
        </div>
      </Layout>
    )
  }
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
        <div>
          <h1>{frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Simple Shell" />

export const pageQuery = graphql`
  query {
    markdownRemark(id: { eq: "31f9b35d-c316-54ad-95b1-124c233a9954" }) {
      html
      frontmatter {
        title
      }
    }
  }
`
