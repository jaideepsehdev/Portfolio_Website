import React, { useState } from "react";
import styles from "../styles/project1.css";
import Image from "next/image";
import { color } from "framer-motion";

const Project1 = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };
  const handleCrossClick = () => {
    setIsImageClicked(false);
  };

  return (
    <div className="project-container project1">
      <div
        className={`ImageContainer1 ${isImageClicked ? "blurred active" : ""}`}
        onClick={handleImageClick}
      >
        <Image
          src="/board.jpg" // Replace with the actual image URL
          layout="fill"
          className={"image"}
        />
      </div>
      {isImageClicked ? (
        <div className={`text-overlay1 ${isImageClicked ? "visible" : ""}`}>
          <button className="cross-button1" onClick={handleCrossClick}>
            &#10005;
          </button>
          1) Collaboratively developed a new version of the board game called
          “Pandemic” as a part of a group project.
          <br /> <br />
          2) Created an AI player for our game which could move and compete
          according to the set difficulty level. <br /> <br />
          3) Increased code modularity by using design patterns such as
          Decorator, Abstract Class and Prototype.
          <br /> <br />
          4) Ensured code maintainability by refactoring code smells and
          integrated tests. <br /> <br />
        </div>
      ) : (
        <div className="text-near-image1">Pandemic Board Game</div>
      )}
    </div>
  );
};

export default Project1;
