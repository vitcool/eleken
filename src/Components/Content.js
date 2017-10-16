import React from "react";
import ReadMe from "./ReadMe";
import Calendar from "./Calendar";
import ContactUs from "./ContactUs";
import { contactLinks } from "./../Mocks/contactLinks.json";
import { Route } from "react-router-dom";

export default class Content extends React.Component {
  render() {
    return (
      <div className="content-page">
        <Route exact path="/" component={ReadMe} />
        <Route path="/calendar" component={Calendar} />
        <Route
          path="/contactUs"
          render={function(props) {
            return <ContactUs data={contactLinks} />;
          }}
        />
      </div>
    );
  }
}
