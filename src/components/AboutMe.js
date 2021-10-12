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
            Hi, I'm Jenny Hung, a frontend developer with 3-year experience.
          </p>
          <p>
            I almost gave up on becoming a programmer until I volunteered as a
            frontend developer in an industry-academia project of a compulsory
            course. I volunteered all for a lame reason, I thought frontend
            tasks would involve less coding compared to backend tasks. I had
            proved myself wrong once the project started, and I learned that
            frontend developing is definitely more than just "coding" as I dug
            deeper into the frontend world.
          </p>
          <p>
            The first feature I built was a calendar-view table with different
            settings listed with checkboxes and dropdown selects in every cell
            for users to choose from according to date. The idea was originally
            to draw and planned on paper, and now it was running on the browser
            and was ACTUALLY doing something! That was truly magical and I knew
            that I have to stick to it, dive deeper, and convert more ideas from
            sketches and drafts to features on web pages.
          </p>
          <p>
            Every time I browse a website, I can't help but start to think: If I
            were the developer, how would I structure and built this page? Would
            this button give a better user experience if it was on the
            right-hand side not on the left-hand side? Or even open the dev
            tools to see if the page works well with different screen sizes.
            (And will be a little bit pleased inwardly if I spot something
            wrong.) I love that I can "see through" the surface of a web page
            and know how it works behind, I love implementing RWD and watch my
            web pages expand or shrink to different sizes and still work well, I
            love that when users give me positive feedback on the features I
            built for them, and I love tackling with complicated UI design and
            receive the "WOW" look from others. Frontend developing is not just
            "coding", frontend developing is about problem solving, creativity,
            perspicacity and is the bridge between users and programmers.
          </p>
          <p>
            My specialty includes data visualization, responsive web design,
            Model View Controller (MVC) methodology, embedding third-party APIs,
            and problem-solving. So far I have JavaScript, jQuery, HTML, CSS,
            Vue.js, Bootstrap, Element UI, Ant Design, and version control under
            my belt. I have also learned Flutter for app development and other
            frontend techniques such as React.js and SEO.
          </p>
          <p>
            I have the brain as a programmer, the eyes as a UI designer, and the
            mindset of the users. And I will always become a better developer
            than yesterday me.
          </p>
        </div>
      </div>
    );
  }
}

export default connect(null, { setCurrentMenu })(AboutMe);
