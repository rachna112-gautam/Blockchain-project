import React, { Component } from "react";


export default class Logo extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav navbar-nav ml-auto ">
      <li class="nav-item active">
        <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#about">About us<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#work">How it works <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#advantage">Advantages <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}

// export default Logo;