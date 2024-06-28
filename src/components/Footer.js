import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>John Doe</h5>
            <p>123 Main St, City, Country</p>
            <p>+123 456 7890</p>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="col">
            <h5>Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Recent Works</h5>
            <ul>
              <li><a href="/portfolio#project1">Projet 1</a></li>
              <li><a href="/portfolio#project2">Projet 2</a></li>
              <li><a href="/portfolio#project3">Projet 3</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Recent Posts</h5>
            <ul>
              <li><a href="/blog#post1">Post 1</a></li>
              <li><a href="/blog#post2">Post 2</a></li>
              <li><a href="/blog#post3">Post 3</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 John Doe. All Rights Reserved.</p>
          <a href="#top" className="back-to-top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
