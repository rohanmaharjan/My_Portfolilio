import React from "react";
import vegScan from "./assets/vegscan.png"

const Project = () => {
    return(
        <div id="projects">
            <h1>My Projects</h1>
            <img src={vegScan} alt="Profile" className="profile-pic" />
            <p>Vegscan</p>
        </div>
    )
}
export default Project;