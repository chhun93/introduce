import { Component } from "react";

import descr from "./description_dummy";
import "../Styles/Description.css";

export default class Description extends Component {
  render() {
    const { skillSet, path } = this.props;
    const arrDataContents = descr.map((item) => {
      if (item.name === path) {
        return item;
      }
    });
    let itemObj = "";
    for (var i in arrDataContents) {
      if (arrDataContents[i] !== undefined) {
        itemObj = arrDataContents[i];
        break;
      }
    }
    return (
      <div className="description">
        {skillSet}
        <div>
          <li>{itemObj.period}</li>
          <li>{itemObj.content}</li>
          <li>
            LINK :{" "}
            <a href={itemObj.address} target="_blank" rel="noopener noreferrer">
              {itemObj.name}
            </a>
          </li>
        </div>
      </div>
    );
  }
}
