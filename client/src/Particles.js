import React from 'react';
import Particles from "react-particles-js";
import './App.css'
const Particle = () => {
    return (
        <div className="App">
        <Particles
                params={{
                    particles: {
                      number: {
                        value: 70,
                        density: {
                          enable: true,
                          value_area: 1000
                        }
                      },
                      color: {
                        value: "#ffffff"
                      },
                      shape: {
                        type: "circle",
                        stroke: {
                          width: 0,
                          color: "#000000"
                        },
                        polygon: {
                          nb_sides: 5
                        },
                        image: {
                          src: "img/github.svg",
                          width: 100,
                          height: 100
                        }
                      },
                      opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                          enable: false,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: false
                        }
                      },
                      size: {
                        value: 5,
                        random: true,
                        anim: {
                          enable: false,
                          speed: 80,
                          size_min: 0.1,
                          sync: false
                        }
                      },
                      line_linked: {
                        enable: false,
                        distance: 300,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 2
                      },
                      move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      }
                    },
                    interactivity: {
                      detect_on: "canvas",
                      events: {
                        onhover: {
                          enable: false,
                          mode: "bubblt"
                        },
                        onclick: {
                          enable: true,
                          mode: "push"
                        },
                        resize: true
                      },
                      modes: {
                        grab: {
                          distance: 300,
                          line_linked: {
                            opacity: 1
                          }
                        },
                        bubble: {
                          distance: 300,
                          size: 80,
                          duration: 2,
                          opacity: 0.8,
                          speed: 3
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4
                        },
                        push: {
                          particles_nb: 4
                        },
                        remove: {
                          particles_nb: 2
                        }
                      }
                    },
                    retina_detect: true
                  }}
                style={{
                  position: "absolute",

                  height: "100vh",
                  width: "100vh",

                }}
              ></Particles>
       </div>
    )
}
export default Particle;