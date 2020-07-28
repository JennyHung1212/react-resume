import React from "react";
import "./scss/AboutMe.scss";

// import { Menu } from "antd";
// import "antd/dist/antd.css";

const AboutMe = () => {
  return (
    <div className="about-me" id="about_me">
      <div className="section-title">
        <span>About Me</span>
      </div>
      <div
        className="section-title-bg"
        style={{
          lineHeight: "70px",
          right: "10px",
          textAlign: "right",
          marginTop: "-150px",
        }}
      >
        about<br></br>me
      </div>
      <div className="about-me__content">
        I'm a frontend developer, a mobile app developer, a eager learner, and
        also an adventurer, specialized in data visualization and smooth
        animations. I urge myself to ensure the stability of programs, and bring
        better user experiences in every developing task. I have the brain as a
        programmer, the eyes as a UI designer, and the mindset of the users.
      </div>
    </div>
  );
};

export default AboutMe;
