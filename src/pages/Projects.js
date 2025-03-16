import React from "react";
import "./Projects.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/pp.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Medical Insurance Cost Prediction System",
      description:
        "Developed a web application that predicts medical insurance costs based on user data using a machine learning model (Linear Regression). The system also allows report downloads and features a chatbot for queries.",
      tech: ["Django", "React", "Python", "Scikit-learn", "SQLite"],
      image: project1, // Replace with your project image variable
      demoLink: "#", // Replace with your live demo link
      codeLink:
        "https://github.com/aabhashbasnet/MedicalInsuranceCostPredictionSystem", // Replace with your GitHub repository link
    },
    {
      title: "Offline Chess Game",
      description:
        "Developed a fully functional offline chess game with an AI opponent. The game features a simple interface, move validation, and allows players to play against the computer without an internet connection",
      tech: ["React", "Chess.js", "css"],
      image: project2,
      demoLink: "#",
      codeLink: "https://github.com/aabhashbasnet/OfflineChess",
    },
    {
      title: "Computer Vision System",
      description:
        "Built an object detection system for industrial automation using deep learning",
      tech: ["Python", "OpenCV", "PyTorch", "Docker"],
      image: project3,
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="title-decorator">//</span> Featured Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demoLink} className="project-link demo">
                    <span>Live Demo</span>
                    <div className="link-border"></div>
                  </a>
                  <a href={project.codeLink} className="project-link code">
                    <span>View Code</span>
                    <div className="link-border"></div>
                  </a>
                </div>
              </div>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
