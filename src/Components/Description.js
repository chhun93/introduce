import { Component } from "react";

import descr from "./description_dummy";
import "../Styles/Description.css";

export default class Description extends Component {
  render() {
    const { skillSet, path } = this.props;
    const arrDataContent = descr.map((item) => {
      if (item.name === path) {
        return item.content;
      }
    });
    const arrDataAddress = descr.map((item) => {
      if (item.name === path) {
        return item.address;
      }
    });
    const itemContent = arrDataContent;
    const itemAddress = arrDataAddress;
    return (
      <div className="description">
        {skillSet}
        <p>
          {`${itemContent}\n  \n  \n${itemAddress}`}
        </p>
      </div>
    );
  }
}
