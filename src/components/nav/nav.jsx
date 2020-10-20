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
              <h1>Designcodes</h1>
              <ul>
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
      </div>
    );
  }
}
