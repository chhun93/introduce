import { Component } from "react";
import * as ScrollDown from "./ScrollDown";

import "../Styles/NaviItem.css";

export default class NavItem extends Component {
  render() {
    const { item, itemName } = this.props;
    const name = itemName.toString();

    var itemClassName = "";
    if (name === "ch" || name === "reverse") {
      itemClassName = "nav-link";
    } else {
      itemClassName = "nav-link yellow underline";
    }

    return (
      <p
        className={itemClassName}
        id={"nav" + name}
        onClick={() => ScrollDown.ByItem(name)}
      >
        {item}
      </p>
    );
  }
}
