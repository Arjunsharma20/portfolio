import React from "react";
import "./MyWork.css";
import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.png"; // Either import it or remove the project

const projects = [
  {
    image: project1,
    title: "Medical Recommendation System",
    description: "Built with React, Django, and Stripe for online payments.",
    github: "https://github.com/arjunsharma/ecommerce",
    live: "#"
  },
  {
    image: project2,
    title: "Loan Approval Prediction",
    description: "Predictive analytics model using Python and scikit-learn.",
    github: "https://github.com/arjunsharma/ml-model",
    live: "#"
  },
//   Remove this object if you don't have project3 image
  {
    image: project3,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and CSS animations.",
    github: "https://github.com/arjunsharma/portfolio",
    live: "#"
  }
];

const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <h1 className="mywork-title">My Latest Work</h1>
      <div className="mywork-container">
        {projects.map((project, index) => (
          <div key={index} className="mywork-card">
            <img src={project.image} alt={project.title} className="mywork-image" />
            <h2 className="mywork-title-card">{project.title}</h2>
            <p className="mywork-description">{project.description}</p>
            <div className="mywork-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
