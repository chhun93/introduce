import { Component } from "react";
import * as ScrollDown from "../Components/ScrollDown";

import "../Styles/Intro.css";

export default class Intro extends Component {
  render() {
    return (
      <div className="up-on-scroll">
        <div id="intro">
          <div id="intro-content">
            <div className="introduceName">
              <p className="introduce MyName1">안녕하세요!</p>
              <p className="introduce MyName2">&nbsp;</p>
              <p className="introduce MyName3">이창훈입니다.</p>
              <br />
            </div>
            <div className="introduceMyself">
              <p className="introduce MyName4">꾸준히&nbsp;</p>
              <p className="introduce MyName5">공부하는&nbsp;</p>
              <p className="introduce MyName6">개발자입니다.</p>
            </div>
            <button
              id="goToContact"
              type="button"
              className="btn btn-outline-warning"
              onClick={() => {
                ScrollDown.ByItem("contact");
              }}
            >
              ABOUT ME
            </button>
          </div>
        </div>
      </div>
    );
  }
}
