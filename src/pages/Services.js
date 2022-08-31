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
      <p className="services-sub-header">
        Here are some technologies that I have adopted extensively
      </p>

      <div className="services-section">
        <ServicesRendered
          image={training}
          title="Training"
          body="I offer personalized, hands-on training to prospects, equipping them with the capacity required to perform a specific job."
        />

        <ServicesRendered
          image={technical}
          title="Technical Writing"
          body="I possess good written communication skills and ability to convey complex information through any medium in simple, clear terms; to facilitate the easy transfer and comprehension of information."
        />
        <ServicesRendered
          image={responsive}
          title="Responsive Web Design"
          body="I creatively design applications per world-class standards. These applications are designed to have a flexible form in order to ensure consistency in the delivery of your contents, adaptation to any screen size and a better user experience."
        />
        <ServicesRendered
          image={webapp}
          title="Web-App Development"
          body="As a web-app developer, I write well-designed, testable, efficient and reuseable codes by using the best software development practices. I have 3 years experience optimizing user interaction and experience and improving workflow."
        />
      </div>
    </div>
  );
};

export default Services;
