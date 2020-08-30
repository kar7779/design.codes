import React, { Component } from "react";
import Man from "../photos/3426526 1.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import MCard from "../container/Card";

export default class home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="content">
            <h5>I'am Karthik Thammisetty</h5>
            <h4>Designer</h4>
            <h4>Front-End Developer</h4>
            <div className="icons">
              <a href="https://www.instagram.com/design.codes/" external>
                <InstagramIcon style={{ color: "black" }}>
                  Instagram
                </InstagramIcon>
              </a>

              <a href="https://twitter.com/harthik7799">
                <TwitterIcon style={{ color: "black" }}>Twitter</TwitterIcon>
              </a>
              <a href="https://github.com/kar7779">
                <GithubIcon style={{ color: "black" }}>Github</GithubIcon>
              </a>
            </div>{" "}
          </div>
          <img src={Man} alt="" />
        </div>
        <div className="card">
          <MCard />
        </div>
        <footer>
          <div className="icons">
            <a href="https://www.instagram.com/design.codes/" external>
              <InstagramIcon style={{ color: "black" }}>
                Instagram
              </InstagramIcon>
            </a>

            <a href="https://twitter.com/harthik7799">
              <TwitterIcon style={{ color: "black" }}>Twitter</TwitterIcon>
            </a>
            <a href="https://github.com/kar7779">
              <GithubIcon style={{ color: "black" }}>Github</GithubIcon>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
