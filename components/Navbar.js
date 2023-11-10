import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.css";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const handleResumeDownload = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1La4Mn0fCtS9j4lPKEVZbxjXYGCFrz5jd/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'your-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        {/* <a className="centerlogo">JDrip's Website</a> */}
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          {/* <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li> */}
          <li>
            <ScrollLink to="work" smooth={true} duration={500}>
              Work
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="Projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li onClick={handleResumeDownload}>
              Resume
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
