import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './LegalNotice.css';

function LegalNotice() {
  return (
    <div className="legal-notice">
      <div className="container">
        <h1>Legal Notice</h1>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Site Editor
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>John Doe...</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Site Host
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hosting Company...</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Credits
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Images from <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default LegalNotice;
