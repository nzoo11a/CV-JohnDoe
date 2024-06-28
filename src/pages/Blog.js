import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css';

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <h1>Blog</h1>
        <div className="card-deck">
          <Card>
            <Card.Img variant="top" src="/path/to/post1.jpg" />
            <Card.Body>
              <Card.Title>Coder son site en HTML/CSS</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="/path/to/post2.jpg" />
            <Card.Body>
              <Card.Title>Vendre ses produits sur le web</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="/path/to/post3.jpg" />
            <Card.Body>
              <Card.Title>Se positionner sur Google</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Blog;
