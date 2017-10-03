import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Components/Main";
import Calendar from "./Components/Calendar";
import ContactUs from "./Components/ContactUs";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Main} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/contactUs" component={ContactUs} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
