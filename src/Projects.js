import React from "react";
import "./scss/Projects.scss";

import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import owlsomePatent from "./image/owlsome-patent.jpg";
import eKeeper from "./image/eKeeper.jpg";
import eKeeperApp from "./image/eKeeper-app.jpg";
import owlsomeTech from "./image/owlsome-tech.jpg";
import resume from "./image/resume.jpg";
import personal from "./image/personal-website.jpg";
import whoscall from "./image/whoscall.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Owlsome Patents",
      subtitle: "Company's project",
      content:
        "A cloud-based computation engine that allows users to search, download, and categorize patents, providing computation results based on different research scenarios and indicators.",
      subContent:
        "Tech Skill: Vue.js, Vuex, Stylus, Data Visualization (ECharts), Element UI, Jest, TestCafe, Babel, OAuth2 (Google, Linkedin Login APIs), Third-party payment (Paypal, ECPay)",
      link: "https://patent.owlsome.tech/",
      img: owlsomePatent,
    },
    {
      title: "eKeeper",
      subtitle: "Company's project",
      content:
        "A role-based access control system that adapted MQTT as a communication protocol for transferring data from the sensor to server, " +
        "collecting, and displaying data in real-time of nearly 600 elevators and escalators across Taiwan and Singapore. " +
        "By converting thousands of raw data sent from MQTT server to statistic numbers with analytical insights, managers are allowed to monitor the condition of elevators and controlled the schedule of repair and maintenance.",
      subContent:
        "Teck Skill: Vue.js, Vuex, CSS, Data Visualization (ECharts), Server-sent events, Element UI, Ant Design, Bootstrap, TestCafe",
      link: "",
      img: eKeeper,
    },
    {
      title: "eKeeper app",
      subtitle: "Company's project",
      content:
        "Mobile version of eKeeper. Provided real-time notification features by Firebase Messaging.",
      subContent:
        "Tech Skill: Flutter, Dart, Data Visualization (charts_flutter)",
      link: "",
      img: eKeeperApp,
    },
    {
      title: "Owlsome Tech Official Website",
      subtitle: "Company's project",
      content:
        "A static, responsive website with sliders, parallax effect and animations.",
      subContent: "Teck Skill: jQuery, Stylus, Gulp, RWD",
      link: "https://www.owlsome.tech/",
      img: owlsomeTech,
    },
    {
      title: "Online Resume",
      subtitle: "Personal Project",
      content:
        "A platform where I can demonstrate the best of myself. If you are reading this, I want to give you a big thank you for spending time knowing me.",
      subContent: "Tech Skill: React.js, SCSS, Ant Design, AWS S3",
      link: "https://github.com/JennyHung1212/react-resume",
      img: resume,
    },
    {
      title: "Personal Website",
      subtitle: "Personal Project",
      content:
        "When I was an exchange student in Singapore, being away from my friends and family, I had lots of alone time. " +
        "That's when I relized the best way to kill time is to learn a new skill. I decided to learned Vue.js and built a website from scratch with it where I could upload my weekly diaries. " +
        "I won't say that the sense of accomplishment of building my own website made me want to become a frontend developer, but it did give me a direction in career path.",
      subContent: "Teck Skill: Vue.js, SCSS, GitHub Pages, Babel",
      link: "https://www.jennyhung.tw/#/life-in-sg",
      img: personal,
    },
    {
      title: "Whoscall Promotion Site",
      subtitle: "Company's project",
      content:
        "A promotion site for Whoscall app with the form submission feature.",
      subContent: "JavaScript, jQuery, HTML, SCSS, Babel, AWS S3",
      link: "http://events.whoscall.com/2018IAPevent/",
      img: whoscall,
    },
    {
      title: "Dr. Wells scheduling system",
      subtitle: "School project",
      content:
        "Participated in an industry-academia cooperation project and wrote an auto-scheduling system built on top of genetic algorithm with the knowledge of Operations Research." +
        "As one of the member of a six-student group, I mainly responsible for reviewing client needs and frontend development.",
      subContent: "Django, JavaScript, CSS, Python",
      link: "",
      img:
        "https://images.cakeresume.com/76340e/4c171098-1f16-444d-a7b4-39cb2aa5bd13.jpg",
    },
  ];
  return (
    <div className="projects" id="projects">
      <div className="section-title">
        <span>Projects</span>
      </div>
      <div
        className="section-title-bg"
        style={{ color: "#ECF0F1", top: "-185px", right: 0 }}
      >
        projects
      </div>
      <div className="projects-wrapper">
        {projects.map((o, idx) => (
          <div className="projects-card" key={idx}>
            <div
              className="projects-card__img"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)),url(${o.img})`,
              }}
            >
              <div className="projects-card__title">
                <span>{o.title}</span>
              </div>
              <div className="projects-card__subtitle">
                <span>{o.subtitle}</span>
              </div>
            </div>
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Collapse.Panel>
                <div className="projects-card__content">
                  <p>{o.content}</p>
                  <p>{o.subContent}</p>
                  <p>
                    {o.link.length ? (
                      <a href={o.link} target="blank">
                        Demo
                      </a>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </Collapse.Panel>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
