import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";

export default class about extends Component {
  render() {
    return (
      <div>
        <div className="info">
          <h2>About me</h2>
          <p>
            Hi i'm Karthik Thammisetty and i'm under gradute in computer
            science.I am very much intrested in Technology.My main goal is that
            to develop the optimum solutons in order to create the best
            experience in technology
          </p>
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
        </div>
        <div className="myskills">
          <h2>My Skills</h2>
          <p>
            Apart from my college fundamentals and i self-tought my self
            development of new technologies and i develop the skills which are required for web
            development
          </p>
          <ul className="skills">
            <li>Html</li>
            <li>css</li>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>Bootstrap</li>
            <li>Adboe XD</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    );
  }
}
