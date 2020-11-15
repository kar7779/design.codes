import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

import "./sidebar.css";

const Nav = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <nav>
        <Switch>
          <div className="nav-wrapper">
            <h1>Designcodes</h1>
            <ul className={open ? "navmenu-active" : "sidebar"}>
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
        <div className="hamburgmenu" onClick={() => setopen(!open)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
