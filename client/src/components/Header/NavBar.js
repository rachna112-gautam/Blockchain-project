import React, { Component } from "react";
import "./../../App.css";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="how"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          How It Works
        </Link>
        <Link
          activeClass="active"
          to="ad"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Advantages
        </Link>
        <Link
          activeClass="active"
          to="quest"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          FAQs
        </Link>
      </div>
    );
  }
}

// export default Logo;
