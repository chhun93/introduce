import { Component } from "react";

import Navi from "./Navi";
import Intro from "../Pages/Intro";
import Experiment from "../Pages/Experiment";
import ToyProj from "../Pages/ToyProj";
import Contact from "../Pages/Contact";
import Foot from "../Pages/Foot";

import * as ScrollDown from "./ScrollDown";
import "../Styles/App.css";

export default class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", ScrollDown.ByDiff);
    window.scrollTo({ top: 30000 });
    window.scrollTo({ top: 0 });
  }
  render() {
    return (
      <div className="App">
        <Navi />
        <Intro />
        <Experiment />
        <ToyProj/>
        <Contact />
        <Foot />
      </div>
    );
  }
}
