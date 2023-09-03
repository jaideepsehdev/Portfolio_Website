import React, { useState } from "react";
import styles from "../styles/project2.css"; // Make sure to create the project2.css file
import Image from "next/image";

const Project2 = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  const handleCrossClick = () => {
    setIsImageClicked(false);
  };

  return (
    <div className="project-container project2">
      <div
        className={`ImageContainer2 ${isImageClicked ? "blurred active" : ""}`}
        onClick={handleImageClick}
      >
        <Image
          src="/board.jpg" // Replace with the actual image URL
          layout="fill"
          className={"image"}
        />
      </div>
      {isImageClicked ? (
        <div className={`text-overlay2 ${isImageClicked ? "visible" : ""}`}>
          <button className="cross-button2" onClick={handleCrossClick}>
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
        <div className="text-near-image2">Pandemic Board Game</div>
      )}
    </div>
  );
};

export default Project2;
