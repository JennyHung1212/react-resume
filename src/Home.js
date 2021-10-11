import React from "react";
import "./scss/Home.scss";
// import self from "./image/self.jpg";

import {
  LinkedinOutlined,
  // HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

class Home extends React.Component {
  componentDidMount() {
    const frame = document.querySelector(".home__frame");
    const square = document.querySelector(".home__square");
    window.addEventListener("scroll", () => {
      frame.style.transform =
        "rotate(" + (window.pageYOffset / 50 + 10) + "deg)";
      square.style.transform =
        "rotate(" + (window.pageYOffset / 100 + 255) + "deg)";
    });
  }
  render() {
    return (
      <div className="home" id="home">
        <div className="home__intro">
          <p className="home__name">Hi, I'm</p>
          <p className="home__name">Jenny Hung</p>
          <p className="home__content">
            I'm a frontend developer, a software engineer, an eager learner,
            <br></br> and also an adventurer.
          </p>
          <div className="home__info">
            <div>
              <span style={{ paddingRight: "10px" }}>
                MS, Software Engineering Systems, Northeastern University
              </span>
              <InfoCircleOutlined />
            </div>
            <div>
              <span style={{ paddingRight: "10px" }}>
                <a
                  href="mailto:jennyhung.nchi@gmail.com"
                  style={{ color: "unset" }}
                >
                  jennyhung.nchi@gmail.com
                </a>
              </span>
              <MailOutlined />
            </div>
            <div>
              <span style={{ paddingRight: "10px" }}>(781) 498-9028</span>
              <PhoneOutlined />
            </div>
            <div>
              <span style={{ paddingRight: "10px" }}>
                <a
                  href="https://www.linkedin.com/in/jennyhung-nchi/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://www.linkedin.com/in/jennyhung-nchi/
                </a>
              </span>
              <LinkedinOutlined />
            </div>
          </div>
        </div>
        {/* <div className="home__photo">
          <img src={self} alt=""></img>
        </div> */}
        <div className="home__square"></div>
        <div className="home__frame"></div>
      </div>
    );
  }
}

export default Home;
