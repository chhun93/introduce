import { Component } from "react";

import descr from "./description_dummy";
import "../Styles/Description.css";

export default class Description extends Component {
  render() {
    const { skillSet, path } = this.props;
    const arrData = descr.map((item, index) => {
      if (item.name === path) {
        return (
            <div>{item.name} from {item.content}</div>
        );
      }
    });
    const innerHtmlObject = {
        __html: arrData,
      };
    return (
      <div className="description">
        {skillSet}
        <div dangerouslySetInnerHTML={innerHtmlObject}/>
      </div>
    );
  }
}
