import { Component } from "react";
import { CircleHalf } from "react-bootstrap-icons";

import NaviItem from "./NaviItem";
import "../Styles/Navi.css";

export default class Navi extends Component {
  render() {
    return (
      <div className="up-on-scroll">
        <div className="navi">
          <div className="naviLeft">
            <NaviItem itemName="이창훈" />
          </div>
          <div className="naviRight">
            <NaviItem itemName="INTRO" />
            <NaviItem itemName="SKILL" />
            <NaviItem itemName="CONTACT" />
            <NaviItem itemName={<CircleHalf />} />
          </div>
        </div>
      </div>
    );
  }
}
