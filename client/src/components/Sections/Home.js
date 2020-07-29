import  React from 'react';
import '../../App.css';



const Home= () => {

    return (

            <div className="home-section" id="home">
            <div className="heading">
                  THE FIRST EVER
            </div>
            <div className="sub-heading">
              100% DECENTRALIZED
            </div>

            <button className="join-btn">Join</button>
            <button className="material-btn">Marketing Material</button>
            <button className="login-btn">Login</button>

             <h2>
               <span>international crowdfunding</span>
               <br />
               the new generation platform

             </h2>

             <div className="content">
             Revolutionary Smart Contract* technology provides decentralized market participants with the ability to directly engage in personal and business transactions.
             <br />
             The xyz Decentralized Matrix Project's Smart Contract is publicly and perpetually available to view on the Ethereum Blockchain.
             </div>

          </div>

    )
}
export default Home;