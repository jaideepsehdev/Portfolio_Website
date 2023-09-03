import React from "react";
import mainhome from "../styles/mainhome.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const MainHome = () => {
  const [text] = useTypewriter({
    words: ["Jaideep", "a Student"],
    loop: {},
  });

  return (
    <section id="mainhome" className="mainhomesection">
      <div className="dots"></div>
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
      <div className="line line4"></div>
      <div className="line line5"></div>
      <div className="line line6"></div>
      <div className="line line7"></div>

      <div className="Name">Jaideep Singh</div>

      <div className="first">
        <h1 className="first-text">
          {" "}
          I am
          <span> {text}</span>
          <Cursor />
        </h1>
      </div>
    </section>
  );
};

export default MainHome;
