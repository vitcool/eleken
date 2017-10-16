import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default class MenuItem extends React.Component {
  render() {
    return (
      <Link className="menu-item" to={this.props.href}>
        <span>{this.props.name}</span>
      </Link>
    );
  }
}
