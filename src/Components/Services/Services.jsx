import React, { useState } from "react";
import "./Services.css";
import { FaLaptopCode, FaRobot, FaDatabase, FaMobileAlt } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",   // updated title
    shortDesc: "Building responsive and dynamic full-stack applications using React, Django, HTML, CSS, and JS.",
    fullDesc: "I create modern, interactive, and fully responsive full-stack web applications. I focus on clean code, performance optimization, and best practices. I also integrate APIs, databases, and user authentication systems for complete solutions."
  },
  {
    icon: <FaRobot />,
    title: "Machine Learning",
    shortDesc: "Designing ML models for data analysis and predictions.",
    fullDesc: "I build ML models using Python and popular libraries like scikit-learn, TensorFlow, and PyTorch. My projects include predictive modeling, classification, regression, and data-driven insights."
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    shortDesc: "Managing SQL and NoSQL databases efficiently.",
    fullDesc: "I design and maintain databases using MySQL, PostgreSQL, and MongoDB. I ensure data consistency, optimize queries, and integrate databases seamlessly with applications."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Design",
    shortDesc: "Ensuring websites work perfectly on mobile devices.",
    fullDesc: "I design responsive layouts and implement mobile-first design principles. I test websites on various screen sizes to guarantee usability and accessibility across devices."
  }
];


const Services = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="services" id="services">
      <h1 className="services-title">My Services</h1>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">
              {expanded === index ? service.fullDesc : service.shortDesc}
            </p>
            <button
              className="read-more-btn"
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              {expanded === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
