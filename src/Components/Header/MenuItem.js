import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

export default class MenuItem extends React.Component {
  render() {
    return (
      <NavLink className="menu-item" activeClassName="active" to={this.props.href}>
        <span>{this.props.name}</span>
      </NavLink>
    );
  }
}
