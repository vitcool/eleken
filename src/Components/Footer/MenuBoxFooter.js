import React from "react";

export default class MenuBoxFooter extends React.Component {
  render() {
    return (
      <div className="menu-box-footer">
        {this.props.menuItems.map((item, index) => {
          return(
            <div className="menu-item-wrapper" key={index}>
              <span>{item}</span>
            </div>
          )
        }
        )}
        </div>
    )
  }
}
