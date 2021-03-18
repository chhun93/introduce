import { Component } from "react";
import { CircleHalf } from "react-bootstrap-icons";

import NaviItem from "./NaviItem";
import "../Styles/Navi.css";

export default class Navi extends Component {
  render() {
    return (
      <div className="up-on-scroll">
        <div className="navi" id="navi">
          <div className="naviLeft">
            <NaviItem item="CHHUN" itemName="ch" />
          </div>
          <div className="naviRight">
            <NaviItem item="INTRO" itemName="intro" />
            <NaviItem item="SKILL" itemName="skill" />
            <NaviItem item="EXPERIMENT" itemName="experiment" />
            <NaviItem item="CONTACT" itemName="contact" />
            <NaviItem item={<CircleHalf />} itemName="reverse" />
          </div>
        </div>
      </div>
    );
  }
}
