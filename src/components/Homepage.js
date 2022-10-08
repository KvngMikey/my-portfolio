import React from 'react';
import './Homepage.css';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import Skills from '../pages/Skills';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import pic from '../components/assets/mypic.JPG';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Homepage = () => {
  return (
    <div className="container" id="home">
      <div className="deet-image-wrapper">
        <div className="details-wrapper">
          {/* <div className="greeting">HI THERE</div> */}
          <h3 className="intro">Michael Ariwaodo</h3>
          <h2 className="job">Frontend Software Developer.</h2>
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
              className="icon-tag twitter-tag"
            >
              <FaTwitter className="twitter" />
            </a>
            <a
              href="https://contact.mikeariwaodo@gmail.com"
              target="blank"
              className="icon-tag"
            >
              <MdOutlineMail className="email" />
            </a>
          </div>
        </div>

        <div className="content--wrapper d-none d-md-flex">
          <span>Content</span>
          <ul>
            <li className="d-flex">
              <a href="#home" className="content-tag">
                <span>1</span>
                <span></span>
                <span>Home</span>
              </a>
            </li>
            <li className="d-flex">
              <a href="#about" className="content-tag">
                <span>2</span>
                <span></span>
                <span>About</span>
              </a>
            </li>
            <li className="d-flex">
              <a href="#skills" className="content-tag">
                <span>3</span>
                <span></span>
                <span>Skills</span>
              </a>
            </li>
            <li className="d-flex">
              <a href="#projects" className="content-tag">
                <span>4</span>
                <span></span>
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <About />
      <Skills />
      {/* <Services /> */}
      <Projects />
    </div>
  );
};

export default Homepage;
