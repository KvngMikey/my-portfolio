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
import master from '../components/assets/master-level.svg';
import intermediate from '../components/assets/intermediate-level.svg';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-header"> My Skills </h2>
      <p className="sub-header"> Here are a few skills I possess </p>

      <div className="skills-wrapper">
        <Myskills icon={<FaHtml5 />} header="Html" level={master} />
        <Myskills icon={<FaCss3 />} header="Css" level={master} />
        <Myskills icon={<FaSass />} header="Scss" level={master} />
        <Myskills icon={<FaBootstrap />} header="Bootstrap" level={master} />
        <Myskills
          icon={<FaJsSquare />}
          header="Javascript"
          level={intermediate}
        />
        <Myskills icon={<FaReact />} header="React" level={intermediate} />
        <Myskills icon={<FaAngular />} header="Angular" level={master} />
        <Myskills
          icon={<FaWordpress />}
          header="Wordpress"
          level={intermediate}
        />
        <Myskills
          icon={<SiTypescript />}
          header="Typescript"
          level={intermediate}
        />
      </div>
    </div>
  );
};

export default Skills;
