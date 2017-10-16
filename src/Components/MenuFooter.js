import React from "react";
import MenuItem from "./MenuItem";

export default class MenuBox extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <div className="copyright-footer">
          <span>&copy; 2017 Something</span>
        </div>
        <div className="menu-box">
          <div className="menu-item-wrapper">
            <span>Terms</span>
          </div>
          <div className="menu-item-wrapper">
            <span>Privacy</span>
          </div>
          <div className="menu-item-wrapper">
            <span>Security</span>
          </div>
          <div className="menu-item-wrapper">
            <span>Status</span>
          </div>
          <div className="menu-item-wrapper">
            <span>Help</span>
          </div>
          <div className="menu-item-wrapper">
            <span>Contact</span>
          </div>
        </div>
      </div>
    );
  }
}
