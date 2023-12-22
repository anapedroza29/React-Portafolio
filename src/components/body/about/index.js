import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import Type from "./Type"

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There! &#x1F44B; I'm
         <br /> <span className="info-name">Ana Pedroza </span>
          <div className="type">
                <Type />
              </div>
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
