import { Component } from "react";

import LoadImg from "../Components/LoadImg";
import Description from "../Components/Description";
import "../Styles/Experiment.css";

export default class Experiment extends Component {
  render() {
    return (
      <div className="up-on-scroll">
        <div id="experiment">
          <div className="experiment-content">
            <p className="experiments text1">Experiment</p>

            <div className="navis">
              <a
                href="https://www.navis-ams.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LoadImg what="work" path="navisAMS" id="0" />
              </a>
              <Description skillSet= {<div className="skill-images">
                <LoadImg what="skill" path="language_C" id="0" />
                <LoadImg what="skill" path="language_Cpp" id="0" />
                <LoadImg what="skill" path="database_Oracle" id="0" />
              </div>}
              contentText="navis에 대한 설명입니다. navis에 대한 설명입니다. 
              navis에 대한 설명입니다. navis에 대한 설명입니다. 
              navis에 대한 설명입니다. navis에 대한 설명입니다. "/>
            </div>
            <div className="samsung">
              <Description skillSet={<div className="skill-images">
                <LoadImg what="skill" path="frame_Vb" id="1" />
                <LoadImg what="skill" path="language_Cs" id="1" />
                <LoadImg what="skill" path="database_Oracle" id="1" />
              </div>}
              contentText="samsung에 대한 설명입니다. samsung에 대한 설명입니다. 
              samsung에 대한 설명입니다. samsung에 대한 설명입니다. 
              samsung에 대한 설명입니다. samsung에 대한 설명입니다. "/>
              <a
                href="https://www.samsungsds.com/en/manufacturing/manufacturing.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LoadImg what="work" path="samsungSDS" id="1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
