import  React, { Component} from 'react';
import '../../App.css';
import { Redirect } from 'react-router-dom';


const Welcome = () => {
    function  onClickHandle() {
        return <Redirect to='/register'></Redirect>
    }
    return (
        <div className="text">
          <h1>WELCOME TO DAPP</h1>
          <p>Total Users in the system </p>
          <button className="btn" onClick={onClickHandle}>Register</button>
          </div>
    )
}
export default Welcome;