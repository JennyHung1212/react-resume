import React from "react";
import "./scss/Skills.scss";

import { Progress } from "antd";
import "antd/dist/antd.css";

const Skills = () => {
  const skillsContent = {
    frontend: [
      { level: 90, skill: "HTML" },
      { level: 90, skill: "CSS/SCSS /Stylus" },
      { level: 80, skill: "JavaScript" },
      { level: 75, skill: "jQuery" },
      { level: 85, skill: "Element UI" },
      { level: 70, skill: "Ant Design" },
      { level: 70, skill: "Bootstrap" },
      { level: 75, skill: "Vue.js" },
      { level: 40, skill: "React.js" },
      { level: 50, skill: "Jest" },
    ],
    app: [
      {
        level: 60,
        skill: "Dart",
      },
      {
        level: 60,
        skill: "Flutter",
      },
    ],
    others: [
      "Git",
      "Bitbucket",
      "CircleCI",
      "TestCafe",
      "Babel",
      "R",
      "Vuex",
      "Python",
      "Django",
    ],
    language: ["English (fluent)", "Chinese (native)"],
  };
  return (
    <div className="skills" id="skills">
      <div className="section-title skills-title">
        <span>Skills</span>
      </div>
      <div className="skills-content">
        <div className="skills-content__title">FRONTEND DEVELOPMENT</div>
        <div className="skills-content__items frontend">
          {skillsContent.frontend.map((o, idx) => (
            <Progress
              key={idx}
              type="circle"
              percent={o.level}
              format={() => o.skill}
              strokeLinecap="square"
              strokeWidth="4"
            />
          ))}
        </div>
      </div>
      <div className="skills-content">
        <div className="skills-content__title">APP DEVELOPMENT</div>
        <div className="skills-content__items app">
          {skillsContent.app.map((o, idx) => (
            <Progress
              key={idx}
              type="circle"
              percent={o.level}
              format={() => o.skill}
              strokeLinecap="square"
              strokeWidth="4"
            />
          ))}
        </div>
      </div>
      <div
        className="skills-content"
        style={{ width: "50%", display: "inline-block" }}
      >
        <div className="skills-content__title">OTHERS</div>
        <div className="skills-content__items others">
          {skillsContent.others.map((str, idx) => (
            <span key={idx}>{str}</span>
          ))}
        </div>
      </div>
      <div
        className="skills-content"
        style={{ width: "50%", display: "inline-block" }}
      >
        <div className="skills-content__title">LANGUAGE</div>
        <div className="skills-content__items language">
          {skillsContent.language.map((str, idx) => (
            <p key={idx}>{str}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
