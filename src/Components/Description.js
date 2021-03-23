import { Component } from "react";

import "../Styles/Description.css";

export default class Description extends Component {
  render() {
    const { skillSet, contentText, whatWork } = this.props;

    return (<div className="description">
        {skillSet}
        {contentText}
    </div>);
  }
}
