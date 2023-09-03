import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Iconbar from "../styles/iconbar.css";

const IconBar = () => {
  return (
    <div className="icon-bar-container">
      <a href="https://github.com/jaideepsehdev">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/jaideepsehdev">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
    </div>
  );
};

export default IconBar;
