import { Component } from "react";

import LoadImg from "../Components/LoadImg";
import "../Styles/Experiment.css";

export default class Experiment extends Component {
  render() {
    return (
      <div className="up-on-scroll">
        <div id="experiment">
          <div className="experiment-content">
            <p className="experiments text1">Experiment</p>

            <div className="navis">
              <LoadImg what="work" path="navisAMS" id="0" />
              </div>
              {/* <div className="skill-images">
                <LoadImg what="skill" path="language_C" id="0" />
                <LoadImg what="skill" path="language_Cpp" id="0" />
                <LoadImg what="skill" path="database_Oracle" id="0" />
              </div>
            </div>
            <div className="sds">
              <LoadImg what="work" path="samsungSDS" id="1" />
              <div className="skill-images">
                <LoadImg what="skill" path="language_C" id="1" />
                <LoadImg what="skill" path="language_Cpp" id="1" />
                <LoadImg what="skill" path="database_Oracle" id="1" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
