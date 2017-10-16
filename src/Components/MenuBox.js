import React from "react";
import MenuItem from "./MenuItem";

export default class MenuBox extends React.Component {
  render() {
    return (
      <div className="menu-box">
        {this.props.menuItems.map(function(item, index) {
          return (
            <div className="menu-item-wrapper" key={index}>
              <MenuItem href={item.href} name={item.name} />
            </div>
          );
        })}
      </div>
    );
  }
}
