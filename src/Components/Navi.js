import { Component } from "react";
import { CircleHalf } from "react-bootstrap-icons";

import NaviItem from "./NaviItem";
import "../Styles/Navi.css";

export default class Navi extends Component {
  render() {
    return (
      <div className="navi" id="navi">
        <div className="row">
          <div className="col align-self-start naviLeft">
            <NaviItem item="CHHUN" itemName="ch" />
          </div>
          <div className="col align-self-end naviRight">
            <NaviItem item="INTRO" itemName="intro" />
            <NaviItem item="EXPERIMENT" itemName="experiment" />
            <NaviItem item="CONTACT" itemName="contact" />
            {/* <NaviItem item={<CircleHalf />} itemName="reverse" /> */}
          </div>
        </div>
      </div>
    );
  }
}
