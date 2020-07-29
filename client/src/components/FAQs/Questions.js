import React from "react";
import "./FAQ.css";
import Arrow from "./../images/down-arrow.svg";
const Questions = () => {
  return (
    <div className="faq-container" id="quest">
      <div className="title">
        <h2>
          <span>The FAQs</span>
        </h2>
      </div>
      <div className="Quest-card">
        <div className="card">
          <div className="card-heading">
            What is xyz?
            <img src={Arrow} alt="down-arrow" />
          </div>
          <div className="card-content">
            Forsage - international crowdfunding platform for the new generation
            and the first in the history the marketing matrix on a smart
            contract for Ethereum. <br /> It samovolnoy a software algorithm
            performing the function of a distribution of the affiliate
            commissions between members of the community subject to certain
            conditions (matrix marketing plan). Code contract is in the public
            domain. Transaction information can always be viewed at the link
            <a href="https://https://etherchain.org/account/5acc84a3e955Bdd76467d3348077d003f00fFB97">
              etherchain.org
            </a>
            .
          </div>
        </div>
      </div>

      <div className="Quest-card">
        <div className="card">
          <div className="card-heading">
            WHAT IS ETHEREUM?
            <img src={Arrow} alt="down-arrow" />
          </div>
          <div className="card-content">
            Ethereum (ETH) is one of the leading cryptocurrency established in
            2015. While this software environment for market DeFi (decentralized
            Finance), as the blockchain of the cryptocurrency allows you to not
            only keep the transaction history, but also store executable
            software (smart contracts). A huge number of the largest crypto
            companies use this platform.
          </div>
        </div>
      </div>

      <div className="Quest-card">
        <div className="card">
          <div className="card-heading">
            CAN I REGISTER IF I COME TO THE SITE WITHOUT AFFILIATE LINKS?
            <img src={Arrow} alt="down-arrow" />
          </div>
          <div className="card-content">
            Yes. Registration without referral link will put you in command id
            1.
          </div>
        </div>
      </div>

      <div className="Quest-card">
        <div className="card">
          <div className="card-heading">
            WHAT IS DECENTRALIZATION?
            <img src={Arrow} alt="down-arrow" />
          </div>
          <div className="card-content">
            This process of dispersion of authority from Central administration
            to the participants of the process. Unlike a centralized system, all
            decisions are made by consensus of.
          </div>
        </div>
      </div>

      <div className="Quest-card">
        <div className="card">
          <div className="card-heading">
            HOW TO EFFECTIVELY ENGAGE PEOPLE? WHAT IF I DON'T KNOW HOW TO
            INVITE?
            <img src={Arrow} alt="down-arrow" />
          </div>
          <div className="card-content">
            You do not have to impose a participation to someone. Now a lot of
            people are interested in earning online and some are looking for new
            opportunities. They can be found in the social networks of their
            own, or set up an automatic sales funnel and interested people will
            find you. Read more about this in the section “Academy”. Use your
            strengths, watch webinars and ask questions of experienced
            participants of the platform and improve your skills through free
            training in school and success will not keep you waiting. Your
            result depends only on you!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
