import React from "react";
import MenuBoxFooter from "./MenuBoxFooter";
import Copyright from "./Copyright";
import { menuItemsFooter } from "./../../Mocks/menuItemsFooter.json";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <Copyright />
        <MenuBoxFooter menuItems={menuItemsFooter}/>
      </div>
    );
  }
}
