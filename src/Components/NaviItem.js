import { Component } from "react";

import "../Styles/NaviItem.css";

export default class NavItem extends Component {
  scrollDown=(itemName)=>{
    const naviItem = document.getElementById("navi");
    const naviHeight = naviItem.getBoundingClientRect();

    const item = document.getElementById(itemName);
    const location = item.getBoundingClientRect();
    var diffItemNavi = location.top-naviHeight.height;
    if(diffItemNavi<0)
      diffItemNavi = 0;
    window.scrollTo({top:diffItemNavi, behavior:'smooth'})
  }
  render() {
    const {item, itemName} = this.props;
    const name = itemName.toString();

    return (
      <a
        className="nav-link"
        id={"nav"+name}
        onClick={()=>this.scrollDown(name)}
      >
        {item}
      </a>
    );
  }
}
