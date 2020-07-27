import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import "./App.css";
import Container from "./components/Navigations/Container";

class App extends Component{
  render(){
  return (
    <div className="App">

    <Particles
params={{
  "particles": {
      "number": {
      "value": 200,
      "density":{
        enable: true,
        value_area: 1000
      }
      },
      "color": {
          "value": "#ffffff"
      },
      "line_linked": {
          "color": "#ffffff"
      },
      "stroke": {
          "width": 0,
          "color": "#000000"
      },
      "size": {
          "value": 3
      }
  },
  "move": {
    "enable": true,
    "speed": 12,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 1200
    }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          }
      },

      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        }
      }
  },
  "retina_detect": false
}}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: `#17202A `,
      }}
    >

    </Particles>
    <div className="text">
        <h1>WELCOME TO DAPP</h1>
        <button className="btn btn-outline-secondary">Get Started</button>

        </div>
    </div>
  );
    }
}

export default App;
