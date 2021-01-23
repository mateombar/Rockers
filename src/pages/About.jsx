import React from "react";
import "./styles/About.css";
function About() {
  return (
    <div className="home_container">
      <div className="home_card">
        <header>
          <h1>Hope you enjoyed my React app</h1>
        </header>
        <section>
          <h4>Im Frontend Developer</h4>
            <li>In October 2019 I started working in a software company, I worked with Vue Js and Firestore for a year</li>
            <li>Now im Frontend Developer, i have ReactJs and VueJs skills</li>
            <li>Im looking to work in a Startup because in the future, i would like create one</li>
            <li>Take a look at my LinkedIn profile or my Github repositories, below in the footer you can find them</li>
        </section>
      </div>
    </div>
  );
}

export default About;
