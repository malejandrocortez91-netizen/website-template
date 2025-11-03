import React from 'react';
import './FeaturedProjects.css';

const projectsData = [
  {
    title: 'Modern Office Complex',
    location: 'New York, NY',
    imageUrl: '/images/project-office.jpg'
  },
  {
    title: 'Luxury Residential Tower',
    location: 'Miami, FL',
    imageUrl: '/images/project-residential.jpg'
  },
  {
    title: 'State-of-the-Art Warehouse',
    location: 'Chicago, IL',
    imageUrl: '/images/project-warehouse.jpg'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.location}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#projects" className="view-all-btn">View All Projects</a>
    </section>
  );
};

export default FeaturedProjects;
