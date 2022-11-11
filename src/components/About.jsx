import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="aboutWrapper">
      <div className="aboutDiv">
        <p>
        Keen IT graduate with knowledge in Information Technology. 
        With a second-class upper in Electronics and Computer Engineering 
        from Lagos State University. I have a working knowledge of  
        programming and web development, and I am eager to pursue a 
        career in the software development industry. I have a range of 
        skill sets which would be beneficial to any employer within that 
        space. </p>
        <div >
          <h3>Here are a few  technologies I can work with:</h3>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
