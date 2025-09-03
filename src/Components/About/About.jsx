import React, { useState } from 'react';
import './About.css';
import profile_img from '../../assets/profile.jpg';

const skills = [
  { name: "Machine Learning", level: "80%" },
  { name: "Data Analysis", level: "75%" },
  { name: "Python", level: "90%" },
  { name: "C", level: "85%" },
  { name: "C++", level: "80%" },
  { name: "Java", level: "80%" },
  { name: "Django", level: "85%" },
  { name: "HTML5", level: "95%" },
  { name: "CSS3", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "SQL", level: "80%" },
  { name: "Git & GitHub", level: "85%" },
];

const achievements = [
  { number: "300+", title: "DSA Problems Solved" },
  { number: "10+", title: "Projects Completed" },
  { number: "5+", title: "Certificates Earned" },
  { number: "Hackathons", title: "Participated & Showcased Ideas" },
];

const About = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="about" id="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Arjun Sharma" className="about-image" />
        </div>
        <div className="about-right">
          <p>
            Hi! I'm <strong>Arjun Sharma</strong>, a BCA student passionate about <strong>Machine Learning</strong> and <strong>Django</strong>. 
            I enjoy building intelligent web applications and exploring innovative technologies.
            {readMore && (
              <>
                {" "}I have hands-on experience in Python, Django, React, and SQL databases. 
                I like solving complex problems, creating data-driven solutions, and constantly learning new frameworks.
                I am also interested in AI, NLP, and web automation projects.  
                <br />Outside coding, I enjoy reading tech blogs, exploring AI research papers, and contributing to open-source projects.
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read Less" : "Read More"}
          </button>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <p>{skill.name}</p>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-achievements">
            {achievements.map((achieve, index) => (
              <div key={index} className="about-achievement">
                <h2>{achieve.number}</h2>
                <p>{achieve.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
