import React, { Component } from "react";
import useState from "react";
import "./UserId.css";
import eth from "./1.png";

export default class UserId extends Component {
  render() {
    return (
      <div className="Id--main">
        <div className="id">
          <div>
            <img src={eth} className="id__image"></img>
          </div>
          <div className="id__no">
            <h1>ID 1</h1>
            <h1>$1234</h1>
          </div>
        </div>
        <div className="id__ethValue">
              <h3>1234 Eth</h3>
        </div>
      </div>
    );
  }
}
