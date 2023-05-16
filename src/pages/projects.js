import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/project-styling.css"

const projects = [
  {
    id: "project-1",
    imageSrc: "../images/shell.png",
    url:"./project-pages/simple-shell",
    title: "Simple Shell",
    description: "Description of Simple Shell..."
  },
  {
    id: "project-2",
    imageSrc: "../images/blockchain.png",
    url:"./project-pages/simple-shell",
    title: "Block Chain",
    description: "Description of Block Chain..."
  },
  {
    id: "project-3",
    imageSrc: "../images/multithread.png",
    url:"./project-pages/simple-shell",
    title: "Multi-Threading",
    description: "Description of Multi-Threading..."
  },
  {
    id: "project-4",
    imageSrc: "../images/multithread.png",
    url:"./project-pages/simple-shell",
    title: "Project 4",
    description: "Description of Project 4..."
  },
  {
    id: "project-5",
    imageSrc: "../images/multithread.png",
    url:"./project-pages/simple-shell",
    title: "Project 5",
    description: "Description of Project 5..."
  },
  {
    id: "project-6",
    imageSrc: "../images/multithread.png",
    url:"./project-pages/simple-shell",
    title: "Project 6",
    description: "Description of Project 6..."
  }
];


const Projects = () => (
  <Layout>
    <ul className={styles.list}>
    {projects.map(link => (
        <Link
          key={link.url}
          to={link.url}
          className={styles.box}
        >
          <img src="img/shell.png"></img>
          <h2 className={styles.boxTitle}>{link.text}</h2>
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

export const Head = () => <Seo title="Page two" />

export default Projects
