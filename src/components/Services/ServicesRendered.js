import React from 'react';
import './ServicesRendered.css';

const ServicesRendered = ({ image, title, body }) => {
  return (
    <div className="service-rendered-wrapper">
      <img src={image} className="picture" alt="training" />

      <div className="title-wrapper">
        <div className="title"> {title} </div>
        <div className="body"> {body} </div>
      </div>
    </div>
  );
};

export default ServicesRendered;
