import { Component } from "react";

import Nav from "./Nav";
import Intro from "../Pages/Intro";
import Skill from "../Pages/Skill";
import Contact from "../Pages/Contact";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Intro/>
        <Skill/>
        <Contact/>
      </div>
    );
  }
}
