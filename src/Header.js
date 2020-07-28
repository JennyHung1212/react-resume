import React from "react";
import "./scss/Header.scss";

import { Menu } from "antd";
import "antd/dist/antd.css";

class Header extends React.Component {
  state = {
    current: "aboutMe",
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="top-nav"
      >
        <Menu.Item key="home">
          <a href="#home">HOME</a>
        </Menu.Item>
        <Menu.Item key="aboutMe">
          <a href="#about_me">ABOUT ME</a>
        </Menu.Item>
        <Menu.Item key="skills">
          <a href="#skills">SKILLS</a>
        </Menu.Item>
        <Menu.Item key="experience">
          <a href="#experiences">EXPERIENCES</a>
        </Menu.Item>
        <Menu.Item key="project">
          <a href="#projects">PROJECTS</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
