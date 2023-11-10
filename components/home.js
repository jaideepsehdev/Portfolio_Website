import React from "react";
import styles from "../styles/home.css";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Iconbar from "../components/iconbar.js";
import ResumeDownload from "../components/download.js";
import about from "../styles/About.css";
import ContactButton from "../components/contact.js";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Jaideep", "a Student"],
    loop: {},
  });

  return (
    <section id="home" className="homesection">
      <Iconbar />
      {/* <ResumeDownload /> */}

      {/* <div className="first">
        <h1 className="first-text">
          {" "}
          I am
          <span> {text}</span>
          <Cursor />
        </h1>
      </div> */}

      <div className="About">
        <h1>About</h1>
      </div>

      <div className="marquee-container">
        <div className="marquee-stationary">
          <span className="marquee-content">Skills:</span>
          <div className="marquee marquee2">
            <span className="marquee-content">Python</span>
            <span className="marquee-content"> C</span>
            <span className="marquee-content">C++</span>
            <span className="marquee-content"> JavaScript</span>
            <span className="marquee-content"> MySQL</span>
            <span className="marquee-content">HTML/CSS</span>
            <span className="marquee-content"> MATLAB</span>
            <span className="marquee-content"> Git</span>
            <span className="marquee-content"> React</span>
            <span className="marquee-content">Numpy</span>
            <span className="marquee-content"> Pygame</span>
          </div>
        </div>
      </div>

      <div className="floating-image-container">
        <Image src="/jaideep_image.jpg" layout="fill" className="image" />
      </div>

      {/* <div className="intersecting-marquees">
        <svg width="100%" height="100">
          <line x1="0" y1="0" x2="100%" y2="100" className="marquee-line1" />
          <line x1="0" y1="100" x2="100%" y2="0" className="marquee-line2" />
        </svg>
      </div> */}

      <div className="about-heading">
        <p>
          {/* A third year computer science student at Simon Fraser University.
          Software development and web development enthusiast. Always keen on
          learning about and using new technology. Currently learning about
          nodeJS, React and computer architecture. Made fun and impactful
          projects like : Blackfoot Helper : This simple application made in
          python helps people learn and hopefully revive the native language
          called "Blackfoot" which is on the verge of extinction with only about
          5000 speakers left. Pharmacy Database : A CRUD application made in C++
          using object oriented programming and efficient searching algorithms
          to manage a database of medicines with ease */}
          HI, I am Jaideep Singh, I am a third year student at Simon Fraser University pursuing a bachelors 
          degree in Computer Science. I am a software development and machine learning enthusiast. I am intrigued
          by the usage of software in all aspects of innovation, therefore I show utmost interest not only in
          software development for phone and computer applications but also in fields like Space Exploration, 
          Robotics and Political Science. This has led me to also join SFU Satellite Club to work on the tracking 
          technology for the High Altitude Balloon Project. I have also worked as a Research Assistant for a Political
          Science master's student at SFU to delve into usage of Computer Science in Political Sentiment Analysis.
          My current endeavor is working as a Research Assistant for Professor Lawrence Kim in Human Computer Interaction.  
        </p>
      </div>
      
    </section>
  );
};

export default Home;
