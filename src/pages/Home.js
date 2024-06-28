import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1>John Doe</h1>
        <h2>développeur full stack</h2>
        <button onClick={() => window.location.href='/about'}>En savoir plus</button>
      </div>
    </div>
  );
}

export default Home;
