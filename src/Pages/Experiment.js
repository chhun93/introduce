import { Component } from "react";
import { ArrowDownSquare,ArrowDownSquareFill } from "react-bootstrap-icons";

import "../Styles/Experiment.css";

export default class Experiment extends Component {
  render() {
    return (
      <div className="up-on-scroll">
        <div id="experiment">
          <div className="experiment-content">
            <p className="experiments text1">Experiment</p>
          </div>
        </div>
      </div>
    );
  }
}
