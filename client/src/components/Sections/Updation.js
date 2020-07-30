import React, { Component } from "react";
import "./../../App.css";
class Updation extends Component {
  render() {
    return (
      <div className="update-section">
        <div className="info-section">
        <div className="container">
          <div className="box">
            <div className="icon">01</div>
            <div className="content">
              <h3>All participants</h3>
              <p>
              754 592
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">02</div>
            <div className="content">
              <h3>New the day</h3>
              <p>
              +9787
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">03</div>
            <div className="content">
              <h3>Only earned, ETH</h3>
              <p>
               572 437
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">04</div>
            <div className="content">
              <h3>Earned during the day, USD</h3>
              <p>
              5 004 511
              </p>
            </div>
          </div>
        </div>

        </div>
      </div>
    );
  }
}

export default Updation;
