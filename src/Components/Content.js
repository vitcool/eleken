import React from "react";
import ReadMe from "./Pages/ReadMe";
import Calendar from "./Pages/Calendar";
import ContactUs from "./Pages/ContactUs";
import { contactLinks } from "./../Mocks/contactLinks.json";
import { Route, Redirect } from "react-router-dom";

export default class Content extends React.Component {
  render() {
    return (
      <div className="content-page">
        <Route exact path="/readme" component={ReadMe} />
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
