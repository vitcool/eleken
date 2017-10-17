import React from "react";
import ReactDOM from "react-dom";

export default class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="personal-info">
        <div className="circle">
          <span>VK</span>
        </div>
        <div className="personal-info-name">Vitalii Kulyk</div>
      </div>
    );
  }
}
