import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact">
        <p>
          I am very much intrested to work in web development and technology
          stuff so we can connect through social media soo you can contact me
          their
        </p>
        <div className="icons">
          <a href="https://www.instagram.com/design.codes/" external>
            <InstagramIcon style={{ color: "black" }}>Instagram</InstagramIcon>
          </a>

          <a href="https://twitter.com/harthik7799">
            <TwitterIcon style={{ color: "black" }}>Twitter</TwitterIcon>
          </a>
          <a href="https://github.com/kar7779">
            <GithubIcon style={{ color: "black" }}>Github</GithubIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
