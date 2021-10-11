import React from "react";
import "./scss/Experiences.scss";

import { Timeline } from "antd";
import "antd/dist/antd.css";

class Experiences extends React.Component {
  state = {
    experiences: [
      {
        name: "Northeastern University (NU), US",
        type: "school",
        year: "2021/09 ~ 2023/05 (expected)",
        position: "MS, Software Engineering Systems",
        content: [
          "<span class='num-icon'>①</span> Courses: Program Structures & Algorithms, Concepts of Object-oriented Design (<span class='highlight-text'>JAVA</span>)",
        ],
      },
      {
        name: "Owlsome Tech, TW",
        type: "company",
        year: "2019/07 ~ present",
        position: "Frontend / App Developer",
        content: [
          "<span class='num-icon'>①</span> Designed and developed the user interface of an online enterprises & talents database system using <span class='highlight-text'>Flask</span> and <span class='highlight-text'>MongoDB</span>. The data of the system includes all the companies registered with the Ministry of Economic Affairs and all the theses in the National Digital Library of Theses and Dissertations.",
          "<span class='num-icon'>②</span> Collaborated with UI/UX designers and programmers to built a cross-platform, role-based, multi-language system " +
            "utilizing <span class='highlight-text'>HTML5, CSS3, Vue.js, Vuex, and Restful APIs</span>",
          "<span class='num-icon'>③</span> Implemented a cross-module asynchronous messaging feature with <span class='highlight-text'>ZeroMQ</span> on <span class='highlight-text'>Linux</span> system",
          "<span class='num-icon'>④</span> Interpreted thousands of data to logical events, and converted raw data to analytical information through pie charts, " +
            "time series line charts, bar charts with <span class='highlight-text'>ECharts</span> to provide statistical insights",
          "<span class='num-icon'>⑤</span> Carried out real-time desktop notification utilizing <span class='highlight-text'>server-sent events (SSE)</span>",
          "<span class='num-icon'>⑥</span> Utilized <span class='highlight-text'>Google maps API</span> to offer the geographical perspective of data",
          "<span class='num-icon'>⑦</span> Embedded <span class='highlight-text'>third-party logins</span> with Linkedin and Google login APIs, and implemented <span class='highlight-text'>online payments</span> via PayPal and ECPay.",
          "<span class='num-icon'>⑧</span> Built an app from scratch using <span class='highlight-text'>Flutter</span>; implemented an instant notification feature with <span class='highlight-text'>Firebase Messaging</span>; " +
            "designed different test cases, and wrote integration tests with <span class='highlight-text'>Flutter Driver</span>.",
          "<span class='num-icon'>⑨</span> Corresponded with PM and team members to allocate users'requirements into different task descriptions according to the hierarchy of needs " +
            "and applied <span class='highlight-text'>JIRA</span> tickets for the task management, <span class='highlight-text'>Circle CI</span>, " +
            "and Bitbucket for <span class='highlight-text'>CI/CD</span> and the <span class='highlight-text'>version control</span>",
        ],
      },
      {
        name: "Singapore University of Technology and Design (SUTD), SG",
        type: "school",
        year: "2019/01 ~ 2019/05",
        position: "Exchange student, Information Systems Technology and Design",
        content: [
          "<span class='num-icon'>①</span> Winner of Temasek Foundation International Leadership Enrichment and Regional Networking Program Award (TFI LEaRN)",
          "<span class='num-icon'>②</span> Received full scholarship",
          "<span class='num-icon'>③</span> Courses: Engineering Systems Architecture, Organisational Processes",
        ],
      },
      {
        name: "Gogolook, TW",
        type: "company",
        year: "2018/04 ~ 2019/01",
        position: "Frontend Engineer Intern",
        content: [
          "<span class='num-icon'>①</span> Implemented UI design by <span class='highlight-text'>jQuery, HTML, CSS</span> to build a responsive promotion website that increased 10% of IAP growth",
          "<span class='num-icon'>②</span> Tracked the traffic and user traces of Whoscall official website with <span class='highlight-text'>Google Analytics</span>",
        ],
      },
      {
        name: "edallianz, SG",
        type: "company",
        year: "2017/11 ~ 2018/02",
        position: "App API / Testing Engineer Intern",
        content: [
          "<span class='num-icon'>①</span> Designed and carry out REST APIs for LeConnect iOS and Android Apps",
        ],
      },
      {
        name: "IBM, TW",
        type: "company",
        year: "2017/07 ~ 2017/08",
        position: "Application Consultant Intern",
        content: [
          "<span class='num-icon'>①</span> Collaborated closely with a cross-functional team to help increase the market share of IBM Watson in Taiwan utilizing qualitative and quantitative research methodologies",
          "<span class='num-icon'>②</span> Worked in an agile team as a QA engineer",
        ],
      },
      {
        name: "National Taiwan University (NTU), TW",
        type: "school",
        year: "2014/09 ~ 2019/06",
        position: "BBA, Information Management",
        content: [
          "<span class='num-icon'>①</span> Vice president of NTU Chorus: Participated in the planning of two concerts and led a group of 120+ members to perform in National Concert Hall",
          "<span class='num-icon'>②</span> Master of ceromonies of the graduation ceromony of the department of Information Management",
          "<span class='num-icon'>③</span> Courses: Program Design (C++), Computer Organization and Structure, Data Structures and Algorithms (C++), Operations Research, Database Management, Computer Networks and Applications, Operations Management, Programming Languages (Haskell), Systems Analysis and Design, Software Development Methods, Introduction to Information Retrieval and Text Mining, Information Economy",
        ],
      },
    ],
    isWideScreen: true,
  };

  checkWidth = () => {
    this.setState({
      isWideScreen: window.matchMedia(`(min-width: 768px)`).matches,
    });
  };

  componentDidMount() {
    this.checkWidth();
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
        <Timeline mode={this.state.isWideScreen ? "alternate" : "left"}>
          {this.state.experiences.map((o, idx) => {
            let position;
            if (this.state.isWideScreen) {
              if (idx % 2) position = "left";
              else position = "right";
            }

            return (
              <Timeline.Item
                key={idx}
                color={"rgb(11, 73, 131)"}
                position={position}
              >
                <div
                  className={
                    o.type === "company"
                      ? "experiences__company"
                      : "experiences__school"
                  }
                >
                  <span>{o.name}</span>
                </div>
                <div
                  className={
                    o.type === "company"
                      ? "experiences__position"
                      : "experiences__degree"
                  }
                >
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
            );
          })}
        </Timeline>
      </div>
    );
  }
}

export default Experiences;
