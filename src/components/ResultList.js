import axios from "axios";
import React, { Component } from "react";
import CountdownTimer from "react-component-countdown-timer";
import "./ResultList.css";

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true,
    };

    return (
      <div id="cont_modal" className="countdown">
        <br />
        <br />
        <h1 style={{ color: "green" }}> Results will be out in: </h1>
        <CountdownTimer {...settings} border responsive />
      </div>
    );
  }
}

export default ResultList;
