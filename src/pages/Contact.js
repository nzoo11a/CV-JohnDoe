import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="contact-info">
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon,France</p>
          <p>06 20 30 40 50</p>
          <div id="map"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
