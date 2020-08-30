import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import M from "materialize-css";
export default class nav extends Component {
  componentDidMount() {
    M.AutoInit();
    M.Sidenav.init(this.sidenav);
  }
  render() {
    return (
      <div>
        <nav>
          <Switch>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo logo">
                Design.codes
              </a>
              <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>about</Link>
                </li>
                <li>
                  <Link to={"/contact"}>conatct</Link>
                </li>
              </ul>
            </div>
          </Switch>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">about</a>
          </li>
          <li>
            <a href="Contact">contact</a>
          </li>
        </ul>
      </div>
    );
  }
}
