import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper mx-auto">
      <span className="h-rule"></span>

      <div className="name-link">
        <div>
          <span className="copy-icon">&copy;</span>
          <span className="username">MICHAEL ARIWAODO 2022</span>
        </div>

        <div className="links">
          <div className="git-linked">
            <span className="copy-icon">&#8599;</span>
            <a
              href="https://github.com/kvngmikey"
              target="blank"
              className="link-name"
            >
              Github
            </a>
          </div>
          <div className="git-linked">
            <span className="copy-icon">&#8599;</span>
            <a
              href="https://linkedin.com/in/michael-ariwaodo-7b65521b1"
              target="blank"
              className="link-name"
            >
              Linkedin
            </a>
          </div>
          <div>
            <span className="copy-icon">&#8599;</span>
            <a
              href="https://twitter.com/_mykhael"
              target="blank"
              className="link-name"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
