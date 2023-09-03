import React from "react";
import styles from "../styles/home.css";
import Navbar from "../components/Navbar.js";
import About from "../components/About.js";
import Projects from "../components/projects.js";
import Home from "../components/home.js";
import MainHome from "../components/mainhome.js";
import Image from "next/image";

import { Element } from "react-scroll";

const Homepage = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="Navbar">
        <Navbar />
      </div>

      <Element name="mainhome">
        <MainHome />
      </Element>
      <Element name="home">
        <Home />
      </Element>

      <Element name="Projects">
        <Projects />
      </Element>

      {/* <About /> */}
    </div>
  );
};

export default Homepage;
