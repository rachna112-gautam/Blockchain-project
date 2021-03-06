import React from "react";
import './../../App.css';
const Register = () => {
  return (
    <div class="card text-center card-dark bg-dark" >
      <div class="card-header text-center"></div>
      <div class="card-body text-center col-sm-6">
        <h5 class="card-title">Welcome to blockchain.com</h5>
        <p class="card-text">
        Check the ID of your invitee before proceeding further...
        </p>
        <input class="form-control ml-10 mr-10" type="email" placeholder="Enter Your Mail"></input>
        <a href="#" class="btn btn-secondary mt-4">
         OK
        </a>
      </div>
      <div class="card-footer text-muted">You are using the Referral ID : <input placeholder="Referral ID" required type="number"  min="1" max="100"/></div>
    </div>
  );
};

export default Register;
