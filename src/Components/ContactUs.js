import React from "react";
import ReactDOM from "react-dom";
import ContactLink from "./ContactLink.js";


export default class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div className="title-item">Contact us</div>
        <div className="links-contact list-group">
          {/* todo go links to separate file with constants! */}
          {this.props.data.map(function(link, index) {
            return (
              <ContactLink
                link={link} key = {index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
