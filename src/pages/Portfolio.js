import React from 'react';
import { Card } from 'react-bootstrap';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="card-deck">
          <Card>
            <Card.Img variant="top" src="/path/to/project1.jpg" />
            <Card.Body>
              <Card.Title>Fresh Food</Card.Title>
              <Card.Text>Réalisation d'un site avec commande en ligne</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="/path/to/project2.jpg" />
            <Card.Body>
              <Card.Title>Restaurant Akira</Card.Title>
              <Card.Text>Réalisaton d'un site vitrine</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="/path/to/project3.jpg" />
            <Card.Body>
              <Card.Title>Espace bien-être</Card.Title>
              <Card.Text>Réalisation d'un site vitrine pour un praticien de bien-être</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

