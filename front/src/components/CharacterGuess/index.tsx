import React from "react";
import { HeroGuess, NumberFieldValidation } from "../../types";
import "./styles.css";

interface CharacterGuessProps {
  data: HeroGuess;
}

const getNumberFieldClass = (value: NumberFieldValidation) => {
  if (value === "equal") return "square-good";

  return value === "more" ? "square-superior" : "square-inferior";
};

const CharacterGuess = (props: CharacterGuessProps) => {
  return (
    <div className="classic-answer">
      <div className="square-container">
        <div className="square">
          <div className="square-content">
            <img
              alt="character"
              src={"http://localhost:8080/assets/" + props.data.image}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div
          className={`square ${
            props.data.isGenderValid ? "square-good" : "square-bad"
          }`}
        >
          <div className="square-content">
            <span>{props.data.gender}</span>
          </div>
        </div>
        <div
          className={`square ${
            props.data.isSpeciesValid ? "square-good" : "square-bad"
          }`}
        >
          <div className="square-content">
            <span>{props.data.species}</span>
          </div>
        </div>
        <div
          className={`square ${getNumberFieldClass(props.data.isHeightValid)}`}
        >
          <div className="square-content">
            <span>{props.data.height}</span>
          </div>
        </div>
        <div
          className={`square ${getNumberFieldClass(props.data.isWeightValid)}`}
        >
          <div className="square-content">
            <span>{props.data.weight}</span>
          </div>
        </div>
        <div
          className={`square ${
            props.data.isHairColorValid ? "square-good" : "square-bad"
          }`}
        >
          <div className="square-content">
            <span>{props.data.hairColor}</span>
          </div>
        </div>
        <div
          className={`square ${
            props.data.isSkinColorValid ? "square-good" : "square-bad"
          }`}
        >
          <div className="square-content">
            <span>{props.data.skinColor}</span>
          </div>
        </div>
        <div
          className={`square ${
            props.data.isPublisherValid ? "square-good" : "square-bad"
          }`}
        >
          <div className="square-content">
            <span>{props.data.publisher}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterGuess;
