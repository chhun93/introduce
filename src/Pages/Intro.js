import { Component } from "react";
import * as ScrollDown from "../Components/ScrollDown";

import "../Styles/Intro.css";

export default class Intro extends Component {
  render() {
    return (
      <div className="up-on-scroll">
        <div id="intro">
          <button
            id="goToContact"
            type="button"
            className="btn btn-outline-success"
            onClick={() => {
              ScrollDown.ByItem("contact");
            }}
          >
            ABOUT ME
          </button>
        </div>
      </div>
    );
  }
}
