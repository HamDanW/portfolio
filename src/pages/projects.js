import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const projects = [
  {
    id: "project-1",
    imageSrc: "../images/shell.png",
    title: "Simple Shell",
    description: "Description of Simple Shell..."
  },
  {
    id: "project-2",
    imageSrc: "../images/blockchain.png",
    title: "Block Chain",
    description: "Description of Block Chain..."
  },
  {
    id: "project-3",
    imageSrc: "../images/multithread.png",
    title: "Multi-Threading",
    description: "Description of Multi-Threading..."
  },
  {
    id: "project-4",
    title: "Project 4",
    description: "Description of Project 4..."
  },
  {
    id: "project-5",
    title: "Project 5",
    description: "Description of Project 5..."
  },
  {
    id: "project-6",
    title: "Project 6",
    description: "Description of Project 6..."
  }
];

const [selectedProject, setSelectedProject] = useState(null);

const openModal = (projectId) => {
  setSelectedProject(projectId);
};

const closeModal = () => {
  setSelectedProject(null);
};

const Projects = () => (
  <Layout>
    <section>
      <h2>My Projects</h2>
      <div className="catalog">
        {projects.map((project) => (
          <div className="project" id={project.id} key={project.id}>
            {project.imageSrc && <img src={project.imageSrc} alt={project.title} />}
            <h3>{project.title}</h3>
            {selectedProject === project.id && (
              <div id={`modal-${project.id}`} className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Projects
