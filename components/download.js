import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import resume from "../styles/download.css";

const ResumeDownload = () => {
  return (
    <div className="resume-download-container">
      <a
        href="/path-to-your-resume.pdf" // Replace with the actual path to your PDF
        download="your-resume.pdf"
        className="download-link"
      >
        <FontAwesomeIcon icon={faFileDownload} className="download-icon" />
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
