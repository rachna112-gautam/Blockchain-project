import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Header/Logo';
import Language from './components/Header/Languages';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import "./App.css";


import Web3 from "web3";
import MLM from "./contracts/MLM.json";


class App extends Component{

    async componentWillMount() {
      await this.loadWeb3();
      await this.loadBlockchainData();
    }
  
    async loadWeb3() {
      
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
   state = {
     totalUsers:null
   }
    async loadBlockchainData() {
      try{
       
      const web3 = window.web3;
      // Load account
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      
      const networkId = await web3.eth.net.getId();
      const networkData = MLM.networks[networkId];
      if (networkData) {
        const mlm = new web3.eth.Contract(MLM.abi, networkData.address);
        const totalUsers = await mlm.methods.getTotalUsers().call();
        console.log(totalUsers);
        this.setState({ mlm });
        this.setState({totalUsers : totalUsers});
        
      } else {
        window.alert(
          "MLM contract not deployed to detected network."
        );
      }
    }
      catch(e){
        console.log(e);
        console.log("you have an error");
      }
    }
    async register(referralId,entryFees){
      this.setState({ loading: true });
      console.log(this.state.mlm);
      console.log(this.state.mlm.methods.totalUsers.call());
      this.state.mlm.methods.register(referralId).send({from:this.state.account,value:entryFees})
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
      })
    }
    constructor(props){
      super(props);
      this.register = this.register.bind(this);
    }
   
  render(){
 
  return (

    <div className="main">
      
       <Logo></Logo>

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
    <p>Total Users in the system {this.state.totalUsers}</p>
        <button className="btn btn-outline-secondary">Get Started</button>
        <input type= "text" name="Id" onChange = {(event)=>{this.setState({Id:event.target.value})}}></input>
        <button className="btn btn-outline-secondary" onClick={(event) => {
          event.preventDefault()
          this.register(this.state.Id,Web3.utils.toWei("0.01","ether"));
        }}
        >Register
        </button>
    </div>
        </div>

    </div>
  );
    }
}

export default App;