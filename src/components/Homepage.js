import React from 'react';
import './Homepage.css';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import Skills from '../pages/Skills';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import pic from '../components/assets/mypic.JPG';
const Homepage = () => {
  return (
    <div className="container" id="home">
      <div className="deet-image-wrapper">
        <div className="details-wrapper">
          <div className="greeting">HI THERE</div>
          <h3 className="intro">I am Michael Ariwaodo</h3>
          <h2 className="job">
            A Top-notch Software Engineer, Writer and Mentor.{' '}
          </h2>
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

        <div>
          <img src={pic} className="mypic" alt="{mypic}" />
        </div>
      </div>

      <About />
      <Skills />
      <Services />
      <Projects />
    </div>
  );
};

export default Homepage;
