import React from 'react';
import { FiLink, FiCode } from 'react-icons/fi';
import './MyProjects.css';

const MyProjects = ({ desc, proTitle, stack, githubBtn, demoBtn }) => {
  return (
    <div className="myprojects-wrapper">
      <div className="grid-item">
        <div>
          <div className="desc-text">{desc}</div>
          <div className="project-title">{proTitle}</div>
          <div className="stack-text">{stack}</div>
        </div>

        <div>
          <a href={demoBtn} target="blank" className="a-tag first-tag">
            <FiLink className="tag-icon" />
            <span className="tag-text">Live</span>
          </a>

          <a href={githubBtn} target="blank" className="a-tag">
            <FiCode className="tag-icon" />
            <span className="tag-text">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
