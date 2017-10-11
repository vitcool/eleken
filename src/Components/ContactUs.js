import React from "react";
import ReactDOM from "react-dom";
import ContactLink from "./ContactLink.js";


export default class ContactUs extends React.Component {
  render() {
    return (
      <div>
        Contact us
        <div className="links-contact">
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
