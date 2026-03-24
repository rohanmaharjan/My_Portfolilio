import React, { useState } from "react";
import vegScan from "./assets/vegscan.png";
import honeyPot from "./assets/Honey.png";
import dictionary from "./assets/dictionary.png";
import gymPic from "./assets/gym.png";
import "./project.css";

const Project = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const projects = [
    { src: vegScan, caption: "Vegscan" },
    { src: honeyPot, caption: "HoneyPot System" },
    { src: dictionary, caption: "English Dictionary" },
    { src: gymPic, caption: "Gym Management System" },
  ];

  return (
    <div className="project-container" id="projects">
      <h1>Major Projects</h1>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => setZoomedImage(proj.src)}
          >
            <img src={proj.src} alt={proj.caption} />
            <hr />
            <p>{proj.caption}</p>
          </div>
        ))}
      </div>


      {zoomedImage && (
        <div className="overlay" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed" />
        </div>
      )}

      <h2>Minor Projects</h2>
      <p>Student Management System</p>
      <p>Attendance Management System</p>
      <p>Online Cycle Store</p>
      <p>Online Quiz System</p>

      <h2>Ongoing Project</h2>
      <p>To-DO List</p>
    </div>
  );
};

export default Project;
