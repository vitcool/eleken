import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Flexbox from "flexbox-react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content";


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
            <Footer />
          </Flexbox>
        </Flexbox>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
