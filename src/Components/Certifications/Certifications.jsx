import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Udamey",
    year: "2023",
    link: "/Python Certificate.pdf"
  },
  {
    title: "Java Programming",
    issuer: "Simplilearn",
    year: "2025",
    link: "https://example.com/java-certificate"
  },
  {
    title: "SQL & Databases",
    issuer: "Simplilearn",
    year: "2025",
    link: "/SQL_certificate.pdf"
  },
  {
    title: "Full Stack Web Development with Django",
    issuer: "Simplilearn",
    year: "2025",
    link: "/Django full stack development.pdf"
  },
  {
    title: "Machine Learning",
    issuer: "Simplilearn",
    year: "2025",
    link: "https://example.com/ml-certificate"
  },
  {
    title: "Natural Language Processing (NLP)",
    issuer: "Simplilearn",
    year: "2025",
    link: "/NLP Certificate.pdf"
  },
  {
    title: "English Communication Skills",
    issuer: "Simplilearn",
    year: "2025",
    link: "/English.pdf"
  }
];

const Certifications = () => {
  return (
    <div className="certifications" id="certifications">
      <h1 className="cert-title">Certifications</h1>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h2>{cert.title}</h2>
            <p>
              <strong>{cert.issuer}</strong> • {cert.year}
            </p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
