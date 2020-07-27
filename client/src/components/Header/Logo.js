import React, { Component } from "react";
import "./Logo.css";
import SettingsIcon from "@material-ui/icons/Settings";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export default class Logo extends Component {
  render() {
    return (
      <div className="header">
          <div className="header__back">
              <Button className="button--back">
              <KeyboardBackspaceIcon  className="icon--back" />
              </Button>
          
          </div>

          <div>
              <SearchIcon className="icon--search"></SearchIcon>
              
          </div>
          <p>search User...</p>
          
        
        <div className="header__setting">
          <SettingsIcon className="icon--setting" />
        </div>
      </div>
    );
  }
}

// export default Logo;
