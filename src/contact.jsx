import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./contact.css";

const handleSubmit = (e) => {
  e.preventDefault();
  // Backend removed — just show a placeholder message for now
  alert("Form submission is disabled until an email service is added.");
};

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-left">
        <h2>Get In Touch</h2>
        <p>
          Feel free to get in touch with me if you have any questions or comments. <br />
          Thrilled to begin our professional journey together!
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> +977-9742875914
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> rohanmhj9@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Location:</strong> Harisiddhi-28, Lalitpur
          </li>
          <li className="social-icons">
            <a href="https://github.com/RohanMaharjan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/rohan-maharjan-09404827" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/rohan_mhj/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-right">
        <h2>Message Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Name" required />
          <input type="email" name="email" placeholder="Enter Email" required />
          <textarea name="message" placeholder="Write Message" rows="5" required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
