import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/nav/home.jsx";
import About from "./components/nav/about.jsx";
import Contact from "./components/nav/Contact.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* //in react we use react router to witch btw tabs here we use switch and
        route from react-router */}
        <Switch>
          {/* // this is exact paath means where we want to start the page */}
          <Route path="/" exact component={Home} />
          {/* //in Route we have to provide the path so whrer we have to go */}
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
