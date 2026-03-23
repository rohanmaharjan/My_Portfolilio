import React from "react";
import vegScan from "./assets/vegscan.png"
import honeyPot from "./assets/Honey.png"
import dictionary from "./assets/dictionary.png"

const Project = () => {
    return(
        <div id="projects">
            <h1>My Projects</h1>
            <img src={vegScan} alt="Vegscan" />
            <p>Vegscan</p>
            <img src={honeyPot} alt="Honeypot"  />
            <p>HoneyPot System</p>
            <img src={dictionary} alt="Dictionary" />
            <p>English Dictionary</p>
        </div>
    )
}
export default Project;