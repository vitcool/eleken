import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Components/Main";
import Calendar from "./Components/Calendar";
import ContactUs from "./Components/ContactUs";
import Flexbox from "flexbox-react";
import {contactLinks} from "./Mocks/contactLinks.json";
require("./../dist/style/style.scss");

class App extends React.Component {
  render() {
    return (
      <Router>
        <Flexbox flexDirection="column" minHeight="100vh">
          <Flexbox element="header" height="60px" className="main-header">
            <div className="personal-info">
              <div className="circle"><span>JS</span></div>
              <div className="personal-info-name">John Smith</div>
            </div>
            <div className="menu-box">
              <div className="menu-item-wrapper">
                <Link className="menu-item" to="/">
                  <span>How it works</span>
                </Link>
              </div>
              <div className="menu-item-wrapper">
                <Link className="menu-item" to="/calendar">
                  <span>Calendar</span>
                </Link>
              </div>
              <div className="menu-item-wrapper">
                <Link className="menu-item" to="/contactUs">
                  <span> Contact Us</span>
                </Link>
              </div>
            </div>
          </Flexbox>

          <Flexbox flexGrow={1}>
            <div className="content-page">
              <Route exact path="/" component={Main} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/contactUs" render={function(props){
                  return <ContactUs data = {contactLinks}/>
              }}/>
            </div>
          </Flexbox>

          <Flexbox element="footer" height="40px" className="main-footer">
            <div className="menu-box">
              <div className="menu-item-wrapper">
                <span>Terms</span>
              </div>
              <div className="menu-item-wrapper">
                <span>Privacy</span>
              </div>
              <div className="menu-item-wrapper">
                <span>Security</span>
              </div>
              <div className="menu-item-wrapper">
                <span>Status</span>
              </div>
              <div className="menu-item-wrapper">
                <span>Help</span>
              </div>
              <div className="menu-item-wrapper">
                <span>Contact</span>
              </div>
            </div>
          </Flexbox>
        </Flexbox>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
