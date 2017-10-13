import React from "react";
import ReactDOM from "react-dom";
import ReactExpandableListView from "react-expandable-listview";
import { DATA } from "../Mocks/const";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div>Hello, i am app js</div>
        <ReactExpandableListView
          data={DATA}
          headerAttName="headerName"
          itemsAttName="items"
        />
      </div>
    );
  }
}
