import { Component } from "react";
import "../Styles/LoadImg.css";

export default class LoadImg extends Component {
  isOddNumId = (id) => {
    var ret = "even";
    if ((id & 1) === 1) ret = "odd";
    return ret;
  };
  render() {
    const { what, id, path } = this.props;

    const whatItem = (
      <img
        src={process.env.PUBLIC_URL + "/Images/" + path + ".png"}
        className={what + "_img " + what + "_" + this.isOddNumId(id)}
        id={path + "_" + id}
        alt={path}
        key={path + "_" + id}
      />
    );
    
    return <div className={what}>{whatItem}</div>;
  }
}
