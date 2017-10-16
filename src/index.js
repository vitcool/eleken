import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import MenuFooter from "./Components/MenuFooter";
import Content from "./Components/Content";
import Flexbox from "flexbox-react";


require("./../dist/style/style.scss");

class App extends React.Component {
  render() {
    return (
      <Router>
        <Flexbox flexDirection="column" minHeight="100vh">
          <Flexbox element="header" height="60px">
            <Header/>
          </Flexbox>
          <Flexbox flexGrow={1}>
            <Content />
          </Flexbox>
          <Flexbox element="footer" height="40px">
            <MenuFooter />
          </Flexbox>
        </Flexbox>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
