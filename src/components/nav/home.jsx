import React, { Component } from "react";
import "./home.css";
import Man from "../photos/Ellipse 4.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import MCard from "../container/Card";

export default class home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="card">
            <img src={Man} alt="" />
          </div>
        </div>
        {/* <footer>
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
        </footer> */}
      </div>
    );
  }
}
