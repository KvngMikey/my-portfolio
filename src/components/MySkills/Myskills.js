import React from 'react';
import './Myskills.css';

const Myskills = ({ icon, header }) => {
  return (
    <div className="myskills-wrapper">
      {/* <div className="icon">{icon}</div>
      <div className="header-wrapper">
        <div className="header">{header}</div>
      </div> */}
      <div className="round">
        <div className="icon">{icon}</div>
        <div className="header">{header}</div>
      </div>
    </div>
  );
};

export default Myskills;
