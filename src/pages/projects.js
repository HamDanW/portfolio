import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/project.module.css"
import sshellLogo from '../images/shell.png';

const projects = [
  {
    id: "project-1",
    imageSrc: sshellLogo,
    url:"simple-shell",
    title: "Simple Shell"
  },
  {
    id: "project-2",
    imageSrc: "../images/blockchain.png",
    url:"blockchain",
    title: "Block Chain"
  },
  {
    id: "Multithreading Library",
    imageSrc: "../images/multithread.png",
    url:"multithreading",
    title: "Multi-Threading"
  },
  {
    id: "Match Cards",
    imageSrc: "../images/multithread.png",
    url:"Badminton-Match-Cards-Generator",
    title: "Badminton Match Cards Generator"
  },
  { 
    id: "fat system",
    imageSrc: "../images/multithread.png",
    url:"fat-system",
    title: "FAT System"
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
          <img src = {link.imageSrc}/>
          <h2 className={styles.boxTitle}>{link.title}</h2>
        </Link>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Projects
