import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Header/NavBar.js";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Web3 from "web3";
import MLM from "./contracts/MLM.json";
import Home from "./components/Sections/Home";
import Particle from "./Particles";
import About from "./components/Sections/About";
import HowItWork from "./components/Sections/HowItWork";
import Advantage from "./components/Sections/Advantage";
import Questions from './components/FAQs/Questions';

class App extends Component {
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
    totalUsers: null,
  };
  async loadBlockchainData() {
    try {
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
        this.setState({ totalUsers: totalUsers });
      } else {
        window.alert("MLM contract not deployed to detected network.");
      }
    } catch (e) {
      console.log(e);
      console.log("you have an error");
    }
  }
  async register(referralId, entryFees) {
    this.setState({ loading: true });
    console.log(this.state.mlm);
    console.log(this.state.mlm.methods.totalUsers.call());
    this.state.mlm.methods
      .register(referralId)
      .send({ from: this.state.account, value: entryFees })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  render() {
    return (
      <div className="text">
        <NavBar />
        <Particle></Particle>
        <Particle></Particle>
        <Home />
        <Particle></Particle>
        <About />
        <Particle></Particle>
        <Advantage />
        <Particle></Particle>
        <HowItWork />
        <Particle></Particle>

        <Questions />
      </div>
    );
  }
}

export default App;
