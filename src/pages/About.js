import React from 'react';
import './About.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="aboutme-wrapper">
      <h2 className="about-header"> About Me </h2>
      <div className="about-body">
        Michael Ariwaodo is a passionate and goal driven Software Engineer whose
        interest is in using technology to build solutions to solve real world
        problems.
      </div>
      <div>
        <a
          href="https://linkedin.com/in/michael-ariwaodo-7b65521b1"
          target="blank"
          className="icon-tag linkedin-tag"
        >
          <FaLinkedin className="linkedin" />
        </a>
        <a
          href="https://twitter.com/_mykhael"
          target="blank"
          className="icon-tag"
        >
          <FaTwitter className="twitter" />
        </a>
        <a
          href="https://github.com/kvngMikey"
          target="blank"
          className="icon-tag github-tag"
        >
          <FaGithub className="github" />
        </a>
      </div>
      <button className="btn btn-primary whatsapp-btn">
        <a
          href="https://api.whatsapp.com/send?phone=08105137183"
          target="blank"
          className="whatsapp-btn-text"
        >
          Text Me
        </a>
      </button>
    </div>
  );
};

export default About;
