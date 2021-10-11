import React from "react";
import "./scss/Skills.scss";

import { Progress } from "antd";
import "antd/dist/antd.css";

const Skills = () => {
  const skillsContent = {
    frontend: [
      { level: 90, skill: "HTML" },
      { level: 90, skill: "CSS / SCSS / Stylus" },
      { level: 80, skill: "JavaScript" },
      { level: 75, skill: "jQuery" },
      { level: 85, skill: "Element UI" },
      { level: 70, skill: "Ant Design" },
      { level: 70, skill: "Bootstrap" },
      { level: 40, skill: "Tailwind CSS" },
      { level: 80, skill: "Vue.js / Vuex" },
      { level: 40, skill: "React.js" },
      { level: 60, skill: "Flask" },
      { level: 50, skill: "Electron" },
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
      "Python",
      "JAVA",
      "R",
      "OOD",
      "RWD",
      "D3.js / ECharts",
      "Git / Bitbucket",
      "CircleCI",
      "Jest (unit test)",
      "TestCafe (end-to-end test)",
      "Django",
      "MySQL",
      "NoSQL",
    ],
    language: ["English (fluent)", "Chinese (native)"],
  };
  return (
    <div className="skills" id="skills">
      <div className="section-title skills-title">
        <span>Skills</span>
      </div>
      <div
        className="section-title-bg"
        style={{
          right: "-220px",
          transform: "rotate(90deg)",
        }}
      >
        skills
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
