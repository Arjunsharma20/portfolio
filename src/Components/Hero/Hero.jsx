import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={profile_img} alt="Profile" className="rounded-image" />
      <h1>
        <span>Hi, I'm Arjun Sharma</span>, <br />a BCA student and aspiring developer
      </h1>
      <p>
        Passionate about Machine Learning and Django, I enjoy building
        intelligent web applications and exploring innovative technologies to
        solve real-world problems.
      </p>

      <div className="hero-action">
        {/* Connect button */}
        <AnchorLink href="#contact" className="hero-connect nav-connect">
          Connect with me
        </AnchorLink>
        {/* Open Resume button */}
        <a
          href="/Arjun_Technical_Resume.pdf"             // file should be in public folder
          target="_blank"               // open in new tab
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
