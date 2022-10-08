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
          <h2 className="job">A Top-notch Frontend Software Developer.</h2>
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

        <div className="content--wrapper">
          <span>Content</span>
          <ul>
            <li>
              <a href="#home">1 ------ Home</a>
            </li>
            <li>
              <a href="#about">2 ------ About</a>
            </li>
            <li>
              <a href="#skills">3 ------ Skills</a>
            </li>
            <li>
              <a href="#projects">4 ------ Projects</a>
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
