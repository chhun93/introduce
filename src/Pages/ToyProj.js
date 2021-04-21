import { Component } from "react";

import LoadImg from "../Components/LoadImg";
import Description from "../Components/Description";
import "../Styles/ToyProj.css";


export default class ToyProj extends Component {
    render() {
      return (
        <div className="up-on-scroll">
          <div id="toyProj">
            <div className="toyProj-content">
              <p className="toyProj text1">TOY PROJECT</p>
  
              <div className="toDoList">
                <LoadImg what="work" path="toDoList" id="2" />
                <Description
                  skillSet={
                    <div className="skill-images">
                      <LoadImg what="skill" path="language_Js" id="2" />
                      <LoadImg what="skill" path="language_CssHtml" id="2" />
                      <LoadImg what="skill" path="frame_NodeJs" id="2" />
                      <LoadImg what="skill" path="frame_React" id="2" />
                    </div>
                  }
                  path="to Do List"
                />
              </div>
              <div className="makeMindMap">
                <Description
                  skillSet={
                    <div className="skill-images">
                    <LoadImg what="skill" path="language_Js" id="3" />
                    <LoadImg what="skill" path="language_CssHtml" id="3" />
                    <LoadImg what="skill" path="frame_NodeJs" id="3" />
                    </div>
                  }
                  path="make Mind Map"
                />
                <LoadImg what="work" path="makeMindMap" id="3" />
              </div>              
              <div className="portfolio">
                <LoadImg what="work" path="portfolio" id="2" />
                <Description
                  skillSet={
                    <div className="skill-images">
                      <LoadImg what="skill" path="language_Js" id="2" />
                      <LoadImg what="skill" path="language_CssHtml" id="2" />
                      <LoadImg what="skill" path="frame_NodeJs" id="2" />
                      <LoadImg what="skill" path="frame_React" id="2" />
                    </div>
                  }
                  path="PORTFOLIO"
                />
              </div>
              <div className="chrome-stock">
                <Description
                  skillSet={
                    <div className="skill-images">
                    <LoadImg what="skill" path="language_Js" id="4" />
                    <LoadImg what="skill" path="language_CssHtml" id="4" />
                    </div>
                  }
                  path="chrome-extension(STOCK INFO)"
                />
                <LoadImg what="work" path="stockInfo" id="4" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  