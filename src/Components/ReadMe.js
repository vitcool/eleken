import React from "react";
import ReactDOM from "react-dom";
import Collapsible from "react-collapsible";
import { DATA } from "../Mocks/const.js";
import StepSettings from "./StepSettings.js";
export default class ReadMe extends React.Component {
  getTrigger(imgSrc, headerName) {
    return (
      <div>
        <img src={imgSrc} className="image-readme" />
        <div className="header-readme">
          <span>{headerName}</span>
        </div>
      </div>
    );
  }
  render() {
    var data = DATA;
    var self = this;
    return (
      <div>
        <div className="title-item">Read Me</div>
        {data.map(function(link, index) {
          return (
            <Collapsible
              trigger={self.getTrigger(
                data[index].imgSrc,
                data[index].headerName
              )}
              key={index}
            >
              <StepSettings data={data[index]} />
            </Collapsible>
          );
        })}
      </div>
    );
  }
}
