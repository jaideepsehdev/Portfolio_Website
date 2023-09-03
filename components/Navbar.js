import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.css";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        {/* <a className="centerlogo">JDrip's Website</a> */}
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <ScrollLink to="mainhome" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          {/* <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li> */}
          <li>
            <ScrollLink to="home" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="Projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
