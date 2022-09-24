import React from "react";
import "../scss/Skills.scss";

import { Progress } from "antd";
import "antd/dist/antd.css";

import { connect } from "react-redux";
import { setCurrentMenu } from "../redux/actions";

const skillsContent = {
  fullstack: [
    { level: 75, skill: "Java" },
    { level: 65, skill: "Spring" },
    { level: 75, skill: "Node.js / Express" },
    { level: 65, skill: "SQL / NoSQL" },
    { level: 50, skill: "AWS" },
    { level: 40, skill: "GCP" },
  ],
  frontend: [
    { level: 90, skill: "HTML" },
    { level: 90, skill: "CSS / SCSS / Stylus" },
    { level: 80, skill: "JavaScript" },
    { level: 75, skill: "TypeScript" },
    { level: 85, skill: "Element UI" },
    { level: 70, skill: "Ant Design" },
    { level: 70, skill: "Bootstrap" },
    { level: 40, skill: "Tailwind CSS" },
    { level: 80, skill: "Vue.js / Vuex" },
    { level: 40, skill: "React.js" },
  ],
  app: [
    { level: 50, skill: "Electron" },
    {
      level: 50,
      skill: "Dart",
    },
    {
      level: 50,
      skill: "Flutter",
    },
  ],
  others: [
    "Python (Flask, Django)",
    "Object-Oriented Design",
    "RWD",
    "D3.js",
    "ECharts",
    "Git / Bitbucket",
    "CircleCI",
    "JUnit",
    "Jest",
    "TestCafe",
    "MySQL",
    "Redis",
    "Streams API",
    "OAuth",
    "Elasticsearch",
  ],
  language: ["English (fluent)", "Chinese (native)"],
};
class Skills extends React.Component {
  render() {
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
          <div className="skills-content__title">FULLSTACK DEVELOPMENT</div>
          <div className="skills-content__items fullstack">
            {skillsContent.fullstack.map((o, idx) => (
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
  }

  componentDidMount() {
    const skills = document.getElementById("skills");

    window.addEventListener("scroll", () => {
      const { top, left } = skills.getBoundingClientRect();

      if (
        top >= 0 &&
        left >= 0 &&
        top <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        this.props.setCurrentMenu("skills");
      }
    });
  }
}

export default connect(null, { setCurrentMenu })(Skills);
