import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";
function Footer() {
  return (
    <div className="footercls">
      <div className="about">
        <h1>About me</h1>
        <p>
          i am web Developer and designer From Andhrapradesh ,India.I develop
          custom websites
        </p>
      </div>
      <div className="icons">
        <h1>Follow me</h1>
        <a href="https://www.instagram.com/design.codes/" external>
          <InstagramIcon style={{ color: "white" }}>Instagram</InstagramIcon>
        </a>

        <a href="https://twitter.com/harthik7799">
          <TwitterIcon style={{ color: "white" }}>Twitter</TwitterIcon>
        </a>
        <a href="https://github.com/kar7779">
          <GithubIcon style={{ color: "white" }}>Github</GithubIcon>
        </a>
      </div>
    </div>
  );
}

export default Footer;
