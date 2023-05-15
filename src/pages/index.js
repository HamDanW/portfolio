import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Projects",
    url: "page-2",
    description:
      "A great place to show my past projects",
  },
  {
    text: "About Me",
    url: "about-me",
    description:
      "A lil sumting about me",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "My Playground",
    url: "my-playground",
    description:
      "This is an area for me to play around with Node and React! Come Check it out!",
  },
]

const samplePageLinks = [
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

// const moreLinks = [
//   { text: "Visit me on LinkedIn", url: "https://www.linkedin.com/in/ryan-c-wong/", class : "fab fa-linkedin" },
//   {
//     text: "Github",
//     url: "https://github.com/HamDanW",
//     class : "fab fa-github"
//   }
// ]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div className={styles.imageContainer}>
        <StaticImage
          src="../images/selfie.jpeg"
          loading="eager"
          width={200}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          className={styles.circleImage}
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
      <h1>
        Welcome to  My Website!
      </h1>
      <p className={styles.intro}>
        {/* <b>Example pages:</b>{" "} */}
        <p>
          Hello, my name is Ryan Wong. I am a recent undergraduate from UC Davis majoring in computer science. This site is for me to learn and showcase my skills using React and Node. Have a good Day!
        </p>
        {/* {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))} */}
      </p>
    </div>
    <ul className={styles.list}>
    {links.map(link => (
        <Link
          key={link.url}
          to={link.url}
          className={styles.box}
        >
          <h2 className={styles.boxTitle}>{link.text}</h2>
          <p className={styles.boxDescription}>{link.description}</p>
        </Link>
      ))}
    </ul>
    {/* {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`} target = "_blank">{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
