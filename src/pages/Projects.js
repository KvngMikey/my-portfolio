import React from 'react';
import MyProjects from '../components/MyProjects/MyProjects';
import './Projects.css';
import figmaland from '../components/assets/figmaland-pic.png';

const Projects = () => {
  return (
    <div id="projects">
      <span className="work-header">Work</span>
      <div className="container mx-auto">
        <div className="projects-wrapper">
          <MyProjects
            proTitle="myDiceGame"
            stack="Javascript"
            demoBtn="https://mike-dice-game.vercel.app/"
            githubBtn="https://github.com/kvngmikey/myDiceGame"
          />
          <MyProjects
            proTitle="bankWithMe"
            stack="Javascript"
            demoBtn="https://my-bank-app-nu.vercel.app"
            githubBtn="https://github.com/KvngMikey/MyBankApp"
          />
          <MyProjects
            proTitle="Events"
            stack="Angular, Typescript"
            demoBtn="https://my-events-app.vercel.app"
            githubBtn="https://github.com/KvngMikey/Events-APP"
          />
          <MyProjects
            proTitle="Guess"
            stack="Javascript"
            demoBtn="https://guess-number-xyz.vercel.app"
            githubBtn="https://github.com/KvngMikey/GuessMyNumberGame"
          />
          <MyProjects
            proTitle="mikeFolio"
            stack="React"
            githubBtn="https://github.com/KvngMikey/my-portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
