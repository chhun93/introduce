import { Component } from "react";

import descr from "./description_dummy";
import "../Styles/Description.css";

export default class Description extends Component {
  render() {
    const { skillSet, path } = this.props;
    const arrData = descr.map((item, index) => {
      if (item.name === path) {
        return item.content;
      }
    });
    return (
      <div className="description">
        {skillSet}
        <div>
          {arrData}
        </div>
      </div>
    );
  }
}
