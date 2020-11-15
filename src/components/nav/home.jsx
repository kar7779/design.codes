import React, { Component } from "react";
import "./home.css";
import Man from "../photos/Ellipse 4.png";

import Footer from "./Footer";

export default class home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="card">
            <img src={Man} alt="" />
            <h2>Hi. I'm Karthik!</h2>
            <p>
              I am a <span>web developer </span> & UI designer
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
