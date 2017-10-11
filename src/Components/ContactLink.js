import React from "react";
import ReactDOM from "react-dom";

export default class ContactLink extends React.Component {
  render() {
    return (
      <div className="link-contact">
        <a href={this.props.link.href}>
          <img src={this.props.link.src} />
          <div className="link-name-contact">
            <span>{this.props.link.name}</span>
          </div>
        </a>
      </div>
    );
  }
}
