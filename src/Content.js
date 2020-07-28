import React from "react";
import "./scss/Content.scss";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <AboutMe />
        <Skills />
        <Experiences />
        <Projects />
      </div>
    );
  }
}

export default Content;
