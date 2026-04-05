import React from 'react';
import './achievements.css';
import hult from './assets/hult.jpg';
import aws from './assets/aws.jpg';
import lumivya from './assets/lumivya.png';

const Achievements = () => {
  const certificate = [
    { src: hult, caption: "HULT PRIZE AT KhEC" },
    { src: aws, caption: "AWS FUNDAMENTALS WORKSHOP" },
    { src: lumivya, caption: "ONE-Day BOOTCAMP" },
  ];

  return (
    <div className="achievemnets-container" id="achievements">
      <h1>ACHIEVEMENTS</h1>
      <div className='achievements-grid'>
        {certificate.map((proj, index) => (
          <div>
            <img src={proj.src} alt={proj.caption} />
            <hr />
            <p>{proj.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
