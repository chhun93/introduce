import { Component } from "react";

import "../Styles/NavItem.css";

export default class NavItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">
          {this.props.itemName}
        </a>
      </li>
    );
  }
}