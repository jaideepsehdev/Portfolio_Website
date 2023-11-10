import React, { useState } from "react";
import Projects from './Projects';
import styles from "../styles/projectcontainer.css";
import Image from "next/image";
import { color } from "framer-motion";
import pandemic_board_image from '../public/pandemic_board.png';


class ProjectContainer extends React.Component{

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  };

  render() {
    // Define your icons and other data here
    // ...

    return (

      <div className="projectContainer" ref={this.myRef}>
        <Projects
            title="Pandemic Board Game"
            // subtitle="Agile Developer Intern"
            img='/pandemic_board.png'
            caption="May 2023 - Sept 2023"
            backgroundColor={"black"}
        >
            <ul>
                <li>Created a multiplayer custom board game with support for up to five players.</li>
                <li>Featured a dynamic AI player that intelligently made decisions based on an AI class, resulting in an engaging and inclusive gaming experience.</li>          
                <li>Incorporated valuable feedback from 10 active users to add new features and enhance gameplay.</li>
                
                
            </ul>
        </Projects>

        <Projects
            title="Blackfoot Helper"
            // subtitle="Agile Developer Intern"
            img='/blackfoot.gif'
            caption="April 2021 - Sept 2021"
            backgroundColor={"black"}
        >
            <ul>
                <li>Created a python application focused at teaching the endangered native Blackfoot language with only 5000 speakers left</li>
                <li>Utilized speech and auditory synthesis to catalyze the learning process</li>
                <li>Rendered pictures & audio using various python libraries like pygame and numpy</li>
                <li>Tested users knowledge on the language by developing a functional testing mechanism</li>
            </ul>
        </Projects>


        <Projects
            title="Python Interpreter"
            // subtitle="Agile Developer Intern"
            img='/interpreter.png'
            caption="July 2022 - August 2022"
            backgroundColor={"black"}
        >
            <ul>
                <li>Developed a Python interpreter using C++ and an existing framework with a rich set of operators and statements</li>
                <li>Leveraged Object-oriented programming to parse through data and find tokens relationally using a binary tree</li>
                <li>Streamlined calculation of expression trees using short-circuit evaluation and implemented exception-handling</li>
            </ul>
        </Projects>

      </div>
      // <div className="project-container project1">
      //   <div
      //     className={`ImageContainer1 ${isImageClicked ? "blurred active" : ""}`}
      //     onClick={handleImageClick}
      //   >
        //   <Image
        //     src="/board.jpg" // Replace with the actual image URL
        //     layout="fill"
        //     className={"image"}
        //   />
        // </div>
      //   {isImageClicked ? (
      //     <div className={`text-overlay1 ${isImageClicked ? "visible" : ""}`}>
      //       <button className="cross-button1" onClick={handleCrossClick}>
      //         &#10005;
      //       </button>
      //       1) Collaboratively developed a new version of the board game called
      //       “Pandemic” as a part of a group project.
      //       <br /> <br />
      //       2) Created an AI player for our game which could move and compete
      //       according to the set difficulty level. <br /> <br />
      //       3) Increased code modularity by using design patterns such as
      //       Decorator, Abstract Class and Prototype.
      //       <br /> <br />
      //       4) Ensured code maintainability by refactoring code smells and
      //       integrated tests. <br /> <br />
      //     </div>
      //   ) : (
      //     <div className="text-near-image1">Pandemic Board Game</div>
      //   )}
      // </div>
    );
  }
}

export default ProjectContainer;


