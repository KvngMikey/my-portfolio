import React from 'react';
import MyProjects from '../components/MyProjects/MyProjects';
import './Projects.css';
import figmaland from '../components/assets/figmaland-pic.png';

const Projects = () => {
  return (
    <div id="projects">
      <span>Milestones of Projects</span>
      <span>Here are a few projects I’ve worked on.</span>
      <div className="container mx-auto">
        <div className="projects-wrapper">
          <MyProjects
            proTitle="myDiceGame"
            stack="Javascript"
            demoBtn="https://mike-dice-game-kvngmikey.vercel.app/"
            githubBtn="https://github.com/kvngmikey/myDiceGame"
          />
          <MyProjects
            proTitle="FigmaLand"
            githubBtn="https://github.com/kvngmikey/movam-project"
            demoBtn="https://movam-project.vercel.app/"
          />
          <MyProjects
            proTitle="FigmaLand"
            githubBtn="https://github.com/kvngmikey/movam-project"
            demoBtn="https://movam-project.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
