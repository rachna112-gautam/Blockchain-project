import React, { Component } from "react";
import Logo from "../Header/Logo";
import UserId from "../User/UserId/UserId";
import "./User.css";

export default class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="header">
          <Logo></Logo>
        </div>
        <div className="userInfo">
          <div className="userId">
          <UserId></UserId>
          </div>
          
          <div className="levelsInfo">
            <h1>levels</h1>
          </div>
        </div>
      </div>
    );
  }
}
