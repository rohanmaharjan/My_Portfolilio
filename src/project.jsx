import React from "react";
import vegScan from "./assets/vegscan.png"
import honeyPot from "./assets/Honey.png"
import dictionary from "./assets/dictionary.png"
import gymPic from "./assets/gym.png"
import "./project.css"

const Project = () => {
    return(
        <div className="project-container" id="projects">
            <h1>Major Projects</h1>
            <div className="project-grid">
                <div className="project-item">
                    <img src={vegScan} alt="Vegscan" />
                    <p>Vegscan</p>
                </div>
                
                <div className="project-item">
                    <img src={honeyPot} alt="Honeypot"  />
                    <p>HoneyPot System</p>
                </div>
                
                <div className="project-item">
                    <img src={dictionary} alt="Dictionary" />
                    <p>English Dictionary</p>
                </div>

                <div className="project-item">
                    <img src={gymPic} alt="Gym" />
                    <p>Gym Management System</p>
                </div>
                
            </div>
            <h2>Minor Projects</h2>
            <p>Student Managemnet System</p>
            <p>Attendance Management System</p>
            <p>Online Cycle Store</p>
            <p>Online Quiz System</p>
            <h2>Ongoing Project</h2>
            <p>To-DO List</p>
                
        </div>
    )
}
export default Project;