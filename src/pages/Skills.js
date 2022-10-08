import React from 'react';
import Myskills from '../components/MySkills/Myskills';
import { FaCss3 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import {
  FaSass,
  FaAngular,
  FaBootstrap,
  FaHtml5,
  FaJsSquare,
  FaWordpress,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2 className="skills-header">Skills </h2>

      <div className="skills-wrapper">
        <Myskills icon={<FaHtml5 />} header="Html" />
        <Myskills icon={<FaCss3 />} header="Css" />
        <Myskills icon={<FaSass />} header="Scss" />
        <Myskills icon={<FaBootstrap />} header="Bootstrap" />
        <Myskills icon={<FaJsSquare />} header="Javascript" />
        <Myskills icon={<FaReact />} header="React" />
        <Myskills icon={<FaAngular />} header="Angular" />
        <Myskills icon={<FaWordpress />} header="Wordpress" />
        <Myskills icon={<SiTypescript />} header="Typescript" />
      </div>
    </div>
  );
};

export default Skills;
