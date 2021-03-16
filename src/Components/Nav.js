import { Component } from "react";
import { CircleHalf } from "react-bootstrap-icons";

import NavItem from "./NavItem";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavItem itemName="이창훈" />

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <NavItem itemName="INTRO" />
            <NavItem itemName="SKILL" />
            <NavItem itemName="CONTACT" />
            <NavItem itemName={<CircleHalf />} />
          </ul>
        </nav>
      </div>
    );
  }
}
