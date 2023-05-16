import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/project-styling.css"

const projects = [
  {
    id: "project-1",
    imageSrc: "../images/shell.png",
    url:"./project-pages/simple-shell",
    title: "Simple Shell"
  },
  {
    id: "project-2",
    imageSrc: "../images/blockchain.png",
    url:"./project-pages/simple-shell",
    title: "Block Chain"
  },
  {
    id: "project-3",
    imageSrc: "../images/multithread.png",
    url:"./project-pages/simple-shell",
    title: "Multi-Threading"
  },
  {
    id: "project-4",
    imageSrc: "../images/multithread.png",
    url:"./project-pages/simple-shell",
    title: "Project 4"
  },
  {
    id: "project-5",
    imageSrc: "../images/multithread.png",
    url:"./project-pages/simple-shell",
    title: "Project 5"
  },
  {
    id: "project-6",
    imageSrc: "../images/multithread.png",
    url:"./project-pages/simple-shell",
    title: "Project 6"
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
          <img src={link.imageSrc}></img>
          <h2 className={styles.boxTitle}>{link.title}</h2>
        </Link>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Projects
