import React, { useState } from 'react';
import './achievements.css';
import hult from './assets/hult.jpg';
import aws from './assets/aws.jpg';
import lumivya from './assets/lumivya.png';

const Achievements = () => {
  const [ zoomedImages, setZoomedImages ] = useState(null);

  const certificate = [
    { src: hult, caption: "HULT PRIZE AT KhEC" },
    { src: aws, caption: "AWS FUNDAMENTALS WORKSHOP" },
    { src: lumivya, caption: "LUMIVYA WORKSHOP" },
  ];

  return (
    <div className="achievements-container" id="achievements">
      <h1>ACHIEVEMENTS</h1>
      <div className='achievements-grid' >
        {certificate.map((proj, index) => (
          <div className='achievements-item' onClick={() => setZoomedImages(proj.src)}>
            <img src={proj.src} alt={proj.caption} />
            <hr />
            <p>{proj.caption}</p>
          </div>
        ))}
      </div>

      {zoomedImages && (
        <div className='overlay' onClick={() => setZoomedImages(null)}>
          <img src={zoomedImages} alt="Zoomed" className='zoomed' />
        </div>
      )}
      
    </div>
  )
}

export default Achievements;
