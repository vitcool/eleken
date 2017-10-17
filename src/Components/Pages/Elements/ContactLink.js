import React from "react";
import ReactDOM from "react-dom";

export default class ContactLink extends React.Component {
  render() {
    return (
      <div className="link-contact list-group-item">
          <div className="image-contact">
            <img src={this.props.link.src} />
          </div>
          <div className="link-name-contact">
            <span>{this.props.link.name}</span>
          </div>
        <a href={this.props.link.href} className="btn-link-contact btn btn-primary" role="button">Visit page ></a>
      </div>
    );
  }
}
