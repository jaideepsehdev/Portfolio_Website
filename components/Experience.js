import React from "react";
import Experience from "../styles/Experience.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const experience = () => {
  const [text] = useTypewriter({
    words: ["Jaideep", "a Student"],
    loop: {},
  });

  return (

    <div className="experience-container">
      <div className="experience-item">
        <h1>Research Assistant</h1>
        <h2>Simon Fraser University <span class ="tab"></span> March 2023 - July 2023</h2>
        <ul>
          <li>Analyzed  data mathematically of approximately 30,000 people to form a statistical relationship between the religious and national identity of Indian citizens.</li>
          <li>Employed data science techniques to analyze the correlation between independent binary and dependent categorical lists</li>
          <li>Visualized and communicated the statistical findings using graphical models, facilitating a clear understanding of the data's patterns and connections.</li>
          <li>Ensured the data's reliability and accuracy by applying statistical tests and methodologies that support its integrity and validity.</li>
        </ul>

        <h2>Languages, Frameworks and Tools: </h2>
        <p> Python | Pyreadstat | Numpy | Matplotlib | Scikit-learn | Pandas | Statsmodel</p>
        <a href="https://drive.google.com/file/d/1yE8fgYrJcPVMv4fhXyvIoKvxjfdtHcdE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="pdf-button">View PDF</a>
        <p>Supervisor name: Ilamdeep Kaur</p>
      </div>


      <div className="experience-item">
      <h1>Research Assistant</h1>
        <h2>Simon Fraser University <span class ="tab"></span> September 2023 - Present</h2>
        <ul>
          <li>Currently working on an innovative research to devise a technology which catalyzes human creativity through the integration of swarm robots and AI.</li>
          <li>Leveraging the capabilities of large language models to generate creative ideas and solutions.</li>
          <li>Responsibilities include implementing machine learning algorithms, literature review and giving presentations about progress and new ideas.</li>
        </ul>

        <h2>Languages, Frameworks and Tools: </h2>
        <p> Python | Javascript | Llama | Swarm Robots | Numpy | Matplotlib | Scikit-learn | Pandas | Statsmodel</p>
        <h2>Link to get an idea about swarm robots: </h2>
        <a href="https://www.youtube.com/watch?v=D-GcfZZV96M" >Watch this video on swarm robots</a>
        <p><br></br>Supervisor name: Timothy Baek</p>
      </div>
    </div>
  );
};

export default experience;
