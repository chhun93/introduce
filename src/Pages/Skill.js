import { Component } from "react";

import "../Styles/Skill.css";

export default class Skill extends Component {
  render() {
    const skillItems = [
      { id: 0, path: "/Images/frame_Express.png" },
      { id: 1, path: "/Images/frame_Net.png" },
      { id: 2, path: "/Images/frame_NodeJs.png" },
      { id: 3, path: "/Images/frame_React.png" },
      { id: 4, path: "/Images/frame_Vb.png" },
      { id: 5, path: "/Images/language_C.png" },
      { id: 6, path: "/Images/language_Cs.png" },
      { id: 7, path: "/Images/language_Cpp.png" },
      { id: 8, path: "/Images/language_CssHtml.png" },
      { id: 9, path: "/Images/language_Js.png" },
    ];
    const skillItem = skillItems.map((skill) => (
      <img
        src={process.env.PUBLIC_URL + skill.path}
        className="img"
        alt={skill.id}
        key={skill.id}
      />
    ));
    return (
      <div className="up-on-scroll">
        <div id="skill">
          skill
          {skillItem}
        </div>
      </div>
    );
  }
}
