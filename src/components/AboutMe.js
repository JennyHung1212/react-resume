import React from "react";
import "../scss/AboutMe.scss";
import Header from "./Header";

import { connect } from "react-redux";
import { setCurrentMenu } from "../redux/actions";

class AboutMe extends React.Component {
  componentDidMount() {
    const aboutMe = document.getElementById("about_me");

    window.addEventListener("scroll", () => {
      const { top, left } = aboutMe.getBoundingClientRect();

      if (
        top >= 0 &&
        left >= 0 &&
        top <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        this.props.setCurrentMenu("aboutMe");
      }
    });
  }
  render() {
    return (
      <div className="about-me" id="about_me">
        <Header />
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
          <p>
            Hi, I'm Jenny Hung, a software engineer with 3-year experience. I'll
            graduate with my master's degree in Software Engineering Systems in
            May 2023 and am actively looking for positions open for summer 2023.
          </p>
          <p>
            I've worked as a full-time and part-time frontend engineer for
            almost three years. I'm passionate about building user-friendly,
            neat, smooth, and interactive websites. My specialty includes data
            visualization, responsive web design, Model View Controller (MVC)
            methodology, integration of third-party APIs, SEO, and modern web
            frameworks, including Vue.js and React.js. And then, I decided that
            it was time to broaden my skill sets and advance my career path. So
            I studied Software Engineer Systems, Master of Science at
            Northeastern University, and interned as a full-stack engineer at
            Boston's promising startup Acho. So now I also have relational and
            non-relational databases, Node.js, Express.js, Streams API, OAuth
            integration, and Socket API in my pocket.
          </p>
          <p>
            Apart from the technical skills, I've obtained the ability to
            communicate and work with all kinds of people from different
            cultural and professional backgrounds over the years during my
            exchange years and internships. I may not always be the best
            developer on the team, but I'll always be the one that people want
            to work with and that I can guarantee.
          </p>
          <p>
            I have the brain of a programmer, the eyes of a UI designer, and the
            mindset of the users, and I am super fortunate that I have the
            skills to build services that can solve users' problems and make
            this world a better place.
          </p>
        </div>
      </div>
    );
  }
}

export default connect(null, { setCurrentMenu })(AboutMe);
