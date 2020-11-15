import React, { Component } from "react";
import Man from "../photos/Ellipse 4.png";
import "./about.css";

import Footer from "./Footer";

export default class about extends Component {
  render() {
    return (
      <div>
        <div className="info">
          <div className="infotxt">
            <h1>Hi. I'm Karthik!</h1>
            <p>
              Hi i'm Karthik Thammisetty and i'm under gradute in computer
              science.I am very much intrested in Technology.My main goal is
              that to develop the optimum solutons in order to create the best
              experience in technology
            </p>
          </div>
          <img src={Man} alt="" />
        </div>
        "
        <div className="myskills">
          <h1>My Skills</h1>
          <div className="skills">
            <div className="lang">
              <h3>Reactjs</h3>
              <h3>Javascript</h3>
              <h3>Html</h3>
              <h3>BootStrap</h3>
            </div>
            <div className="designtools">
              <h3>Material UI</h3>
              <h3>AdobeXd</h3>
              <h3>Figma</h3>
              <h3>Css</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
