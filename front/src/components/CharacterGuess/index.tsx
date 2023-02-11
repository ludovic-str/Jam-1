import React from "react";
import "./styles.css";

const CharacterGuess = () => {
  return (
    <div className="classic-answer">
      <div className="square-container">
        <div className="square">
          <div className="square-content">
            <img
              alt="lol"
              src="https://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/Ashe.png"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="square square-good">
          <div className="square-content">
            <span> Female </span>
          </div>
        </div>
        <div className="square square-good">
          <div className="square-content">
            <span> Female </span>
          </div>
        </div>
        <div className="square square-bad">
          <div className="square-content">
            <span> Female </span>
          </div>
        </div>
        <div className="square square-bad">
          <div className="square-content">
            <span> Female </span>
          </div>
        </div>
        <div className="square square-bad">
          <div className="square-content">
            <span> Female </span>
          </div>
        </div>
        <div className="square square-bad">
          <div className="square-content">
            <span> Female </span>
          </div>
        </div>
        <div className="square square-bad">
          <div className="square-content">
            <span> Female </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterGuess;
