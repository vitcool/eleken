import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import $ from "jquery";

import "react-datepicker/dist/react-datepicker.css";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      difference: 0,
      showError: false
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }
  handleChangeStart(date){
    let self = this;
    this.setState(
      {
        startDate: date
      },
      () => {
        self.recalculateDifference(self);
      }
    );
  }
  handleChangeEnd(date) {
    let self = this;
    this.setState(
      {
        endDate: date
      },
      () => {
        self.recalculateDifference(self);
      }
    );
  }
  recalculateDifference(self) {
    let diff = moment
      .duration(this.state.endDate.diff(this.state.startDate))
      .asDays()
      .toFixed();
    let negative = diff < 0;
    this.showHideError(self, negative);
    self.setState({
      difference: Math.abs(diff)
    });
  }
  clickCalendar(index) {
    $(".react-datepicker-wrapper input")[index].click();
  }
  showHideError(self, val) {
    self.setState({
      showError: val
    });
  }
  render() {
    return (
      <div>
        <div className="title-item">Calendar</div>
        <div className="pickers-board-calendar">
          <div
            className="datepicker-wrapper-calendar departure-calendar"
            onClick={this.clickCalendar.bind(this, 0)}
          >
            <div className="datepicher-title-calendar">Departure</div>
            <DatePicker
              label="Departure"
              selected={this.state.startDate}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeStart}
            />
            <div className="calendar-triangle-right" />
          </div>
          <div
            className="datepicker-wrapper-calendar arrive-date-calendar"
            onClick={this.clickCalendar.bind(this, 1)}
          >
            <div className="datepicher-title-calendar">Arriving</div>
            <DatePicker
              label="Arriving"
              selected={this.state.endDate}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd}
            />
          </div>
          <div className="datepicker-result-calendar">
            <div className="datepicher-title-calendar">Days</div>
            <div className="date-result-calendar">{this.state.difference}</div>
          </div>
        </div>
        <div
          className={
            this.state.showError ? "error-calendar" : "error-calendah hidden"
          }
        >
          Arriving should be later then departure
        </div>
      </div>
    );
  }
}
