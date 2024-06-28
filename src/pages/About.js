import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>A propos</h1>
        <div className="profile">
          <img src="/path/to/photo.jpg" alt="John Doe" />
          <div className="bio">
            <p>Passioné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF.
            Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.</p>
            <p>Basé a Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur web full stack</p>
            <p>J'accorde une attention particuliere a la quantité du code que j'écris et je respecte les bonnes pratiques du web.</p>
            <div className="skills">
              <h3>Skills</h3>
              <ProgressBar now={90} label="JavaScript" />
              <ProgressBar now={80} label="React" />
              <ProgressBar now={70} label="Node.js" />
              <ProgressBar now={60} label="CSS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;