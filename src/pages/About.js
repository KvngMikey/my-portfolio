import React from 'react';
import './About.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="aboutme-wrapper" id="about">
      <h2 className="about-header"> About </h2>
      <div className="about-body">
        I'm a passionate and goal driven Software Engineer whose interest is in
        using technology to build solutions to solve real world problems.
      </div>
      <div>
        {/* <a
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
        </a> */}
      </div>
      <div className="whatsapp-btn">
        <a
          href="https://api.whatsapp.com/send?phone=08105137183"
          target="blank"
          className="whatsapp-btn-text"
        >
          Text Me
        </a>
      </div>
    </div>
  );
};

export default About;
