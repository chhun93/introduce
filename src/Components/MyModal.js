import { Component } from "react";

import "../Styles/MyModal.css";

export default class MyModal extends Component {
  render() {
    return (
      <div className="myModal">
        <div id="myModal-left">myModal-left</div>
        <div id="myModal-right">myModal-right</div>
      </div>
    );
  }
}
