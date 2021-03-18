import { Component } from "react";
import * as ScrollDown from "./ScrollDown";

import "../Styles/NaviItem.css";

export default class NavItem extends Component {
  render() {
    const { item, itemName } = this.props;
    const name = itemName.toString();

    return (
      <p
        className="nav-link yellow underline"
        id={"nav" + name}
        onClick={() => ScrollDown.ByItem(name)}
      >
        {item}
      </p>
    );
  }
}
