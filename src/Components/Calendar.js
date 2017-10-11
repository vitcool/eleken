import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      difference: 0
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }
  handleChangeStart(date) {
    var self = this;
    this.setState(
      {
        startDate: date
      },
      function() {
        console.log("start after", this.state.startDate);
        self.recalculateDifference(self);
      }
    );
  }
  handleChangeEnd(date) {
    var self = this;
    this.setState(
      {
        endDate: date
      },
      function() {
        console.log("end after", this.state.endDate);
        self.recalculateDifference(self);
      }
    );
  }
  recalculateDifference(self){
    self.setState({
        difference: moment
          .duration(this.state.endDate.diff(this.state.startDate))
          .asDays().toFixed()
      });
  }
  render() {
    return (
      <div>
        <div className="title-item">Calendar</div>
        <div className="pickers-board-calendar">
          <div className="datepicker-wrapper-calendar">
            <div className="datepicher-title-calendar">Departure</div>
            <DatePicker
              selected={this.state.startDate}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeStart}
            />
          </div>
          <div className="datepicker-wrapper-calendar">
            <div className="datepicher-title-calendar">Arriving</div>
            <DatePicker
              selected={this.state.endDate}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd}
            />
          </div>
          <div>{this.state.difference}</div>
        </div>
      </div>
    );
  }
}
