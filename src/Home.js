import React from "react";
import "./scss/Home.scss";
// import self from "./image/self.jpg";

import {
  // LinkedinOutlined,
  // HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="home__intro">
          <p className="home__name">Hi, I'm</p>
          <p className="home__name">Jenny Hung</p>
          <p className="home__content">
            I'm a frontend developer, a mobile app developer, an eager learner,
            and also an adventurer.
          </p>
          <div className="home__info">
            <div>
              <span style={{ paddingRight: "10px" }}>
                Information Management, BA, National Taiwan University
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
              <span style={{ paddingRight: "10px" }}>+886 988-775-407</span>
              <PhoneOutlined />
            </div>
            {/* <div>
              <span style={{ paddingRight: "10px" }}>
                145 Newbury Ave, Quincy, MA 02171
              </span>
              <HomeOutlined />
            </div> */}
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
