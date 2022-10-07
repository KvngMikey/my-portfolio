import React from 'react';
import './Myskills.css';

const Myskills = ({ icon, header, level }) => {
  return (
    <div className="myskills-wrapper">
      <div className="icon">{icon}</div>
      <div className="header-wrapper">
        <div className="header">{header}</div>
        <img src={level} className="level" alt="" />
      </div>
    </div>
  );
};

export default Myskills;
