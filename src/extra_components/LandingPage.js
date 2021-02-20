import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      {" "}
      <a href="https://www.example.co.uk">
        <div id="btn1" class="button">
          <h1> HOME </h1>{" "}
        </div>{" "}
      </a>
      <a href="https://www.example.co.uk">
        <div id="btn2" className="button">
          <h1> VOTE </h1>{" "}
        </div>{" "}
      </a>
      <a href="https://www.example.co.uk">
        <div id="btn3" className="button">
          <h1> RESULTS </h1>{" "}
        </div>{" "}
      </a>{" "}
      <div className="wrapper">
        <a className="cta" href="#">
          <span> SIGNUP </span> <span></span>{" "}
        </a>{" "}
      </div>
    </div>
  );
};

export default LandingPage;
