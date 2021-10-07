import React from "react";
import "./scss/Experiences.scss";

import { Timeline } from "antd";
import "antd/dist/antd.css";

class Experiences extends React.Component {
  state = {
    experiences: [
      {
        company: "Owlsome Tech",
        year: "2019/07 ~ present",
        position: "Software Developer",
        content: [
          "<span class='num-icon'>①</span> Corresponded with PM and team members to allocate users'requirements into different task descriptions according to the hierarchy of needs" +
            "and applied <span class='highlight-text'>JIRA</span> tickets for the task management, <span class='highlight-text'>Circle CI</span>," +
            "and Bitbucket for <span class='highlight-text'>CI/CD</span> and the <span class='highlight-text'>version control</span>.",
          "<span class='num-icon'>②</span> Collaborated with UI/UX designers and programmers to built a cross-platform, role-based, multi-language system" +
            "utilizing <span class='highlight-text'>HTML5, CSS3, Vue.js, and ResHul APIs</span>.",
          "<span class='num-icon'>③</span> Interpreted thousands of data to logical events, and converted raw data to analytical information through piec harts," +
            "time series line charts, bar charts with <span class='highlight-text'>ECharts</span> to provide statistical insights.",
          "<span class='num-icon'>④</span> Implemented server-sent event with desktop notification.",
          "<span class='num-icon'>⑤</span> Utilized <span class='highlight-text'>Google maps API</span> to offer the geographical perspective of data",
          "<span class='num-icon'>⑥</span> Embedded <span class='highlight-text'>third-party logins</span> with Linkedin and Google login APIs,and implemented <span class='highlight-text'>online payments</span> via PayPal and ECPay.",
          "<span class='num-icon'>⑦</span> Built an app from scratch using <span class='highlight-text'>Flutter</span>, implementing an instant notification feature with <span class='highlight-text'>Firebase Messaging</span>," +
            "designing different test cases, and writing integration tests with <span class='highlight-text'>Flutter Driver</span>.",
        ],
      },
      {
        company: "Singapore University of Technology and Design (SUTD)",
        year: "2019/01 ~ 2019/05",
        position: "Information Systems Technology and Design Pillar",
        content: [
          "<span class='num-icon'>①</span> Winner of Temasek Founda?on Interna?onal Leadership Enrichment and Regional Networking Program Award.",
          "<span class='num-icon'>②</span> Received full scholarship.",
        ],
      },
      {
        company: "Gogolook",
        year: "2018/04 ~ 2019/01",
        position: "Frontend Engineer Intern",
        content: [
          "<span class='num-icon'>①</span> Implemented UI design by <span class='highlight-text'>jQuery, HTML, CSS</span> to build a responsive promotion website that increased 10% of IAP growth.",
          "<span class='num-icon'>②</span> Tracked the traffic and user traces of Whoscall official website with <span class='highlight-text'>Google Analytics</span>.",
        ],
      },
      {
        company: "edallianz",
        year: "2017/11 ~ 2018/02",
        position: "App API / Testing Engineer Intern",
        content: [
          "<span class='num-icon'>①</span> Designed and carry out REST APIs for LeConnect iOS and Android Apps.",
        ],
      },
      {
        company: "IBM",
        year: "2017/07 ~ 2017/08",
        position: "Application Consultant Intern",
        content: [
          "<span class='num-icon'>①</span> Collaborated closely with a cross-functional team to help increase the market share of IBM Watson in Taiwan utilizing qualitative and quantitative research methodologies.",
          "<span class='num-icon'>②</span> Worked in an agile team as a QA engineer.",
        ],
      },
      {
        company: "National Taiwan University (NTU)",
        year: "2014/09 ~ 2019/06",
        position: "Information Management Bachelor Degree",
        content: [
          "<span class='num-icon'>①</span> Vice president of NTU Chorus and led a group of 120+ students to perform in National Concert Hall twice a year.",
        ],
      },
    ],
    isWideScreen: false,
  };

  checkWidth = () => {
    this.setState({
      isWideScreen: window.matchMedia(`(max-width: 768px)`),
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.checkWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.checkWidth);
  }
  render() {
    return (
      <div className="experiences" id="experiences">
        <div className="section-title">
          <span>Experiences</span>
        </div>
        <div
          className="section-title-bg"
          style={{ color: "#ECF0F1", top: "-125px" }}
        >
          experiences
        </div>
        <Timeline mode={this.state.isWideScreen ? "left" : "alternate"}>
          {this.state.experiences.map((o, idx) => (
            <Timeline.Item key={idx} color={"rgb(11, 73, 131)"}>
              <div className="experiences__company">
                <span>{o.company}</span>
              </div>
              <div className="experiences__position">
                <span>{o.position}</span>
              </div>
              <div className="experiences__year">
                <span>{o.year}</span>
              </div>
              <div className="experiences__content">
                {o.content.map((text, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    );
  }
}

export default Experiences;
