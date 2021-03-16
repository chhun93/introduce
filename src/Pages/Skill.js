import { Component } from "react";

import "../Styles/Skill.css";

export default class Skill extends Component {
  render() {
    const skillItems = [
      "/Images/frame_Express.png",
      "/Images/frame_Net.png",
      "/Images/frame_NodeJs.png",
      "/Images/frame_React.png",
      "/Images/frame_Vb.png",
      "/Images/language_C.png",
      "/Images/language_Cs.png",
      "/Images/language_Cpp.png",
      "/Images/language_Cpp.png",
      "/Images/language_CssHtml.png",
      "/Images/language_Js.png",
    ];
    const skillItem = skillItems.map((skill) => (
      <img src={process.env.PUBLIC_URL + skill} className="img" alt="??"/>
    ));
    return (
      <div className="skill">
        skill
        {skillItem}
      </div>
    );
  }
}
