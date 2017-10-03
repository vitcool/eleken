import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Components/Main";
import Calendar from "./Components/Calendar";
import ContactUs from "./Components/ContactUs";
import Flexbox from "flexbox-react";
require("./../dist/style.scss");

class App extends React.Component {
  render() {
    return (
      <Router>
        <Flexbox flexDirection="column" minHeight="100vh">
          <Flexbox element="header" height="100px">
            <ul>
              <li>
                <Link className="menu-item" to="/">Main</Link>
              </li>
              <li>
                <Link className="menu-item" to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link className="menu-item" to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </Flexbox>

          <Flexbox flexGrow={1}>
            <div>
              <Route exact path="/" component={Main} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/contactUs" component={ContactUs} />
            </div>
          </Flexbox>

          <Flexbox element="footer" height="60px">
            Footer
          </Flexbox>
        </Flexbox>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
