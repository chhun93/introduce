import { Component } from "react";

import "../Styles/NaviItem.css";

const isNavItmes = (itemName) => {
  var ret = false;
  if (itemName.substr(0, 1) >= "a" && itemName.substr(0, 1) <= "z") {
    ret = true;
  }
  return ret;
};

export default class NavItem extends Component {
  scrollToTop = (event) => {
    window.scrollTo(100,100);
  };
  componentDidMount = () => {
    var itemName = this.props.itemName.toString().toLowerCase();
    if (isNavItmes(itemName)) {
      if (itemName.substr(0, 1) === "i") {
        console.log(itemName);
      }
    }
  };
  render() {
    return (
      <a
        className="nav-link"
        href="#"
        id={this.props.itemName.toString()}
        onClick={this.scrollToTop()}
      >
        {this.props.itemName}
      </a>
    );
  }
}
