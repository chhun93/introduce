import { Component } from "react";

import Navi from "./Navi";
import Intro from "../Pages/Intro";
import Skill from "../Pages/Skill";
import Contact from "../Pages/Contact";
import Foot from "../Pages/Foot";

import "../Styles/App.css";

const isElementUnder = (element, triggerDiff) => {
  const { top } = element.getBoundingClientRect();
  const { innerHeight } = window;

  return top > innerHeight + (triggerDiff || 0);
};

const handleScroll = () => {
  const naviItem = document.getElementById("navi");
  const naviHeight = naviItem.getBoundingClientRect();
  
  const elements = document.querySelectorAll(".up-on-scroll");
  elements.forEach((element) => {
    if (isElementUnder(element, -20)) {
      element.style.opacity = "0";
      element.style.transform = "translateY("+naviHeight.height.toString()+"px)"
    } else {
      element.style.opacity = "1";
      element.style.transform = "translateY(0px)";
    }
  });
};

export default class App extends Component {
  componentDidMount(){    
    window.addEventListener("scroll", handleScroll);
  }
  render() {
    return (
      <div className="App">
        <Navi />
        <Intro />
        <Skill />
        <Contact />
        <Foot/>
      </div>
    );
  }
}
