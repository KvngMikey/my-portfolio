import React from 'react';
import training from '../components/assets/training.svg';
import responsive from '../components/assets/responsive-design.svg';
import technical from '../components/assets/technical-writing.svg';
import webapp from '../components/assets/webapp.svg';
import ServicesRendered from '../components/Services/ServicesRendered';
import './Services.css';

const Services = () => {
  return (
    <div className="">
      <h2 className="services-header"> Services I Render: </h2>
      <p className="sub-header">
        Here are some technologies that I have adopted extensively
      </p>

      <div className="services-section">
        <ServicesRendered
          image={training}
          title="Training"
          body="I offer instructor-led training in a way that fits with the way you work."
        />

        <ServicesRendered
          image={technical}
          title="Technical Writing"
          body="I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information."
        />
        <ServicesRendered
          image={responsive}
          title="Responsive Web Design"
          body="I help design mobile-friendly, worldclass websites and web-applications that helps scales your bussiness and helps user experience get better."
        />
        <ServicesRendered
          image={webapp}
          title="Web-App Development"
          body="I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives."
        />
      </div>
    </div>
  );
};

export default Services;
