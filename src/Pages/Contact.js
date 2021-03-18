import { Component } from "react";

import MyModal from "../Components/MyModal";
import "../Styles/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="up-on-scroll">
        <div id="contact">
          <MyModal />
        </div>
      </div>
    );
  }
}
