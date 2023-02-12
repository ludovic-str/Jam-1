import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Autocomplete } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SendIcon from "@mui/icons-material/Send";
import LoopIcon from "@mui/icons-material/Loop";

import "./styles.css";
import { toast } from "react-toastify";

import { Hero, HeroGuess, NumberFieldValidation } from "../../types";
import { fetchAllHeros, fetchRandomHero } from "../../api/hero";
import CharacterGuess from "../../components/CharacterGuess";
import GuessCategories from "../../components/GuessCategories";

const GuessCharacter = () => {
  const [guess, setGuess] = useState<string>("");
  const [herosList, setHeroList] = useState<Hero[]>([]);
  const [hero, setHero] = useState<Hero | null>(null);
  const [guesses, setGuesses] = useState<HeroGuess[]>([]);
  const [isReroll, setIsReroll] = useState<boolean>(false);

  useEffect(() => {
    setIsReroll(false);
    const fetchHeroList = async () => {
      const heroListRes = await fetchAllHeros();
      const heroRes = await fetchRandomHero();
      console.log(heroRes);

      if (heroListRes) setHeroList(heroListRes);

      if (heroRes) setHero(heroRes);
    };

    fetchHeroList();
  }, [isReroll]);

  const navigate = useNavigate();

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const handleMenuClick = () => {
    navigate("/");
  };

  const handleRerollClick = () => {
    setIsReroll(true);
    setGuesses([]);
  };

  const getNumberFieldValidation = (
    value: number,
    guess: number
  ): NumberFieldValidation => {
    if (value === guess) return "equal";

    return value > guess ? "more" : "less";
  };

  const handleGuess = () => {
    const heroFound = herosList.find((el) => el.name === guess);
    console.log(guess);
    if (guess.length !== 0 && heroFound !== undefined && hero !== null) {
      const heroGuess: HeroGuess = {
        image: heroFound.image,
        gender: heroFound.gender,
        isGenderValid: heroFound.gender === hero.gender,
        species: heroFound.race,
        isSpeciesValid: heroFound.race === hero.race,
        height: heroFound.height,
        isHeightValid: getNumberFieldValidation(hero.height, heroFound.height),
        weight: heroFound.weight,
        isWeightValid: getNumberFieldValidation(hero.weight, heroFound.weight),
        hairColor: heroFound.hairColor,
        isHairColorValid: heroFound.hairColor === hero.hairColor,
        skinColor: heroFound.skinColor,
        isSkinColorValid: heroFound.skinColor === hero.skinColor,
        publisher: heroFound.publisher,
        isPublisherValid: heroFound.publisher === hero.publisher,
      };
      setGuesses([...guesses, heroGuess]);
      if (hero.name === guess) {
        toast.success("You guessed it right!", {
          autoClose: 2000,
        });
      }
      setGuess("");
    }
  };

  return (
    <>
      <div className="background"></div>
      <div className="guess-character-container">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          style={{ position: "fixed", top: "30px", left: "30px" }}
          onClick={handleMenuClick}
        >
          Menu
        </Button>
        <div className="guess-character-form-container">
          <div>
            <h3 className="guess-character-title">Guess today's Super Hero</h3>
            <h3 className="guess-character-subtitle">
              Type any champion to begin.
            </h3>
          </div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={herosList.map((el) => {
              return el.name;
            })}
            sx={{ width: 300 }}
            onChange={(event: any, newValue: string | null) => {
              if (newValue !== null) setGuess(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Hero name"
                onChange={handleGuessChange}
                value={guess}
              />
            )}
          />
          <div className="character-buttons-container">
            <Button
              variant="contained"
              color="error"
              endIcon={<LoopIcon />}
              onClick={handleRerollClick}
            >
              Reroll
            </Button>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleGuess}
            >
              Validate
            </Button>
          </div>
        </div>
      </div>
      <div className="result-container">
        <div className="guess-character-res-container">
          {guesses.map((el, index) => (
            <CharacterGuess data={el} key={index} />
          ))}
          <GuessCategories />
        </div>
      </div>
    </>
  );
};

export default GuessCharacter;
