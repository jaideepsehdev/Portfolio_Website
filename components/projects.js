import React, { useState, useEffect } from "react";
import styles from "../styles/projects.css";
import Image from "next/image";
import Project1 from "../components/project1.js";
import Project2 from "../components/project2.js";

const Projects = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const listenScrollEvent = () => {
    if (window.scrollY > 400 && window.scrollY < 900) {
      setBackgroundColor("gradient-purple");
    }
    if (window.scrollY > 900 && window.scrollY < 1200) {
      setBackgroundColor("gradient-yellow");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    // Clean up the scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <section
      id="resume"
      className={`resumesection ${backgroundColor}`} // Use the background color class
    >
      <div className="ResumeImage">
        <Project1 />
        <Project2 />
      </div>
    </section>
  );
};

export default Projects;
