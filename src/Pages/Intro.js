import { Component } from "react";

import "../Styles/Intro.css";

export default class Intro extends Component {

  render() {
    return (
      <div className="up-on-scroll">
        <div id="intro">
          <button type="button" className="btn btn-outline-success">
            ABOUT ME
          </button>
        </div>
      </div>
    );
  }
}