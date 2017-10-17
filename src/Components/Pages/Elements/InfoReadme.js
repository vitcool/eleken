import React from "react";
import ReactDOM from "react-dom";

export default class InfoReadme extends React.Component {
  render() {
    return this.props.data.content.map(function(item, index) {
      return (
        <div className="settings-detail-item-readme" key={index}>
          <div className="title-settings-detail-item-readme">
            {item.title}
          </div>
          <div className="text-settings-detail-item-readme"> &nbsp;{item.text}</div>
        </div>
      );
    });
  }
}
