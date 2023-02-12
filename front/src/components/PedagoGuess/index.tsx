import React from "react";
import { NumberFieldValidation, PedagoGuess } from "../../types";
import "./styles.css";

interface PedagoGuessProps {
  data: PedagoGuess;
}

const getNumberFieldClass = (value: NumberFieldValidation) => {
  if (value === "equal") return "square-good";

  return value === "more" ? "square-superior" : "square-inferior";
};

const PedagoGuessItem = (props: PedagoGuessProps) => {
  console.log(props.data);
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
            props.data.isRoleValid ? "square-good" : "square-bad"
          }`}
        >
          <div className="square-content">
            <span>{props.data.role}</span>
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
            props.data.isMainLanguageValid ? "square-good" : "square-bad"
          }`}
        >
          <div className="square-content">
            <span>{props.data.mainLanguage}</span>
          </div>
        </div>
        <div
          className={`square ${
            props.data.isFavoriteIDEValid ? "square-good" : "square-bad"
          }`}
        >
          <div className="square-content">
            <span>{props.data.favoriteIDE}</span>
          </div>
        </div>
        <div
          className={`square ${getNumberFieldClass(
            props.data.isGraduationYearValid
          )}`}
        >
          <div className="square-content">
            <span>{props.data.graduationYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedagoGuessItem;
