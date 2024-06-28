import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <div className="container">
        <h1>Mes services</h1>
        <div className="service-list">
          <div className="service-item">
            <i className="service-icon"></i>
            <h2>UX Design</h2>
            <p>Description</p>
          </div>
          <div className="service-item">
            <i className="service-icon"></i>
            <h2>Développement Web</h2>
            <p>Description</p>
          </div>
          <div className="service-item">
            <i className="service-icon"></i>
            <h2>Réferencement</h2>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
