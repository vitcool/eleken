import React from "react";
import MenuItem from "./MenuItem";
import PersonalInfo from "./PersonalInfo";
import MenuBox from "./MenuBox";
import { menuItems } from "./../Mocks/menuItems.json";

export default class Header extends React.Component {
  render() {
    return (
      <div className="main-header">
        <PersonalInfo />
        <MenuBox menuItems={menuItems} />
      </div>
    );
  }
}
