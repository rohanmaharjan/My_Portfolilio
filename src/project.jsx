import React from "react";
import vegScan from "./assets/vegscan.png"
import honeyPot from "./assets/Honey.png"
import dictionary from "./assets/dictionary.png"
import "./project.css"

const Project = () => {
    return(
        <div className="project-container" id="projects">
            <h1>My Projects</h1>
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
                
            </div>
                
        </div>
    )
}
export default Project;